/** @format */

import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../providers/auth-provider";

const Header = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "RESET_TOKEN",
      payload: null,
    });

    navigate({ to: "/sign-in", replace: true });
  };

  return (
    <div className="p-2 flex gap-2 justify-between">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>

      {!state.token && (
        <Link to="/sign-in" className="[&.active]:font-bold">
          Sign in
        </Link>
      )}

      {state.token && (
        <button className="bg-red-500 text-white py-2 px-4" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
