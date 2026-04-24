import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Gioi thieu</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          Xin chao! Toi la <strong>Nguyen Van A</strong>, sinh vien nam 4
          nganh Cong nghe Thong tin tai Dai hoc Da Lat.
        </p>

        <div className="flex items-center gap-4 my-8">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="text-3xl bg-blue-100 text-blue-600">
              NVA
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Nguyen Van A</h2>
            <p className="text-gray-500">Sinh vien CNTT - Dai hoc Da Lat</p>
            <p className="text-gray-500">Lop: CTK46</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ky nang</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.JS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL & PostgreSQL</li>
          <li>Node.js & Express</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Hoc van</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Dai hoc Da Lat</p>
          <p className="text-gray-500">Cử nhân Cong nghe Thong tin (2021 — 2025)</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">So thich</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Phat trien web</li>
          <li>Khám phá cac cong nghe moi</li>
          <li>Doc sach ky thuat</li>
          <li>Du lich</li>
        </ul>
      </div>
    </div>
  );
}
