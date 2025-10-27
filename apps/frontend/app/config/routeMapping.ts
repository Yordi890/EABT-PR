/**
 * Mapeo de rutas locales a rutas de API en inglés.
 * Este objeto permite mantener una correspondencia consistente entre los nombres de rutas
 * usados internamente (en español) y los endpoints de la API (en inglés).
 *
 * @example
 * // Uso:
 * // routeMapping.usuarios -> "users"
 * // routeMapping.productos -> "products"
 */
const routeMapping: { [key: string]: string } = {
  usuarios: "users",
  productores: "producers",
  expedientes: "landFiles",
};

export default routeMapping;
