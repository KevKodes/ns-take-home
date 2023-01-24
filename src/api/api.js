// Get coin price based on passed in currency initials
export const getCoinPrice = (name) => {
  return fetch(`https://api.coinbase.com/v2/prices/${name}/buy`).then(
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
export const getCoinList = (s) => {
  return fetch(`https://api.coinbase.com/v2/currencies/crypto`).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } else {
      throw new Error("Currencies not found");
    }
  });
};
