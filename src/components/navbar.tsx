import Link from "next/link";
import { cn } from "@/lib/utils";

const SITE_NAME = "Nguyễn Huỳnh Tiến Khải";
const STUDENT_ID = "2212385";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/guestbook", label: "Sổ lưu bút" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {SITE_NAME}
          </Link>
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary",
                  "text-muted-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden text-xs text-muted-foreground">
            {STUDENT_ID}
          </div>
        </div>
      </div>
    </nav>
  );
}
