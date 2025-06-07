const Form_Currency = new Intl.NumberFormat("undefined", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (amount: number): string => {
  return Form_Currency.format(amount);
};
