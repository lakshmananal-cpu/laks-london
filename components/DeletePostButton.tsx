'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeletePostButton({ id, title }: { id: string; title: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return
    setLoading(true)
    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    setLoading(false)
    if (res.ok) router.refresh()
    else window.alert('Failed to delete post')
  }

  return (
    <button type="button" className="btn-danger" onClick={handleDelete} disabled={loading}>
      {loading ? 'Deleting…' : 'Delete'}
    </button>
  )
}
