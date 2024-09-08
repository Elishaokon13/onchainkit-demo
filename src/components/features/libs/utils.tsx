export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text; // Return original text if within limit
  return text.slice(0, maxLength) + "..."; // Truncate and append ellipsis
};
