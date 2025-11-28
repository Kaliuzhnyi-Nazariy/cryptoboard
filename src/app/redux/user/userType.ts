export type UserState = {
  user: {
    name: string;
    email: string;
    createdAt?: string;
    tokens: token[];
    // avatar: string;
    avatar: {
      link: string;
      name: string;
    };
  };
  token: string | null;
  isLoggedIn: boolean;
  error: null | string;
  isLoading: boolean;
};

export type token = {
  _id: string;
  name: string;
  purchases: { price: number; amount: number }[];
};
