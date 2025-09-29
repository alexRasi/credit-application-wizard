import type { ApplicationRecord } from "../types/application";
import { normalizeEmploymentType } from "./adapters";

const BASE = "https://682de3f5746f8ca4a47b0980.mockapi.io";

export const fetchApplications = async (): Promise<ApplicationRecord[]> => {
  const res = await fetch(`${BASE}/applications`);
  if (!res.ok) throw new Error(`Failed to load applications (${res.status})`);

  const data = await res.json();

  return data.map(
    (response: ApplicationRecord): ApplicationRecord => ({
      ...response,
      id: Number(response.id), // api returns id as string but contract says number
      // backend returns full and part instead of full-time and part-time
      employmentType: normalizeEmploymentType(response.employmentType),
    }),
  );
};

export const createApplication = async (
  payload: Partial<ApplicationRecord>,
): Promise<ApplicationRecord> => {
  const res = await fetch(`${BASE}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to submit application (${res.status})`);
  return res.json();
};

export const deleteApplication = async (id: string | number): Promise<void> => {
  const res = await fetch(`${BASE}/applications/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Failed to delete application (${res.status})`);
};
