import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-gray-600">
        Artikelen over persoonlijke groei en ontwikkeling.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border p-6 transition-shadow hover:shadow-lg"
          >
            <time className="text-sm text-gray-500">{post.date}</time>
            <h2 className="mt-2 text-xl font-semibold group-hover:underline">
              {post.title}
            </h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
