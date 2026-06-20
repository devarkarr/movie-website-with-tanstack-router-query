/** @format */

import { createRootRoute } from "@tanstack/react-router";

import Notfound from "../features/errors/notfound";
import RootLayout from "../components/layout/root-layout";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: Notfound,
});
