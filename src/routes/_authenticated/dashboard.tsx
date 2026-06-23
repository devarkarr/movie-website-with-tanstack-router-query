/** @format */

import { createFileRoute, redirect } from "@tanstack/react-router";
import Dashboard from "../../features/dashboard";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_authenticated/dashboard")({
    beforeLoad: async () => {
    const token = Cookies.get("token");

    if (!token) {
      throw redirect({ to: "/sign-in", replace: true });
    }
  },
  component: Dashboard,
});
