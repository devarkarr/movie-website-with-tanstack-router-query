/** @format */

import { useState, type SubmitEvent } from "react";
import { useLogin } from "../../../service/auth/mutations";

const SignInPage = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const login = useLogin();

  const handleLogin = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate(loginForm);
  };

  return (
    <div className="w-full flex justify-center h-screen items-center">
      <form className="space-y-3" onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Username</label>
          <div>
            <input
              type="text"
              value={loginForm.username}
              onChange={(e) => {
                setLoginForm((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
              className="bg-slate-200 rounded h-10 "
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <div>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              className="bg-slate-200 rounded h-10 "
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="h-8 px-4 bg-black text-white rounded"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
