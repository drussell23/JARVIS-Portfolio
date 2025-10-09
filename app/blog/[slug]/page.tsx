import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from 'react-icons/fa'
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
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-jarvis-cyan hover:text-jarvis-blue transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-jarvis-blue/10 text-jarvis-cyan text-sm font-medium rounded-lg border border-jarvis-blue/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-jarvis-cyan bg-clip-text text-transparent">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-dark-text leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-dark-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-jarvis-blue to-jarvis-cyan flex items-center justify-center text-white font-semibold text-lg shadow-lg shadow-jarvis-blue/30">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-white">{post.author}</div>
                <div className="text-xs text-dark-text">AI Engineer</div>
              </div>
            </div>

            <div className="h-8 w-px bg-dark-border"></div>

            <div className="flex items-center gap-2 text-dark-text">
              <FaCalendar className="w-4 h-4 text-jarvis-cyan" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div className="flex items-center gap-2 text-dark-text">
              <FaClock className="w-4 h-4 text-jarvis-cyan" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="prose-headings:text-white prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-dark-text prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-white prose-code:text-jarvis-cyan prose-code:bg-dark-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-dark-card prose-pre:border prose-pre:border-dark-border prose-ul:text-dark-text prose-ol:text-dark-text prose-li:marker:text-jarvis-cyan prose-a:text-jarvis-blue prose-a:no-underline hover:prose-a:text-jarvis-cyan">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Share & Actions */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-dark-text">
              Found this helpful? Share it with your team.
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-white hover:border-jarvis-blue/50 transition-all"
            >
              <span>More Articles</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-dark-border">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-white">Continue Reading</h2>
              <div className="h-px bg-gradient-to-r from-jarvis-blue/50 to-transparent flex-1"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-dark-card border border-dark-border rounded-xl p-6 hover:border-jarvis-blue/50 transition-all hover:shadow-lg hover:shadow-jarvis-blue/10 hover:-translate-y-1 duration-300"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {relatedPost.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-jarvis-blue/10 text-jarvis-cyan text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-jarvis-blue transition-colors line-clamp-2 leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-dark-text text-sm mb-4 line-clamp-2 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-dark-border">
                    <div className="flex items-center gap-1.5 text-dark-text">
                      <FaClock className="w-3 h-3 text-jarvis-cyan" />
                      <span>{relatedPost.readingTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-jarvis-blue group-hover:text-jarvis-cyan transition-colors font-medium">
                      <span>Read</span>
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
