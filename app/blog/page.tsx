import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { FaCalendar, FaClock, FaTag } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Blog | JARVIS AI',
  description: 'Technical deep-dives into building JARVIS: CPU optimization, ML routing, self-healing systems, and more.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Blog
          </h1>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Deep-dives into the engineering challenges and solutions behind JARVIS.
            Real metrics, real problems, real code.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-text text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-jarvis-blue/50 transition-all hover:shadow-lg hover:shadow-jarvis-blue/10"
              >
                {/* Cover Image (if exists) */}
                {post.coverImage && (
                  <div className="aspect-video bg-gradient-to-br from-jarvis-blue/20 to-jarvis-cyan/20 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-jarvis-blue/10 text-jarvis-cyan text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-jarvis-blue transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-dark-text mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-dark-text">
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="w-3.5 h-3.5 text-jarvis-cyan" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaClock className="w-3.5 h-3.5 text-jarvis-cyan" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-jarvis-blue/10 to-jarvis-cyan/10 border border-jarvis-blue/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-dark-text mb-8 max-w-2xl mx-auto">
            These blog posts cover the key technical challenges in building JARVIS.
            For a high-level overview, check out the Architecture page.
          </p>
          <a
            href="/architecture"
            className="inline-block px-8 py-3 bg-gradient-to-r from-jarvis-blue to-jarvis-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-jarvis-blue/50 transition-all"
          >
            View Architecture
          </a>
        </div>
      </div>
    </div>
  )
}
