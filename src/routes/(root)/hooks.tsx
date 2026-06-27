/** @format */

import { createFileRoute } from "@tanstack/react-router";
import HookPage from "../../features/hookpage";

export const Route = createFileRoute("/(root)/hooks")({
  component: HookPage,
});
