/** @format */

import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/(auth)")({
  beforeLoad: async () => {
    const token = Cookies.get("token");

    if (token) {
      throw redirect({ to: "/", replace: true });
    }
  },
  component: Outlet,
});
