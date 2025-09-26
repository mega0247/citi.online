import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo?.country || "unknown";

  if (country !== "US") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!home).*)"],
};
