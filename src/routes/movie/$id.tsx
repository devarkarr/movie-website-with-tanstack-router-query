/** @format */

import { createFileRoute } from "@tanstack/react-router";
import DetailPage from "../../features/detail";

export const Route = createFileRoute("/movie/$id")({
  component: DetailPage,
});
