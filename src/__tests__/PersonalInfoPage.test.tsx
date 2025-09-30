import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PersonalInfoPage } from "../pages/PersonalInfoPage";

describe("PersonalInfoPage", () => {
  it("renders form fields", () => {
    render(
      <BrowserRouter>
        <PersonalInfoPage />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
  });

  it("shows validation errors for empty form", async () => {
    render(
      <BrowserRouter>
        <PersonalInfoPage />
      </BrowserRouter>,
    );

    const nameInput = screen.getByLabelText("Full Name");
    nameInput.focus();
    nameInput.blur();

    await waitFor(() => {
      expect(
        screen.getAllByText("Full name is required")[0],
      ).toBeInTheDocument();
    });
  });
});
