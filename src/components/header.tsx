/** @format */

import { Link } from "@tanstack/react-router";
import { useAuth } from "../providers/auth-provider";

const Header = () => {
  const { resetToken, token } = useAuth();

  const logout = () => {
    resetToken();
  };

  return (
    <div className="p-2 flex gap-2 justify-between">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>

      {!token && (
        <Link to="/sign-in" className="[&.active]:font-bold">
          Sign in
        </Link>
      )}

      {token && (
        <button className="bg-red-500 text-white py-2 px-4" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
