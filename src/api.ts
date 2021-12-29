const BAS_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BAS_URL}/coins`).then((reponse) => reponse.json());
}
export async function priceFetch(coinId: string) {
  return await (await fetch(`${BAS_URL}/tickers/${coinId}`)).json();
}
export function infoFetch(coinId: string) {
  return fetch(`${BAS_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinHistoty(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BAS_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
