// from stackoverflow
export const isValidMediaUrl = (url: string): boolean => {
  // Basic URL pattern checking (you might want to use a more sophisticated method)
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  const isValidUrl = !!urlPattern.test(url);
  const allowedExtensions = /(\.mp4|\.mov)$/i; // Add other media extensions if needed
  return isValidUrl && allowedExtensions.test(url);
};
