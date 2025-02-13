export const formatCurrency = (value: string) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    Number(value)
  );
};
