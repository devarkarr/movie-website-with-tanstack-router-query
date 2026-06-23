/** @format */

import { createRootRouteWithContext } from "@tanstack/react-router";

import Notfound from "../features/errors/notfound";
import RootLayout from "../components/layout/root-layout";
import type { AuthState } from "../store/AuthStore";

interface RouteContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootLayout,
  notFoundComponent: Notfound,
});
