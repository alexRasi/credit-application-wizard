import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FinancesPage } from "../pages/FinancesPage";

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>,
  );
};

describe("FinancesPage", () => {
  it("renders finances form", () => {
    renderWithProviders(<FinancesPage />);

    expect(screen.getByText("Finances")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Your monthly net income"),
    ).toBeInTheDocument();
    expect(screen.getByText("Employment type")).toBeInTheDocument();
    expect(
      screen.getByText("I accept the terms and conditions"),
    ).toBeInTheDocument();
  });

  it("validates required fields on submit", async () => {
    renderWithProviders(<FinancesPage />);

    const incomeInput = screen.getAllByTestId("income-input")[0];
    incomeInput.focus();
    incomeInput.blur();

    await waitFor(() => {
      expect(screen.getAllByText("Income is required")[0]).toBeInTheDocument();
    });
  });
});
