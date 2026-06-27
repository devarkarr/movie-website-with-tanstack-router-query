/** @format */

import { useState } from "react";
import Cookies from "js-cookie";

const useCookies = () => {
  const [token, _setToken] = useState(() => Cookies.get("token") ?? null);

  const setToken = (newToken: string) => {
    Cookies.set("token", newToken, { expires: 7 });

    _setToken(newToken);
  };

  const resetToken = () => {
    Cookies.remove("token");
    _setToken(null);
  };

  return {
    token,
    setToken,
    resetToken,
  };
};

export default useCookies;
