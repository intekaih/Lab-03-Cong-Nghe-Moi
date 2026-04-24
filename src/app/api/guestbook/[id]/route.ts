import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// PUT /api/guestbook/[id] — Chinh sua loi nhan
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Khong tim thay loi nhan" },
      { status: 404 }
    );
  }

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

  guestbookEntries[index] = {
    ...guestbookEntries[index],
    name: body.name,
    message: body.message,
  };

  return NextResponse.json(guestbookEntries[index]);
}

// DELETE /api/guestbook/[id] — Xoa loi nhan theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Khong tim thay loi nhan" },
      { status: 404 }
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}
