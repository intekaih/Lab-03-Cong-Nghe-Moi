import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const STUDENT_NAME = "Nguyễn Huỳnh Tiến Khải";
const STUDENT_ID = "2212385";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Xin chào! Tôi là <strong className="text-foreground">{STUDENT_NAME}</strong>, sinh viên năm 4
          ngành Công nghệ Thông tin tại Đại học Đà Lạt.
        </p>

        <div className="flex items-center gap-4 my-8">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
              TK
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-foreground">{STUDENT_NAME}</h2>
            <p className="text-muted-foreground">Sinh viên CNTT - Đại học Đà Lạt</p>
            <p className="text-muted-foreground">Lớp: CTK 46 A | MSSV: {STUDENT_ID}</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL & PostgreSQL</li>
          <li>Node.js & Express</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Học vấn</h2>
        <div className="rounded-lg p-4 border bg-card">
          <p className="font-medium text-foreground">Đại học Đà Lạt</p>
          <p className="text-muted-foreground">Cử nhân Công nghệ Thông tin (2022 — 2026)</p>
          <p className="text-muted-foreground">MSSV: {STUDENT_ID} | Lớp: CTK 46 A</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Sở thích</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Phát triển web</li>
          <li>Khám phá các công nghệ mới</li>
          <li>Đọc sách kỹ thuật</li>
          <li>Du lịch</li>
        </ul>
      </div>
    </div>
  );
}
