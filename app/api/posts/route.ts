import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { isAdminRequest } from '@/lib/auth'
import { slugify } from '@/lib/slugify'

export async function GET(req: NextRequest) {
  const admin = await isAdminRequest(req)

  const posts = await prisma.post.findMany({
    where: admin ? {} : { published: true },
    orderBy: admin ? { createdAt: 'desc' } : { publishedAt: 'desc' },
  })

  return NextResponse.json({ posts })
}

export async function POST(req: NextRequest) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, excerpt, contentHtml, published } = await req.json()

  if (!title || !excerpt || !contentHtml) {
    return NextResponse.json({ error: 'Title, excerpt, and content are required' }, { status: 400 })
  }

  const baseSlug = slugify(title)
  let slug = baseSlug
  let suffix = 1
  while (await prisma.post.findUnique({ where: { slug } })) {
    suffix += 1
    slug = `${baseSlug}-${suffix}`
  }

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      contentHtml,
      published: !!published,
      publishedAt: published ? new Date() : null,
    },
  })

  return NextResponse.json({ post }, { status: 201 })
}
