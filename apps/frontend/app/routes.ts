import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  layout("routes/protected.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    route("dashboard/:resource", "routes/dashboard.resource.tsx"),
    route(":resource/:id/edit", "routes/edit.tsx"),
  ]),
] satisfies RouteConfig;
