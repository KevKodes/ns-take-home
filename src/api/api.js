// Get coin price based on passed in currency initials
export const getCoinPrice = (code) => {
  return fetch(`https://api.coinbase.com/v2/prices/${code}/buy`).then(
    (resp) => {
      if (resp.status === 200) {
        return resp.json();
      } else {
        throw new Error("Invalid response");
      }
    }
  );
};

// Get list of available coins to track
export const getCurrencyList = (s) => {
  return fetch(`https://api.coinbase.com/v2/currencies/crypto`).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } else {
      throw new Error("Currencies not found");
    }
  });
};
