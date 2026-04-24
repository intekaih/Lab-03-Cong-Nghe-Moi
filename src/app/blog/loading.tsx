export default function BlogLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="h-8 w-48 rounded animate-pulse mb-6 bg-muted" />
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex gap-3 mb-3">
              <div className="h-5 w-20 rounded animate-pulse bg-muted" />
              <div className="h-5 w-24 rounded animate-pulse bg-muted" />
            </div>
            <div className="h-6 w-3/4 rounded animate-pulse bg-muted mb-2" />
            <div className="h-4 w-full rounded animate-pulse bg-muted" />
            <div className="h-4 w-2/3 rounded animate-pulse bg-muted mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
