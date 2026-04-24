# Bài tập tự làm — Lab 03

## Phần 1: Data Fetching

### Câu 1: Thay fetch() bằng fetch(url, { cache: 'no-store' })
**File:** `src/app/blog/page.tsx`

Thay đổi trong hàm `getPosts()`:
```typescript
// Trước (cached):
const res = await fetch("https://jsonplaceholder.typicode.com/posts");

// Sau (không cache):
const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "no-store"
});
```

**Quan sát:**
- Mở DevTools > Network tab
- Reload trang nhiều lần
- Với `cache: 'no-store'`: mỗi request đều có status 200 (không from cache)
- Với default: request đầu tiên 200, các request tiếp theo (from cache) hoặc 304

**Giải thích:**
- `cache: 'no-store'`: Không bao giờ dùng cache, mỗi request đều gọi thẳng đến server gốc
- `next: { revalidate: 60 }`: Revalidate sau 60 giây, giữa các lần revalidate vẫn trả về data cũ

### Câu 2: Hiển thị Comments trong trang chi tiết
**File:** `src/app/blog/[id]/page.tsx`

Gọi thêm API comments:
```typescript
async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
  );
  if (!res.ok) return [];
  return res.json();
}
```

Sử dụng trong component:
```typescript
const comments = await getComments(post.id);
// Hiển thị danh sách comments
```

### Câu 3: Promise.all() cho gọi song song
**File:** `src/app/blog/[id]/page.tsx`

```typescript
// Tuyệt đối (chạy tuần tự - chậm hơn):
const post = await getPost(id);
const author = await getUser(post.userId);

// Tốt hơn (chạy song song - nhanh hơn):
const [post, author] = await Promise.all([
  getPost(id),
  getUser(post.userId)
]);
```

**Tại sao tốt hơn?**
1. Giảm thời gian chờ (2 request chạy đồng thời, chỉ mất thời gian của request chậm nhất)
2. Tận dụng bandwidth
3. Nếu 1 trong 2 thất bại, có thể xử lý lỗi ngay lập tức
4. Giải phóng thread/connection sớm hơn

---

## Phần 2: API Routes

### Thêm PUT route chỉnh sửa entry
**File:** `src/app/api/guestbook/[id]/route.ts`

```typescript
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Không tìm thấy" }, { status: 404 });
  }
  // Validate...
  guestbookEntries[index] = { ...guestbookEntries[index], ...body };
  return NextResponse.json(guestbookEntries[index]);
}
```

### Thêm query param ?limit=
**File:** `src/app/api/guestbook/route.ts`

```typescript
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  if (limit) {
    return NextResponse.json(guestbookEntries.slice(0, parseInt(limit)));
  }
  return NextResponse.json(guestbookEntries);
}
```

---

## Phần 3: Client-side Fetching

### Loading state cho nút Xóa
**File:** `src/components/delete-button.tsx`

Đã có sẵn trong component hiện tại — khi `deleting` là `true`, button hiển thị "Đang xóa..." và disabled.

---

## Phần 4: Server Actions

### Nút "Gửi tin nhắn khác" sau khi gửi thành công
**File:** `src/app/contact/page.tsx`

Đã có sẵn trong form hiện tại — sau khi `state.success` là `true`, hiển thị thông báo thành công với nội dung "Cảm ơn bạn đã liên hệ".

### useFormStatus() (thay thế useActionState)
**Lưu ý:** `useFormStatus()` chỉ hoạt động trong form con của component cha. Tương tự như `isPending` trong `useActionState`.

---

## Phần 5: shadcn/ui

### Dialog cho xác nhận xóa
**File:** `src/components/delete-button.tsx`

Đã implement sử dụng `Dialog` component từ shadcn/ui thay vì `window.confirm()`.

### Avatar cho About page
**File:** `src/app/about/page.tsx`

Đã sử dụng `Avatar` và `AvatarFallback` từ shadcn/ui.
