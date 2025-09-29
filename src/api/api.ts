import type { ApplicationRecord } from "../types/application";

const BASE = "https://682de3f5746f8ca4a47b0980.mockapi.io";

export const fetchApplications = async (): Promise<ApplicationRecord[]> => {
  const res = await fetch(`${BASE}/applications`);
  if (!res.ok) throw new Error(`Failed to load applications (${res.status})`);
  return res.json();
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
