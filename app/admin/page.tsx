import Link from 'next/link'
import { prisma } from '@/lib/db'
import LogoutButton from '@/components/LogoutButton'
import DeletePostButton from '@/components/DeletePostButton'

export const revalidate = 0

export default async function AdminDashboard() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="admin-shell">
      <div className="wrap">
        <div className="admin-header">
          <div>
            <div className="sec-label">Admin</div>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>Blog posts</h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/admin/new" className="btn-navy">+ New post</Link>
            <LogoutButton />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="blog-empty">No posts yet — create your first one.</div>
        ) : (
          <div className="admin-table">
            {posts.map((post) => (
              <div className="admin-row" key={post.id}>
                <div>
                  <div className="admin-row-title">{post.title}</div>
                  <div className="admin-row-meta">
                    <span className={`status-dot ${post.published ? 'status-published' : 'status-draft'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                    <span>Updated {post.updatedAt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="admin-row-actions">
                  {post.published && (
                    <Link href={`/blog/${post.slug}`} className="btn-ghost" target="_blank">View ↗</Link>
                  )}
                  <Link href={`/admin/${post.id}/edit`} className="btn-ghost">Edit</Link>
                  <DeletePostButton id={post.id} title={post.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
