import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url)
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });

  try {
    const res = await fetch(url);
    if (!res.ok)
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: res.status },
      );

    const contentType = res.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await res.arrayBuffer());

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Fetch error" }, { status: 500 });
  }
}
