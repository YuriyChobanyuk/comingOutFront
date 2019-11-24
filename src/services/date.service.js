export const validateDate = value => {
  const valueDate = new Date(value);
  return valueDate.valueOf() >= Date.now() - 24 * 3600 * 1000;
};

export const transformDateToInput = ISOSdate => {
  const date = new Date(ISOSdate);
  const data = `${date.getFullYear()}-${
    +date.getMonth() + 1 > 9 ? +date.getMonth() + 1 : "0" + (+date.getMonth() + 1)
  }-${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}`;
  return data;
};
