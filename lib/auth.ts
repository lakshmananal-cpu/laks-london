import { SignJWT, jwtVerify } from 'jose'
import { NextRequest } from 'next/server'

export const SESSION_COOKIE = 'admin_session'

function getSecret() {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set')
  return new TextEncoder().encode(secret)
}

export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(getSecret())
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload.role === 'admin'
  } catch {
    return false
  }
}

export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  return verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value)
}
