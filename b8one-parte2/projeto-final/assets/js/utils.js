function formatPerfilIcon(nameFull) {
  const nameSplit = nameFull.split(' ');
  return nameSplit[0][0] + nameSplit[1][0];
}

function formatPercentege(data) {
  return data.slice(1, data.length);
}

function formatPrice(price) {

  let priceString = price.toString();
  const n = priceString.length;
  const priceReal = priceString.slice(0, n - 2)
  const pricecents = priceString.slice(n - 2, n);
  const priceCorrent = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(priceReal) + "," + pricecents;

  return priceCorrent;
}

export { formatPerfilIcon, formatPercentege, formatPrice };