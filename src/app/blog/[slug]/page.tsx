import { blogPosts } from "@/content/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.location.replace('/content/${slug}')`,
      }}
    />
  );
}
