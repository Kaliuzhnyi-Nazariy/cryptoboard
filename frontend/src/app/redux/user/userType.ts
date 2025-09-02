export type UserState = {
  user: {
    name: string;
    email: string;
  } | null;
  isLoggedIn: boolean;
  error: null | string;
  isLoading: boolean;
};
