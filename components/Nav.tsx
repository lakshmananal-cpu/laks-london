import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-brand">Laks Alagappan</Link>
      <ul className="nav-links">
        <li><Link href="/#speaking">Writing</Link></li>
        <li className="nav-keep"><Link href="/blog">Blog</Link></li>
        <li><Link href="/#talks">Speaking</Link></li>
        <li><Link href="/#ventures">Building</Link></li>
        <li><Link href="/#contact" className="nav-cta">Get in touch</Link></li>
      </ul>
    </nav>
  )
}
