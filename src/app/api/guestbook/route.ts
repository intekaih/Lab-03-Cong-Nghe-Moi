import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

// GET /api/guestbook — Lay danh sach tat ca loi nhan
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  if (limit) {
    const numLimit = parseInt(limit, 10);
    if (!isNaN(numLimit) && numLimit > 0) {
      return NextResponse.json(guestbookEntries.slice(0, numLimit));
    }
  }

  return NextResponse.json(guestbookEntries);
}

// POST /api/guestbook — Them loi nhan moi
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.message) {
    return NextResponse.json(
      { error: "Ten va loi nhan la bat buoc" },
      { status: 400 }
    );
  }

  if (body.name.length < 2 || body.name.length > 50) {
    return NextResponse.json(
      { error: "Ten phai tu 2 den 50 ky tu" },
      { status: 400 }
    );
  }

  if (body.message.length < 1 || body.message.length > 500) {
    return NextResponse.json(
      { error: "Loi nhan phai tu 1 den 500 ky tu" },
      { status: 400 }
    );
  }

  const newEntry = {
    id: Date.now().toString(),
    name: body.name,
    message: body.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
