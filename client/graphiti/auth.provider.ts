import { setHeaders } from './data.provider';
import { fetcher } from './utils';

export default {
  // called when the user attempts to log in
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const res = await fetcher(`users/sign_in`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        email: username,
        password,
      }),
    });
    if (res.status === 200) {
      localStorage.setItem('Access-Token', res.headers.get('Access-Token'));
      return Promise.resolve();
    }
    return Promise.reject();
  },

  // called when the user clicks on the logout button
  logout: async () => {
    const res = await fetcher(`users/sign_out`, {
      method: 'DELETE',
      headers: setHeaders(),
    });
    if (res.status === 200) {
      localStorage.removeItem('Access-Token');
      return Promise.resolve();
    }
    return Promise.reject();
  },

  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('Access-Token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('Access-Token')
      ? Promise.resolve()
      : Promise.reject();
  },

  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
