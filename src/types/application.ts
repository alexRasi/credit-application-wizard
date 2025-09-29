export type EmploymentType = "full-time" | "part-time" | "unemployed";

export interface PersonalForm {
  fullName: string;
  email: string;
  dob: string; // DD-MM-YYYY
}

export interface FinancesForm {
  employmentType: EmploymentType | "";
  income: number | "";
  termsAccepted: boolean;
}

export interface ApplicationPayload {
  fullName: string;
  email: string;
  date: string; // ISO 8601 format, e.g. "1990-07-25T00:00:00Z"
  employmentType: EmploymentType | "";
  income: number | "";
}

export interface ApplicationRecord extends ApplicationPayload {
  id: number;
}
