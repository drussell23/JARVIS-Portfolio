import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllTags } from '@/lib/blog'
import { FaCalendar, FaClock, FaTag, FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Blog | JARVIS AI',
  description: 'Technical deep-dives into building JARVIS: CPU optimization, ML routing, self-healing systems, and more.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const allTags = getAllTags()
  const featuredPost = posts[0] // Most recent post as featured

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-jarvis-blue/10 border border-jarvis-blue/30 rounded-full mb-4">
            <span className="text-jarvis-cyan text-sm font-medium">
              {posts.length} Technical Articles
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Engineering Deep-Dives
          </h1>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Real challenges. Real solutions. Real metrics from building JARVIS.
          </p>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-dark-text mr-2 self-center">Filter by:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-dark-text hover:border-jarvis-blue/50 hover:text-jarvis-cyan transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-jarvis-blue to-transparent flex-1"></div>
              <span className="text-sm font-semibold text-jarvis-cyan uppercase tracking-wider">Featured Article</span>
              <div className="h-px bg-gradient-to-r from-transparent via-jarvis-blue to-transparent flex-1"></div>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-gradient-to-br from-dark-card to-dark-card/50 border border-jarvis-blue/30 rounded-xl overflow-hidden hover:border-jarvis-blue/60 transition-all hover:shadow-2xl hover:shadow-jarvis-blue/20"
            >
              <div className="md:flex">
                {/* Featured Image */}
                <div className="md:w-1/2 aspect-video md:aspect-auto bg-gradient-to-br from-jarvis-blue/30 to-jarvis-cyan/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-jarvis-blue to-jarvis-cyan flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <div className="text-jarvis-cyan text-sm font-medium">Latest Release</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-jarvis-blue/20 text-jarvis-cyan text-xs font-semibold rounded-full border border-jarvis-blue/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-jarvis-blue transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-dark-text mb-6 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-dark-text">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4 text-jarvis-cyan" />
                        <time dateTime={featuredPost.date}>
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4 text-jarvis-cyan" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-jarvis-blue group-hover:text-jarvis-cyan transition-colors font-semibold">
                      <span>Read More</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Posts Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-text text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-jarvis-blue/50 transition-all hover:shadow-lg hover:shadow-jarvis-blue/10 hover:-translate-y-1 duration-300"
              >
                {/* Cover Image or Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-jarvis-blue/20 to-jarvis-cyan/20 relative overflow-hidden">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-5xl mb-2 opacity-50">
                          {index === 0 ? '💡' : index === 1 ? '⚡' : index === 2 ? '🎯' : index === 3 ? '🔧' : '✨'}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reading time overlay */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-dark-bg/80 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-dark-border">
                    {post.readingTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-jarvis-blue/10 text-jarvis-cyan text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-jarvis-blue transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dark-text text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-dark-text pt-4 border-t border-dark-border">
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="w-3 h-3 text-jarvis-cyan" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1 text-jarvis-blue group-hover:text-jarvis-cyan transition-colors font-medium">
                      <span>Read</span>
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
