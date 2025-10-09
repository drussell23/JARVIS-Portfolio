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
          className="inline-flex items-center gap-2 text-jarvis-cyan hover:text-jarvis-blue transition-colors mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-jarvis-blue/10 text-jarvis-cyan text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-dark-text">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jarvis-blue to-jarvis-cyan flex items-center justify-center text-white font-semibold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="w-4 h-4 text-jarvis-cyan" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-dark-border">
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-jarvis-blue/50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-jarvis-blue transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-dark-text text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-dark-text">
                    <FaClock className="w-3 h-3 text-jarvis-cyan" />
                    <span>{relatedPost.readingTime}</span>
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
