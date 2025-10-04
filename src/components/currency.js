const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const Currency_fun = (number) => {
  return CURRENCY_FORMATER.format(number);
};
export default Currency_fun;
