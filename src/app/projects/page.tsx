import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Website Portfolio",
    description: "Website ca nhan xay dung bang Next.JS va Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Dang phat trien",
  },
  {
    title: "Ung dung Quan ly Cong viec",
    description: "Ung dung Todo App voi React va Local Storage",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoan thanh",
  },
  {
    title: "API RESTful",
    description: "API quan ly san pham voi Node.js va Express",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Hoan thanh",
  },
  {
    title: "Chat Realtime",
    description: "Ung dung chat realtime voi Socket.IO",
    tech: ["React", "Socket.IO", "Node.js"],
    status: "Dang phat trien",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Du an</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.status === "Hoan thanh" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
