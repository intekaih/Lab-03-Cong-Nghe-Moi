import Link from "next/link";
import { Post } from "@/types/post";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ============================================================
// BAI TAP TU LAM — PHAN 1, CAU 1:
// fetch(url, { cache: 'no-store' }) thay vi fetch(url)
// - fetch(url) mac dinh LA cached (co the co trong CDN)
// - fetch(url, { cache: 'no-store' }) KHONG bao gio dung cache
//   -> moi request deu goi thang den server goc
//   -> thay doi tren server duoc thay hien ngay
//   -> thich hop cho data thuong xuyen thay doi
//
// Thu reload trang nhieu lan, mo DevTools > Network tab:
//   - cache: 'no-store' -> moi request deu co status 200 (khong from cache)
//   - default (cached) -> request dau tien 200, tiep theo (from cache)
//
// Hoac su dung { next: { revalidate: 60 } } de revalidate sau 60s
// ============================================================

async function getPostsNoStore(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Khong the tai danh sach bai viet");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPostsNoStore();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-2">
        Tổng cộng {posts.length} bài viết từ API
      </p>
      <p className="text-xs text-muted-foreground mb-6 italic">
        (Sử dụng fetch(url, &#123; cache: &apos;no-store&apos; &#125;) — mỗi request đều lấy từ server)
      </p>
      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={"/blog/" + post.id}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Tác giả #{post.userId}</Badge>
                  <span className="text-sm text-muted-foreground">Bài #{post.id}</span>
                </div>
                <CardTitle className="capitalize">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.body}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
