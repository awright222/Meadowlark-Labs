import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifySessionToken } from "@/lib/lab-auth";

export const config = {
  matcher: ["/lab/dash/:path*", "/api/lab/analytics/:path*"],
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET ?? "";

  if (!token || !(await verifySessionToken(token, secret))) {
    const url = req.nextUrl.clone();
    url.pathname = "/lab";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
