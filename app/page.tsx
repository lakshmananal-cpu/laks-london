import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />

      <div className="hero">
        <div className="hero-text">
          <h1>From AI Products to Enterprise Transformation to Industry Impact.</h1>
          <p className="hero-sub">Three lenses on the same question — how AI actually creates value: as a builder, inside the enterprise, and across the wider ecosystem.</p>
          <div className="hero-ctas">
            <a href="/blog" className="btn-navy">Read my writing →</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <img src="/laks.jpg" alt="Laks Alagappan" className="hero-photo" />
      </div>

      <div className="creds-bar">
        <div className="creds-inner">
          <div className="cred-item">
            <span className="cred-label">Current Role</span>
            <span className="cred-value">VP, Technology · Genpact</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Education</span>
            <span className="cred-value">Bayes EMBA · Imperial College Data Strategy</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Expertise</span>
            <span className="cred-value" style={{ maxWidth: 420, display: 'inline-block' }}>Capital Markets · Reference Data Management (Instruments, Parties) · Technology Program Management &amp; Delivery · Account Governance &amp; Growth · Agentic AI</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Certifications</span>
            <span className="cred-value">AWS · PMP · Six Sigma</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Recognition</span>
            <span className="cred-value">Forbes Technology Council</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Readers</span>
            <span className="cred-value">Executives & AI Practitioners</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Based</span>
            <span className="cred-value">London, UK</span>
          </div>
        </div>
      </div>

      <div className="wrap" id="about">
        <div className="sec-label">About</div>
        <h2 className="sec-title">Builder. Enterprise leader. Ecosystem thinker.</h2>
        <p className="sec-desc" style={{ maxWidth: '74ch' }}>I believe the future of AI must be viewed through three complementary lenses: the builder who creates technology, the enterprise leader who scales it responsibly, and the ecosystem thinker who understands its broader economic and societal impact.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: '74ch' }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>I&apos;m Laks Alagappan, an Executive MBA graduate from Bayes Business School, London, holder of the Data Strategy for Leaders credential from Imperial College Business School, and a member of the Forbes Technology Council.</p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>With over 25 years of experience leading large-scale technology transformation programmes across global financial institutions, I specialise in enterprise AI, software engineering, and business-led technology transformation.</p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>Alongside my corporate leadership experience, I have designed and built several AI-powered platforms and products, including Skillopedia and others listed below. These initiatives have given me hands-on experience in applying AI to solve real-world business challenges, from enterprise productivity and knowledge management to workflow automation and intelligent decision-making.</p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>I also write about technology, and innovation ecosystems. One of my recent articles, <a href="/blog/26-years-on-when-ecosystems-dont-just-support-innovation-they-compound-it" style={{ color: 'var(--navy)', borderBottom: '1px solid var(--navy)' }}>&ldquo;26 Years On: When Ecosystems Don&apos;t Just Support Growth—They Compound It&rdquo;</a>, explores the importance of professional ecosystems, mentorship, and lifelong learning in driving long-term impact.</p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>My thought leadership focuses on the practical application of AI within large enterprises, particularly where technology, governance, engineering, and organisational transformation intersect.</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
          <p className="themes-label">Topics I&apos;m Currently Writing About</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
            <p style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.6 }}>→ How Will the CIO Organisation Transform in the Age of AI?</p>
            <p style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.6 }}>→ AI Governance for the Age of Agentic AI</p>
          </div>
          <a href="/blog" style={{ color: 'var(--navy)', borderBottom: '1px solid var(--navy)', fontSize: 15, fontWeight: 500 }}>Read the full posts on the blog →</a>
        </div>
      </div>

      <div className="wrap" id="press">
        <div className="sec-label">In the Press</div>
        <h2 className="sec-title">Covered, quoted, contributed.</h2>
        <p className="sec-desc">Where my writing and speaking have shown up beyond my own site.</p>

        <div className="ventures-list">
          <div className="venture">
            <span className="venture-tag">Council Post</span>
            <div>
              <h3><a href="https://www.forbes.com/councils/forbestechcouncil/2026/09/03/software-engineering-productivity-youre-measuring-the-wrong-thing/" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Forbes Technology Council ↗</a></h3>
              <p>In my September 2026 byline for Forbes Technology Council, I argue that most organisations measure software engineering productivity wrong — fixating on narrow coding metrics like lines generated or commit speed while ignoring requirements, testing, security, and deployment. AI can accelerate code generation, but it amplifies existing engineering discipline rather than replacing it; the metric that matters isn&apos;t how fast developers write code, it&apos;s how much faster and more reliably the whole engineering system delivers real business outcomes.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Panel Contribution</span>
            <div>
              <h3><a href="https://www.forbes.com/councils/forbestechcouncil/2026/08/14/higher-level-skills-software-engineers-need-in-the-ai-era/" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Forbes Technology Council ↗</a></h3>
              <p>I&apos;m a member of the Forbes Technology Council, an invite-only community for senior technology executives, and contributed to their August 2026 Expert Panel on the higher-level skills software engineers need in the AI era — on why the differentiator is shifting to systems thinking: defining the right problems, designing resilient architectures, governing AI agents, and connecting technology to business outcomes.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Alumni Feature</span>
            <div>
              <h3><a href="https://blogs.city.ac.uk/city-alumni/2026/07/08/lakshmanan-alagappan-executive-mba-2015-career-transitioning-in-the-information-age/" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>City St George&apos;s Alumni Network ↗</a></h3>
              <p>Profiled alongside my career transition from engineering into strategic technology leadership since my 2015 Executive MBA and the Bayes Alumni Forum talk below — including why human oversight remains critical to AI adoption and what&apos;s really holding enterprise programmes back.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alt-bg">
        <div className="wrap" id="talks">
          <div className="sec-label">Also On Stage</div>
          <h2 className="sec-title">Occasionally, in person too.</h2>
          <p className="sec-desc">Writing is where I spend most of my time, but the ideas started somewhere — here&apos;s where I&apos;ve taken them to a room.</p>

          <div className="talk-card">
            <div className="talk-header">
              <div className="talk-meta">
                <span className="talk-badge">Featured Talk</span>
                <span className="talk-event-name">Bayes Alumni Forum 2026 · City St George&apos;s University of London · June 2026</span>
              </div>
              <h3>Scaling AI in the Enterprise: What&apos;s Actually Working</h3>
              <p className="talk-desc">A candid discussion with 20+ mid-to-senior leaders from banking, insurance, consulting, technology, real estate, startups, and academia — exploring where organisations really are in their AI journey, and what separates successful AI programmes from endless pilots.</p>
            </div>
            <div className="talk-body">
              <p className="themes-label">Key themes covered</p>
              <div className="themes-grid">
                <div className="theme-item"><div className="theme-check">✓</div><span>Starting with business problems, not technology</span></div>
                <div className="theme-item"><div className="theme-check">✓</div><span>Embedding AI end-to-end, not in isolated use cases</span></div>
                <div className="theme-item"><div className="theme-check">✓</div><span>Building scalable data foundations</span></div>
                <div className="theme-item"><div className="theme-check">✓</div><span>Creating AI fluency across the workforce</span></div>
                <div className="theme-item"><div className="theme-check">✓</div><span>Establishing governance ahead of regulation</span></div>
                <div className="theme-item"><div className="theme-check">✓</div><span>The shift from ML → GenAI → Agentic AI</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" id="ventures">
        <div className="sec-label">What I&apos;m Building</div>
        <h2 className="sec-title">The practitioner&apos;s proof.</h2>
        <p className="sec-desc">I speak from experience because I build. A growing portfolio of agentic platforms at the intersection of AI, data, compliance, and human potential — mapped in full in Atlas below.</p>

        <div className="ventures-list">
          <div className="venture">
            <span className="venture-tag">Portfolio Index</span>
            <div>
              <h3><a href="https://atlas-gamma-teal.vercel.app" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Atlas ↗</a></h3>
              <p>An index of the full agentic portfolio — 30 platforms across six business divisions (Capital Markets & Investment Banking, Retail Banking, Insurance, Compliance & Financial Crime, Technology & Data, and Support Functions), with an interactive map of how it all fits into the wider financial-services ecosystem.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Marketplace</span>
            <div>
              <h3><a href="https://skillopedia.app" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Skillopedia ↗</a></h3>
              <p>A mentor–learner marketplace connecting people with mentors across 300+ specialisations. The same belief that powers the technology work: people before platforms.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" id="community">
        <div className="sec-label">Beyond The Day Job</div>
        <h2 className="sec-title">Investing in people, too.</h2>
        <p className="sec-desc">The same belief that shapes the writing and the ventures — people before platforms — carries into mentoring.</p>

        <div className="ventures-list">
          <div className="venture">
            <span className="venture-tag">Recognition</span>
            <div>
              <h3>Best Technology Mentor Award (2025)</h3>
              <p>Migrant Leaders — recognising work mentoring career changers into technology.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Mentoring</span>
            <div>
              <h3>Migrant Leaders & 30% Club UK</h3>
              <p>Ongoing mentor for career changers and women in technology navigating the move into leadership.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Community</span>
            <div>
              <h3>Pay It Forward Sponsor</h3>
              <p>Moving Ahead — sponsoring the next generation of diverse talent in technology and finance.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alt-bg">
        <div className="wrap" id="contact">
          <div className="sec-label">Get in Touch</div>
          <h2 className="sec-title">Contact me.</h2>

          <div className="contact-left">
            <h3>Let&apos;s talk.</h3>
            <p>I write regularly on enterprise AI, agentic systems, and where the technology is actually delivering value. If something I&apos;ve written resonates — or you want to talk collaboration, a speaking opportunity, or just compare notes — I&apos;d like to hear from you.</p>
            <div className="contact-channels">
              <a href="mailto:lakshmanan.al@gmail.com" className="channel-link">
                <div className="channel-icon">✉</div>
                lakshmanan.al@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lakshmananal/" target="_blank" rel="noopener" className="channel-link">
                <div className="channel-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                LinkedIn — lakshmananal
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
