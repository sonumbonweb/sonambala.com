import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

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
    title: post.title,
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
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Simple back link */}
        <Link
          href="/"
          className="inline-block text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors mb-8"
        >
          ← Back
        </Link>

        {/* Article */}
        <article>
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-normal text-gray-900 dark:text-gray-100 mb-3 leading-tight">
              {post.title}
            </h1>
            <time className="text-sm font-mono text-gray-500 dark:text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </header>

          {/* Content with minimal styling */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4"
                    >
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-3"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                // Handle lists
                if (paragraph.match(/^\d+\./m)) {
                  const items = paragraph.split("\n");
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-1.5 pl-1">
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
                    <ul key={index} className="list-disc list-inside space-y-1.5 pl-1">
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
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">$1</code>')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>');

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
      </div>
    </div>
  );
}
