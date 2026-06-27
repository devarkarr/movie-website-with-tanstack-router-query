/** @format */

import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../features/dashboard";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";

const validateSearch = zodValidator(
  z.object({
    search: z.string().optional(),
  })
);

export const Route = createFileRoute("/_authenticated/dashboard")({
  validateSearch,
  component: Dashboard,
});
