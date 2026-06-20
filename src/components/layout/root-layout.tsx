/** @format */

import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../header";
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <Header />

    <Outlet />

    <TanStackRouterDevtools />
  </>
);
export default RootLayout;
