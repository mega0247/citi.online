import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const res = await fetch(
      "https://api.ipregistry.co/?key=ira_rvdSzWTajk0lZZ4a8r0jjlMyKNGPQG2BTKvw"
    );
    const data = await res.json();
    const countryCode = data.location.country.code;
    if (countryCode !== "US") {
      return NextResponse.redirect("https://www.youtube.com");
    }
  } catch (error) {
    console.error("GeoIP lookup failed:", error);
  }

  return NextResponse.next();
}
