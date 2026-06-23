/** @format */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(root)/movie/comment/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(root)/movie/comment/"!</div>;
}
