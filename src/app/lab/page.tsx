import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifySessionToken } from "@/lib/lab-auth";
import LabLoginForm from "./LabLoginForm";

export default async function LabPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET ?? "";

  if (token && (await verifySessionToken(token, secret))) {
    redirect("/lab/dash");
  }

  return <LabLoginForm />;
}
