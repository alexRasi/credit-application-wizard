import type { EmploymentType } from "../types/application";

export const normalizeEmploymentType = (v: string): EmploymentType | "" => {
  switch (v) {
    case "full-time":
    case "full":
      return "full-time";
    case "part-time":
    case "part":
      return "part-time";
    case "unemployed":
      return "unemployed";
    default:
      return "";
  }
};
