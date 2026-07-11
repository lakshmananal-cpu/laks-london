import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { createSessionToken, SESSION_COOKIE } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const hash = process.env.ADMIN_PASSWORD_HASH

  if (!hash || !password || !(await compare(password, hash))) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const token = await createSessionToken()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
  return res
}
