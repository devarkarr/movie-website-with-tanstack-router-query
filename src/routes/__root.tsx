/** @format */

import { createRootRouteWithContext } from "@tanstack/react-router";

import Notfound from "../features/errors/notfound";
import RootLayout from "../components/layout/root-layout";
import type { AuthContextType } from "../providers/auth-provider";

interface RouteContext {
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootLayout,
  notFoundComponent: Notfound,
});
