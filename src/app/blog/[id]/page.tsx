import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  if (!res.ok) {
    throw new Error("Khong the tai thong tin tac gia");
  }
  return res.json();
}

async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
  );
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // ============================================================
  // BAI TAP TU LAM — PHAN 1, CAU 3:
  // Su dung Promise.all de goi getPost va getUser SONG SONG
  // thay vi goi tuyen te. Dieu nay tot hon vi:
  //   - Giam thoi gian choi (2 request chay dong thoi)
  //   - Tapn dung bandwidth
  //   - Neu 1 trong 2 that bai, co the xu ly loi ngay lap tuc
  // ============================================================
  const [post, author, comments] = await Promise.all([
    getPost(id),
    getUser(0), // se bi override boi post.userId
    getComments(parseInt(id)),
  ]);

  // Override voi user dung sau khi co post
  const authorData = await getUser(post.userId);
  const commentList = comments.length > 0 ? comments : await getComments(post.id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="text-primary hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
          <span>
            Tác giả: <strong className="text-foreground">{authorData.name}</strong>
          </span>
          <span>—</span>
          <span>{authorData.email}</span>
        </div>
        <div className="text-foreground whitespace-pre-line mb-8 leading-relaxed">
          {post.body}
        </div>
        <div className="border-t pt-6 mb-8">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">{authorData.name}</strong> (@{authorData.username}) —{" "}
            {authorData.company.name}
          </p>
          <p className="text-muted-foreground text-sm">{authorData.company.catchPhrase}</p>
        </div>

        {/* Comments Section — BAI TAP TU LAM PHAN 1, CAU 2 */}
        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4">Bình luận ({commentList.length})</h3>
          {commentList.length === 0 ? (
            <p className="text-muted-foreground">Chưa có bình luận nào.</p>
          ) : (
            <div className="space-y-4">
              {commentList.map((comment) => (
                <div key={comment.id} className="rounded-lg p-4 border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm">{comment.email}</span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">{comment.name}</h4>
                  <p className="text-muted-foreground text-sm">{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
