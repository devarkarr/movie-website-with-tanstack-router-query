/** @format */

import { createFileRoute } from "@tanstack/react-router";
import MemoPage from "../../features/memo";

export const Route = createFileRoute("/(root)/memo")({
  component: MemoPage,
});
