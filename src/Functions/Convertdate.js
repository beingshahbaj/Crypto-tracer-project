export const convertdate = (number) => {
  const date = new Date(number);

  const newdate = date.getDate() + "/" + date.getMonth();

  return newdate;
};
