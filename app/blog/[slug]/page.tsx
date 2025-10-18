import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { FaArrowLeft, FaArrowRight, FaCalendar, FaClock, FaTag } from 'react-icons/fa'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | JARVIS AI Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)

  return (
    <div className="pt-20 pb-24 min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-dark-900 -z-10" />
      <div className="fixed inset-0 bg-circuit opacity-5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-jarvis-cyan-400 hover:text-jarvis-400 transition-colors group font-medium"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-16">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 glass-subtle text-jarvis-cyan-300 text-sm font-semibold rounded-xl border border-jarvis-500/20 hover:border-jarvis-500/40 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl sm:text-2xl text-dark-100 leading-relaxed mb-10 font-light">
            {post.excerpt}
          </p>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-dark-600">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-jarvis flex items-center justify-center text-white font-black text-xl shadow-glow">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white text-lg">{post.author}</div>
                <div className="text-sm text-dark-300">AI Engineer</div>
              </div>
            </div>

            <div className="h-10 w-px bg-dark-600"></div>

            <div className="flex items-center gap-2 text-dark-200 font-medium">
              <FaCalendar className="w-4 h-4 text-jarvis-cyan-400" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div className="flex items-center gap-2 text-dark-200 font-medium">
              <FaClock className="w-4 h-4 text-jarvis-cyan-400" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto">
          <div className="blog-content">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Share & Actions */}
        <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-dark-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-dark-200">
              Found this helpful? Share it with your team.
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 glass-subtle border border-dark-600 rounded-xl text-sm text-white hover:border-jarvis-500/50 hover:bg-dark-700/50 transition-all font-medium"
            >
              <span>More Articles</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-dark-600">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Continue Reading</h2>
              <div className="h-px bg-gradient-to-r from-jarvis-500/50 to-transparent flex-1"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group card-hover"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedPost.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 glass-subtle text-jarvis-cyan-300 text-xs font-semibold rounded-lg border border-jarvis-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-jarvis-400 transition-colors line-clamp-2 leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-dark-200 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-dark-600">
                    <div className="flex items-center gap-2 text-dark-300 font-medium">
                      <FaClock className="w-4 h-4 text-jarvis-cyan-400" />
                      <span>{relatedPost.readingTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-jarvis-400 group-hover:text-jarvis-cyan-400 transition-colors font-semibold">
                      <span>Read</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
