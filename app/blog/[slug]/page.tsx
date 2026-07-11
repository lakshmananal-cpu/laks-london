import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { prisma } from '@/lib/db'

export const revalidate = 0

async function getPost(slug: string) {
  const post = await prisma.post.findUnique({ where: { slug } })
  if (!post || !post.published) return null
  return post
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const url = `https://laks.london/blog/${post.slug}`
  return {
    title: `${post.title} · Laks Alagappan`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const url = `https://laks.london/blog/${post.slug}`
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <>
      <Nav />
      <div className="post-header">
        <Link href="/blog" className="post-back">← All writing</Link>
        <div className="post-date">
          {post.publishedAt?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <div className="post-share">
        <span className="share-label">Share:</span>
        <a href={linkedInShareUrl} target="_blank" rel="noopener" className="btn-ghost">Share on LinkedIn ↗</a>
      </div>
      <Footer />
    </>
  )
}
