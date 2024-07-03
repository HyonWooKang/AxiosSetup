export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token);
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setCookies = () => {
  document.cookie = `access_token=${getAccessToken()};`;
  document.cookie = `refresh_token=${getRefreshToken()};`;
};


export const setIsAutoLogin = (isAutoLogin: boolean) => {
  localStorage.setItem("isAutoLogin", isAutoLogin.toString());
};

export const getIsAutoLogin = () =>
  (localStorage.getItem("isAutoLogin") ?? "false") === "true";

export const isLoginUser = () =>
  (localStorage.getItem("isLoginUser") ?? "false") === "true";

export const setIsLoginUser = (isLoginUser: string) =>
  localStorage.setItem("isLoginUser", isLoginUser);
