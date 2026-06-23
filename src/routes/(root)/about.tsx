/** @format */

import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../features/detail";

export const Route = createFileRoute("/(root)/about")({
  component: AboutPage,
});
