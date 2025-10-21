import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all posts
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <time className="text-sm text-gray-500 dark:text-gray-500 font-mono block mb-4">
              {formatDate(post.date)}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mt-12 mb-6 tracking-tight"
                    >
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mt-10 mb-4 tracking-tight"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                // Handle lists
                if (paragraph.match(/^\d+\./m)) {
                  const items = paragraph.split("\n");
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item.replace(/^\d+\.\s*/, "")}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith("-")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item.replace(/^-\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Handle inline code and bold text
                const processedParagraph = paragraph
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">$1</code>')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-gray-50">$1</strong>');

                // Regular paragraph
                if (paragraph.trim()) {
                  return (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: processedParagraph }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            View all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
