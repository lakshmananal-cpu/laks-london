import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import PostForm from '@/components/PostForm'

export const revalidate = 0

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await prisma.post.findUnique({ where: { id } })
  if (!post) notFound()

  return <PostForm post={post} />
}
