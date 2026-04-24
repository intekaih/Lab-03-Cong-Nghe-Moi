import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// PUT /api/guestbook/[id] — Chỉnh sửa lời nhắn
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 }
    );
  }

  if (!body.name || !body.message) {
    return NextResponse.json(
      { error: "Tên và lời nhắn là bắt buộc" },
      { status: 400 }
    );
  }

  if (body.name.length < 2 || body.name.length > 50) {
    return NextResponse.json(
      { error: "Tên phải từ 2 đến 50 ký tự" },
      { status: 400 }
    );
  }

  if (body.message.length < 1 || body.message.length > 500) {
    return NextResponse.json(
      { error: "Lời nhắn phải từ 1 đến 500 ký tự" },
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

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 }
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}
