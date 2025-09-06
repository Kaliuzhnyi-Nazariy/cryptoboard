export type UserState = {
  user: {
    name: string;
    email: string;
    avatar: string;
  } | null;
  isLoggedIn: boolean;
  error: null | string;
  isLoading: boolean;
};
