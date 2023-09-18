export function formatToBRL(value: number) {
  const intlNumberFormatBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return intlNumberFormatBRL.format(value);
}
