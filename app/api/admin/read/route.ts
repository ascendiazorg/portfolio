import { NextRequest, NextResponse } from "next/server";
import { markAsRead } from "@/lib/db";
import { cookies } from "next/headers";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await request.json();
  await markAsRead(Number(id));
  return NextResponse.json({ success: true });
}
