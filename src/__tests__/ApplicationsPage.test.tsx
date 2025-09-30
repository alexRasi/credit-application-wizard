import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationsPage } from "../pages/ApplicationsPage";

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

describe("ApplicationsPage", () => {
  it("renders applications page", () => {
    renderWithProviders(<ApplicationsPage />);

    expect(screen.getByText("Applications")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Apply again" }),
    ).toBeInTheDocument();
  });

  it("shows loading spinner initially", () => {
    renderWithProviders(<ApplicationsPage />);

    expect(screen.getAllByTestId("spinner")[0]).toBeInTheDocument();
  });
});
