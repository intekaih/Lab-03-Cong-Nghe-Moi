export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex gap-8">
        {/* Noi dung chinh */}
        <div className="flex-1">{children}</div>
        {/* Sidebar */}
        <aside className="w-64 shrink-0 hidden md:block">
          <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
            <h3 className="font-semibold mb-3">Danh muc</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Cong nghe</li>
              <li className="hover:text-blue-600 cursor-pointer">Hoc tap</li>
              <li className="hover:text-blue-600 cursor-pointer">Du an ca nhan</li>
              <li className="hover:text-blue-600 cursor-pointer">Cuoc song</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
