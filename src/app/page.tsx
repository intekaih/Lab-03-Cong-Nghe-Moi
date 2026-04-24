import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SITE_NAME = "Portfolio";
const STUDENT_NAME = "Nguyễn Huỳnh Tiến Khải";
const STUDENT_ID = "2212385";
const CLASS_NAME = "CTK 46 A";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-primary/20">
          <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=TK" />
          <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
            {STUDENT_NAME.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là{" "}
          <span className="text-primary">{STUDENT_NAME}</span>
        </h1>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            MSSV: {STUDENT_ID}
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            {CLASS_NAME}
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê phát triển web và khám phá các công nghệ mới.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-6"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-6"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-lg p-4 text-center border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-accent/30 border-accent">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Đọc Blog của tôi</h2>
          <p className="text-muted-foreground mb-4">
            Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
          </p>
          <Link
            href="/blog"
            className="text-primary font-semibold hover:underline"
          >
            Xem blog →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

