import { Outlet } from "react-router";

// Eliminamos el loader del servidor para que no bloquee la entrada.
// El navegador se encargará de verificar la sesión en el cliente.

export default function ProtectedLayout() {
  return <Outlet />;
}