"use client";
import { Button } from "@/components/ui/button";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-destructive mb-4">
        Đã xảy ra lỗi!
      </h2>
      <p className="text-muted-foreground mb-6">
        {error.message || "Không thể tải nội dung blog. Vui lòng thử lại."}
      </p>
      <Button onClick={reset}>
        Thử lại
      </Button>
    </div>
  );
}
