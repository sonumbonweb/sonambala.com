import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Thoughts on web development, design, and building better software.
          </p>
        </header>

        {/* Blog Posts List */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col gap-3">
                  <time className="text-sm text-gray-500 dark:text-gray-500 font-mono">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
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
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="https://twitter.com"
                className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://github.com"
                className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
