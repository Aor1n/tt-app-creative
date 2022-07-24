export interface AuthContextProps {
  state: {accessToken: string};
  actions: {
    signIn: (params: FormData | Record<string, any>) => Promise<void>;
  };
}
