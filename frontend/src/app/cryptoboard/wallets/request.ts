import { api } from "@/app/redux/requests/api";

export const stripeReq = async ({ amount }: { amount: number }) => {
  // console.log(amount);
  // const res = await api.post("/create-checkout-session", { amount });
  // return res.data;

  return api.post("/create-checkout-session", { amount });
};
