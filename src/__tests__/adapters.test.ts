import { describe, it, expect } from "vitest";
import { normalizeDate } from "../api/adapters";

describe("normalizeDate", () => {
  it("converts DD-MM-YYYY to ISO format", () => {
    expect(normalizeDate("25-07-1990")).toBe("1990-07-25T00:00:00.000Z");
  });

  it("handles empty input", () => {
    expect(normalizeDate("")).toBe("");
  });

  it("handles single-digit day and month correctly", () => {
    expect(normalizeDate("5-1-2000")).toBe("2000-01-05T00:00:00.000Z");
  });

  it("produces correct ISO string for end of year", () => {
    expect(normalizeDate("31-12-2021")).toBe("2021-12-31T00:00:00.000Z");
  });
});
