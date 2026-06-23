/** @format */

import { Link, useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";

const Header = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    navigate({ to: "/sign-in", replace: true });
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
