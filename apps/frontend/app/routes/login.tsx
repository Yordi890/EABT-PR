import type { ActionFunctionArgs } from "react-router";
import { createUserSession } from "~/services/session.service.ts";
import LoginForm from "~/components/forms/LoginForm";

export function HydrateFallback() {
  return <h1>Cargando</h1>;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const userId = formData.get("userId")?.toString();

  if (!userId) {
    // console.log("No hay userID");
    return;
  }

  // Crea la cookie HTTPOnly
  return createUserSession({
    request,
    userId,
    remember: false,
    redirectUrl: "/dashboard",
  });
}

export default function LoginRoute() {
  return <LoginForm />;
}