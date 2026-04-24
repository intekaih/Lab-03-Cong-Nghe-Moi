import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">A</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chao! Toi la <span className="text-blue-600">Nguyen Van A</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sinh vien Cong nghe Thong tin tai Dai hoc Da Lat. Dam me phat trien web va kham pha cac cong nghe moi.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Xem du an
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Lien he
          </Link>
        </div>
      </div>
      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Ky nang</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.JS",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* CTA section */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Doc Blog cua toi</h2>
        <p className="text-gray-600 mb-4">
          Chia se kien thuc va kinh nghiem ve lap trinh, cong nghe
        </p>
        <Link
          href="/blog"
          className="text-blue-600 font-semibold hover:underline"
        >
          Xem blog
        </Link>
      </div>
    </div>
  );
}
