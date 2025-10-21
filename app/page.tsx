import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Simple header with minimal styling */}
        <header className="mb-12">
          <h1 className="text-2xl font-normal text-gray-900 dark:text-gray-100 mb-2">
            Ramblings
          </h1>
        </header>

        {/* Ultra-minimal blog list - just title and date */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block hover:opacity-60 transition-opacity"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <h2 className="text-base font-normal text-gray-900 dark:text-gray-100 flex-1 mb-1 sm:mb-0">
                    {post.title}
                  </h2>
                  <time className="text-sm font-mono text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Minimal footer */}
        <footer className="mt-20 pt-8 text-sm text-gray-500 dark:text-gray-500">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
        </footer>
      </div>
    </div>
  );
}
