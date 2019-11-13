export const validateDate = (value) => {
  const valueDate = new Date(value);
  return valueDate.valueOf() >= Date.now() - (24 * 3600 * 1000);
}