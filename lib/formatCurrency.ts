export const formatCurrency = (
  cents: number,
  symbol?: string,
) => {
  const amount = cents / 100;
  return `${symbol || '$'}${amount.toFixed(2)}`;
};
