/** @format */

import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
  beforeLoad: async ({
    context: {
      auth: {
        state: { token },
      },
    },
  }) => {
    if (token) {
      throw redirect({ to: "/", replace: true });
    }
  },
  component: Outlet,
});
