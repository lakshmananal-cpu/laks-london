import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { isAdminRequest } from '@/lib/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const post = await prisma.post.findUnique({ where: { id } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post })
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const { title, excerpt, contentHtml, published } = await req.json()

  if (!title || !excerpt || !contentHtml) {
    return NextResponse.json({ error: 'Title, excerpt, and content are required' }, { status: 400 })
  }

  const existing = await prisma.post.findUnique({ where: { id } })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      excerpt,
      contentHtml,
      published: !!published,
      publishedAt: published ? existing.publishedAt ?? new Date() : null,
    },
  })

  return NextResponse.json({ post })
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  await prisma.post.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
