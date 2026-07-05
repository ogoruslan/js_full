function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidUrl(url) {
  const urlRegex = /^https?:\/\/.+/;
  return urlRegex.test(url);
}
console.log(isValidEmail("example@example.com"));
console.log(isValidEmail("invalid-email"));
console.log(isValidUrl("https://www.example.com"));
console.log(isValidUrl("invalid-url"));
export { isValidEmail, isValidUrl };
