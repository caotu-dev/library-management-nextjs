const Cookies = require("js-cookie");

const AuthUtils = {
  authKey: "App_Auth",

  setAuth: (auth: any) => {
    Cookies.set(AuthUtils.authKey, JSON.stringify(auth));
  },

  getAuth: () => {
    const rawData = Cookies.get(AuthUtils.authKey);
    if (!rawData) return null;

    const auth = JSON.parse(rawData);
    return auth;
  },

  getToken: () => {
    return AuthUtils.getAuth()?.token;
  },

  removeAuth: () => {
    Cookies.remove(AuthUtils.authKey);
  },
};

export default AuthUtils;
