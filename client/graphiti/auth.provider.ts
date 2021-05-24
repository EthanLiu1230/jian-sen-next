import { AuthProvider, UserIdentity } from "react-admin";
import { fetcher } from "./utils";

const authProvider: AuthProvider = {
  checkAuth(params: any): Promise<void> {
    return Promise.resolve(undefined);
  },

  checkError(error: any): Promise<void> {
    return Promise.resolve(undefined);
  },

  getIdentity(): Promise<UserIdentity> {
    return Promise.resolve(undefined);
  },

  getPermissions(params: any): Promise<any> {
    return Promise.resolve(undefined);
  },

  async login(params: { email: string; password: string }): Promise<any> {
    const response = await fetcher("sessions", "", {
      method: "POST",
      headers: (() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
      })(),
      body: JSON.stringify({
        user: {
          email: params.email,
          password: params.password,
        },
      }),
    });
  },
  logout(params: any): Promise<void | false | string> {
    return Promise.resolve(undefined);
  },
};
