/**
 * Normalize date from dd-mm-yyyy format to ISO 8601 string.
 * @param ddmmyyyy date string in dd-mm-yyyy format
 * @returns ISO 8601 string (YYYY-MM-DDT00:00:00.000Z) or an empty string if invalid
 */

export const normalizeDate = (ddmmyyyy: string): string => {
  if (!ddmmyyyy) return "";

  const [dd, mm, yyyy] = ddmmyyyy.split("-");
  const year = Number(yyyy);
  const month = Number(mm) - 1; // js months are 0-based
  const day = Number(dd);

  const d = new Date(Date.UTC(year, month, day));
  return d.toISOString();
};
