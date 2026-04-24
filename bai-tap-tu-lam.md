# Bai tap tu lam — Lab 03

## Phan 1: Data Fetching

### Cau 1: Thay fetch() bang fetch(url, { cache: 'no-store' })
**File:** `src/app/blog/page.tsx`

Thay doi trong ham `getPosts()`:
```typescript
// Truoc (cached):
const res = await fetch("https://jsonplaceholder.typicode.com/posts");

// Sau (khong cache):
const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "no-store"
});
```

**Quan sat:**
- Mo DevTools > Network tab
- Reload trang nhieu lan
- Voi `cache: 'no-store'`: moi request deu co status 200 (khong from cache)
- Voi default: request dau tien 200, cac request tiep theo (from cache) hoac 304

**Giai thich:**
- `cache: 'no-store'`: Khong bao gio dung cache, moi request deu goi thang den server goc
- `next: { revalidate: 60 }`: Revalidate sau 60 giay, giua cac lan revalidate van tra ve data cu

### Cau 2: Hien thi Comments trong trang chi tiet
**File:** `src/app/blog/[id]/page.tsx`

Goi them API comments:
```typescript
async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
  );
  if (!res.ok) return [];
  return res.json();
}
```

Su dung trong component:
```typescript
const comments = await getComments(post.id);
// Hien thi danh sach comments
```

### Cau 3: Promise.all() cho goi song song
**File:** `src/app/blog/[id]/page.tsx`

```typescript
// Tuyet doi (chay tuan tu - cham hon):
const post = await getPost(id);
const author = await getUser(post.userId);

// Tot hon (chay song song - nhanh hon):
const [post, author] = await Promise.all([
  getPost(id),
  getUser(post.userId)
]);
```

**Tai sao tot hon?**
1. Giam thoi gian choi (2 request chay dong thoi, chi mat thoi gian cua request cham nhat)
2. Tap dung bandwidth
3. Neu 1 trong 2 that bai, co the xu ly loi ngay lap tuc
4. Giai phong thread/connection som hon

---

## Phan 2: API Routes

### Them PUT route chinh sua entry
**File:** `src/app/api/guestbook/[id]/route.ts`

```typescript
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Khong tim thay" }, { status: 404 });
  }
  // Validate...
  guestbookEntries[index] = { ...guestbookEntries[index], ...body };
  return NextResponse.json(guestbookEntries[index]);
}
```

### Them query param ?limit=
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

## Phan 3: Client-side Fetching

### Loading state cho nut Xoa
**File:** `src/components/delete-button.tsx`

Da co san trong component hien tai — khi `deleting` la `true`, button hien thi "Dang xoa..." va disabled.

---

## Phan 4: Server Actions

### Nut "Gui tin nhan khac" sau khi gui thanh cong
**File:** `src/app/contact/page.tsx`

Da co san trong form hien tai — sau khi `state.success` la `true`, hien thi thong bao thanh cong voi noi dung "Cam on ban da lien he".

### useFormStatus() (thay the useActionState)
**Luu y:** `useFormStatus()` chi hoat dong trong form con cua component cha. Tuong tu nhu `isPending` trong `useActionState`.

---

## Phan 5: shadcn/ui

### Dialog cho xac nhan xoa
**File:** `src/components/delete-button.tsx`

Da implement su dung `Dialog` component tu shadcn/ui thay vi `window.confirm()`.

### Avatar cho About page
**File:** `src/app/about/page.tsx`

Da su dung `Avatar` va `AvatarFallback` tu shadcn/ui.
