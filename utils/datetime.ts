/**
 * Convert Sanity Date Field to preferred format
 * @returns The date in the format 'MM DD YYYY '.
 */
export const formatSanityDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/**
 * Gets the current date in the format 'YYYY-MM-DD'.
 * @returns The current date in the format 'YYYY-MM-DD'.
 */
export function getCurrentDate(): string {
  const currentDate = new Date();

  const year = currentDate.getFullYear();

  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");

  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

/**
 * Converts date to 'YYYY MM' format.
 * @returns The  date in the format 'YYYY MM'.
 */
export const dateToMonthYearFormat = (date: string): string =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
