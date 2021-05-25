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

  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<any> {
    return fetcher(`users/sign_in`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      console.log("res -> ", res);
    });
  },

  logout(params: any): Promise<void | false | string> {
    return Promise.resolve(undefined);
  },
};
export default authProvider;
