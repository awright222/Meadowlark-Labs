import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifySessionToken } from "@/lib/lab-auth";
import LabDash from "./LabDash";

export const dynamic = "force-dynamic";

export default async function DashPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET ?? "";

  if (!token || !(await verifySessionToken(token, secret))) {
    redirect("/lab");
  }

  const configured = {
    vercel: !!process.env.VERCEL_API_TOKEN,
    buildgrade: !!process.env.BUILDGRADE_PROJECT_ID,
    yardcalc: !!process.env.YARDCALC_PROJECT_ID,
    oppmap: !!process.env.OPPMAP_PROJECT_ID,
  };

  return <LabDash configured={configured} />;
}
