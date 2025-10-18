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
    <div className="pt-20 pb-24 min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-dark-900 -z-10" />
      <div className="fixed inset-0 bg-circuit opacity-5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong rounded-full mb-8 border border-jarvis-500/30">
            <div className="w-2 h-2 bg-jarvis-cyan-400 rounded-full animate-pulse" />
            <span className="text-jarvis-cyan-300 text-sm font-semibold">
              {posts.length} Technical Articles
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 gradient-text text-shadow-glow">
            Engineering Deep-Dives
          </h1>
          <p className="text-xl sm:text-2xl text-dark-100 max-w-3xl mx-auto leading-relaxed font-light">
            Real challenges. Real solutions. Real metrics from building JARVIS.
          </p>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-16 flex flex-wrap gap-3 justify-center">
            <span className="text-sm text-dark-200 font-semibold self-center">Filter by:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                className="px-5 py-2.5 glass-subtle border border-dark-600 rounded-xl text-sm text-dark-200 hover:border-jarvis-500/50 hover:text-jarvis-cyan-300 hover:bg-dark-700/50 transition-all font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-jarvis-500 to-transparent flex-1"></div>
              <span className="text-sm font-black text-jarvis-cyan-300 uppercase tracking-wider px-4 py-2 glass-subtle rounded-full border border-jarvis-500/30">
                ✨ Featured Article
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-jarvis-500 to-transparent flex-1"></div>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block glass-strong border border-jarvis-500/40 rounded-3xl overflow-hidden hover:border-jarvis-500/70 transition-all hover:shadow-glow-lg hover:-translate-y-1 duration-300"
            >
              <div className="lg:flex">
                {/* Featured Image */}
                <div className="lg:w-2/5 aspect-video lg:aspect-auto bg-gradient-to-br from-jarvis-600/20 via-jarvis-cyan-600/20 to-jarvis-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20"></div>
                  <div className="absolute inset-0 bg-circuit opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-jarvis flex items-center justify-center shadow-glow animate-float">
                        <span className="text-4xl">🚀</span>
                      </div>
                      <div className="px-4 py-2 glass-strong rounded-full text-jarvis-cyan-300 text-sm font-bold border border-jarvis-500/30">
                        Latest Release
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 sm:p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 glass-subtle text-jarvis-cyan-300 text-xs font-bold rounded-lg border border-jarvis-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 group-hover:text-jarvis-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-dark-100 text-lg mb-8 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-sm text-dark-200 font-medium">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4 text-jarvis-cyan-400" />
                        <time dateTime={featuredPost.date}>
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4 text-jarvis-cyan-400" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-jarvis-400 group-hover:text-jarvis-cyan-400 transition-colors font-bold text-lg">
                      <span>Read Article</span>
                      <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Posts Section */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white">All Articles</h2>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-200 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-glow overflow-hidden"
              >
                {/* Cover Image or Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-jarvis-600/15 via-jarvis-cyan-600/15 to-jarvis-600/15 relative overflow-hidden">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-jarvis/20 border border-jarvis-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-4xl">
                            {index === 0 ? '💡' : index === 1 ? '⚡' : index === 2 ? '🎯' : index === 3 ? '🔧' : index === 4 ? '🚀' : index === 5 ? '🧠' : index === 6 ? '👁️' : '✨'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-grid opacity-10" />

                  {/* Reading time overlay */}
                  <div className="absolute top-4 right-4 px-4 py-2 glass-strong rounded-xl text-xs text-white font-bold border border-jarvis-500/30 shadow-lg">
                    {post.readingTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass-subtle text-jarvis-cyan-300 text-xs font-semibold rounded-lg border border-jarvis-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-jarvis-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dark-200 text-sm sm:text-base mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm pt-5 border-t border-dark-600">
                    <div className="flex items-center gap-2 text-dark-300 font-medium">
                      <FaCalendar className="w-4 h-4 text-jarvis-cyan-400" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2 text-jarvis-400 group-hover:text-jarvis-cyan-400 transition-colors font-bold">
                      <span>Read</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center glass-strong rounded-3xl p-12 sm:p-16 border border-jarvis-500/40">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-lg text-dark-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            These blog posts cover the key technical challenges in building JARVIS.
            For a high-level overview, check out the Architecture page.
          </p>
          <a
            href="/architecture"
            className="btn-primary inline-flex items-center gap-3"
          >
            <span>View Architecture</span>
            <FaArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
