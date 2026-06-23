/** @format */

import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../../features/home";

export const Route = createFileRoute("/(root)/")({
  component: HomePage,
});
