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
    // Hacemos que dashboard.tsx sea el Layout (padre) de todo lo que venga después
    route("dashboard", "routes/dashboard.tsx", [
      route("reportes", "routes/reports.tsx"), // La ruta de reportes
      route(":resource", "routes/dashboard.resource.tsx"), // Las rutas de las tablas
    ]),
    route(":resource/:id/edit", "routes/edit.tsx"),
  ]),
] satisfies RouteConfig;