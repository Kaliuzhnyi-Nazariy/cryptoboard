import axios from "axios";

export const getCrypto = async () => {
  // console.log(process.env.CRYPTO_API_KEY);
  // const res = await axios.get(`https://api.coingecko.com/api/v3//coins/list`, {
  //   params: { x_cg_demo_api_key: process.env.CRYPTO_API_KEY },
  //   headers: { Accept: "application/json" },
  // });

  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd", // currency
        order: "market_cap_desc", // or "volume_desc" / "id_asc"
        per_page: 100, // max 250
        page: 1,
        sparkline: false,
        price_change_percentage: "24h", // optional
        x_cg_demo_api_key: process.env.CRYPTO_API_KEY,
      },
    }
  );

  return res.data;
};

export const getPreviewCrypto = async () => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h`,
    {
      params: { x_cg_demo_api_key: process.env.CRYPTO_API_KEY },
      headers: { Accept: "application/json" },
    }
  );

  return res.data;
};

export const getHundredCrypto = async (page: number) => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=24h`,
    {
      params: { x_cg_demo_api_key: process.env.CRYPTO_API_KEY },
      headers: { Accept: "application/json" },
    }
  );

  return res.data;
};
