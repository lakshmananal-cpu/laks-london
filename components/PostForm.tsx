'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from './RichTextEditor'

type Post = {
  id: string
  title: string
  excerpt: string
  contentHtml: string
  published: boolean
}

export default function PostForm({ post }: { post?: Post }) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [contentHtml, setContentHtml] = useState(post?.contentHtml ?? '')
  const [published, setPublished] = useState(post?.published ?? false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSave(publishOverride?: boolean) {
    setError('')
    if (!title.trim() || !excerpt.trim() || !contentHtml.trim()) {
      setError('Title, excerpt, and content are all required.')
      return
    }
    setSaving(true)
    const body = {
      title,
      excerpt,
      contentHtml,
      published: publishOverride ?? published,
    }
    const url = post ? `/api/posts/${post.id}` : '/api/posts'
    const method = post ? 'PUT' : 'POST'
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    setSaving(false)
    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error || 'Failed to save post')
    }
  }

  return (
    <div className="admin-form-shell">
      <div className="sec-label">{post ? 'Edit post' : 'New post'}</div>
      <h2 className="sec-title">{post ? 'Edit' : 'Write'} a post.</h2>

      {error && <div className="form-error">{error}</div>}

      <div className="admin-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's the post about?"
        />
      </div>

      <div className="admin-field">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="A short summary — shown on the blog list and used as the LinkedIn share preview."
        />
      </div>

      <div className="admin-field">
        <label>Content</label>
        <RichTextEditor value={contentHtml} onChange={setContentHtml} />
      </div>

      <div className="admin-checkbox-row">
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <label htmlFor="published" style={{ marginBottom: 0 }}>Published (visible on the public blog)</label>
      </div>

      <div className="admin-actions-row">
        <button type="button" className="btn-navy" disabled={saving} onClick={() => handleSave()}>
          {saving ? 'Saving…' : 'Save'}
        </button>
        {!published && (
          <button type="button" className="btn-ghost" disabled={saving} onClick={() => { setPublished(true); handleSave(true) }}>
            Save & publish
          </button>
        )}
        <button type="button" className="btn-ghost" onClick={() => router.push('/admin')}>
          Cancel
        </button>
      </div>
    </div>
  )
}
