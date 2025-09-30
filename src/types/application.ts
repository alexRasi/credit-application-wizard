export type EmploymentType = "full-time" | "part-time" | "unemployed";

export const employmentTypeLabels: Record<EmploymentType, string> = {
  "full-time": "Full time",
  "part-time": "Part time",
  unemployed: "Unemployed",
};

export interface PersonalForm {
  fullName: string;
  email: string;
  date: string; // DD-MM-YYYY
}

export interface FinancesForm {
  employmentType: EmploymentType | "";
  income: number | null;
  termsAccepted: boolean;
}

export interface ApplicationPayload {
  fullName: string;
  email: string;
  // TODO fix date attribute name mismatch with backend
  date: string; // ISO 8601 format, e.g. "1990-07-25T00:00:00Z"
  employmentType: EmploymentType | "";
  income: number | null;
}

export interface ApplicationRecord extends ApplicationPayload {
  id: number;
}
