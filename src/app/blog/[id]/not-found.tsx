import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
      <p className="text-muted-foreground mb-6">
        Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Button asChild variant="outline">
        <Link href="/blog">Quay lại danh sách bài viết</Link>
      </Button>
    </div>
  );
}
