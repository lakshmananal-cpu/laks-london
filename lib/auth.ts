import { NextRequest } from 'next/server'

export const SESSION_COOKIE = 'admin_session'
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

function b64urlEncode(bytes: Uint8Array): string {
  let str = ''
  for (const b of bytes) str += String.fromCharCode(b)
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function b64urlDecodeToString(b64url: string): string {
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/')
  return atob(b64)
}

async function hmac(secret: string, message: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message))
  return new Uint8Array(sig)
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set')
  return secret
}

export async function createSessionToken(): Promise<string> {
  const payload = JSON.stringify({ role: 'admin', exp: Date.now() + THIRTY_DAYS_MS })
  const payloadB64 = b64urlEncode(new TextEncoder().encode(payload))
  const sig = await hmac(getSecret(), payloadB64)
  return `${payloadB64}.${b64urlEncode(sig)}`
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false
  const [payloadB64, sigB64] = token.split('.')
  if (!payloadB64 || !sigB64) return false

  try {
    const expectedSig = await hmac(getSecret(), payloadB64)
    const expectedSigB64 = b64urlEncode(expectedSig)
    if (expectedSigB64.length !== sigB64.length) return false
    let diff = 0
    for (let i = 0; i < expectedSigB64.length; i++) {
      diff |= expectedSigB64.charCodeAt(i) ^ sigB64.charCodeAt(i)
    }
    if (diff !== 0) return false

    const payload = JSON.parse(b64urlDecodeToString(payloadB64))
    return payload.role === 'admin' && typeof payload.exp === 'number' && payload.exp > Date.now()
  } catch {
    return false
  }
}

export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  return verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value)
}
