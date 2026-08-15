import { redirect } from "react-router";

export async function loader() {
  throw redirect("/login");
}

// export default function Index() {
//   return null; // nunca se renderiza porque redirige
// }
