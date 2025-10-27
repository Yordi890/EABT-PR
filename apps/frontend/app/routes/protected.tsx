import { Outlet, redirect } from "react-router";
import { getUserId } from "~/services/session.service";

export async function loader({ request }: { request: Request }) {
  const userId = await getUserId(request);
  if (!userId) {
    throw redirect("/login");
  }
  return { userId };
}

export default function ProtectedLayout() {
  return <Outlet />;
}
