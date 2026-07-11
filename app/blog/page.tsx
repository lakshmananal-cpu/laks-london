import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { prisma } from '@/lib/db'

export const metadata = {
  title: 'Blog · Laks Alagappan',
  description: 'Writing on enterprise AI, agentic systems, and scaling technology — by Laks Alagappan.',
}

export const revalidate = 0

export default async function BlogIndex() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  })

  return (
    <>
      <Nav />
      <div className="wrap">
        <div className="sec-label">Writing</div>
        <h2 className="sec-title">The blog.</h2>
        <p className="sec-desc">Longer-form thinking on enterprise AI, agentic systems, and what actually works — as I write it.</p>

        {posts.length === 0 ? (
          <div className="blog-empty">Nothing published yet — check back soon.</div>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <div className="blog-item" key={post.id}>
                <div className="blog-item-date">
                  {post.publishedAt?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
