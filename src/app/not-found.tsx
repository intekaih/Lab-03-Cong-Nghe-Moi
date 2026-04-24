import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground/30 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-muted-foreground mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>
      <Button asChild>
        <Link href="/">Về trang chủ</Link>
      </Button>
    </div>
  );
}
