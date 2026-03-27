import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <time className="text-sm text-gray-500">{post.date}</time>
      <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
      <div className="prose mt-8 max-w-none">
        {post.content}
      </div>
    </article>
  );
}
