const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t bg-accent/30">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {YEAR} — Nguyễn Huỳnh Tiến Khải (2212385) | CTK 46 A
        </p>
        <p className="mt-1 text-xs">
          Môn: Các Công Nghệ Mới Trong Phát Triển Phần Mềm
        </p>
      </div>
    </footer>
  );
}
