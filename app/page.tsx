import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Nav />

      <div className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">VP, Technology · Genpact · London</div>
          <h1>Enterprise AI — the <em>strategy</em> behind what&apos;s actually working.</h1>
          <p className="hero-sub">I&apos;m Laks Alagappan. I write about scaling AI in the enterprise — drawing on hands-on experience building agentic systems, an EMBA from Bayes Business School, and an AI &amp; Machine Learning credential from Imperial College Business School. No hype. No theory. Just what separates AI programmes that deliver from the ones that stay stuck in pilot. I speak occasionally too, when the room&apos;s right.</p>
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
            <span className="cred-value">Bayes EMBA · Imperial College AI &amp; ML</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Expertise</span>
            <span className="cred-value">Agentic AI & Enterprise Systems</span>
          </div>
          <div className="cred-item">
            <span className="cred-label">Certifications</span>
            <span className="cred-value">AWS · PMP · Six Sigma</span>
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

      <div className="wrap" id="speaking">
        <div className="sec-label">Essays & Writing</div>
        <h2 className="sec-title">What I write about.</h2>
        <p className="sec-desc">Four themes I keep coming back to when writing about the AI transition — strategy grounded in production experience, not theory. Read the full posts on the <a href="/blog" style={{ color: 'var(--navy)', borderBottom: '1px solid var(--navy)' }}>blog →</a></p>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-num">01</div>
            <h3>The Agentic Enterprise</h3>
            <p>AI has moved beyond chatbots and point solutions. Agentic systems — AI that can plan, reason, and orchestrate multi-step workflows — are reshaping how enterprises operate. I write about what that shift means practically: new capabilities unlocked, new governance challenges created, and what separates organisations that will lead from those that will follow.</p>
            <div className="topic-tags">
              <span className="pill">Essay</span>
              <span className="pill">Strategy</span>
              <span className="pill pill-amber">Ongoing series</span>
            </div>
          </div>

          <div className="topic-card">
            <div className="topic-num">02</div>
            <h3>AI Governance & Trust</h3>
            <p>As AI autonomy increases — from human-in-the-loop to human-on-the-loop — governance can&apos;t be an afterthought. Drawing on hands-on experience building production AI systems, I make the case for establishing accountability and oversight before regulation forces the issue, and what that actually looks like inside a real organisation.</p>
            <div className="topic-tags">
              <span className="pill">Essay</span>
              <span className="pill">Governance</span>
              <span className="pill pill-amber">Ongoing series</span>
            </div>
          </div>

          <div className="topic-card">
            <div className="topic-num">03</div>
            <h3>From Models to Systems</h3>
            <p>Having access to an AI model and running an AI system at enterprise scale are very different things. I write about what the transition actually requires — the data foundations, integration architecture, evaluation frameworks, and operational disciplines that turn experiments into production-grade capability that delivers measurable business value.</p>
            <div className="topic-tags">
              <span className="pill">Technical</span>
              <span className="pill">Operations</span>
              <span className="pill pill-amber">Ongoing series</span>
            </div>
          </div>

          <div className="topic-card">
            <div className="topic-num">04</div>
            <h3>The Future of Work & AI</h3>
            <p>What does AI mean for talent, skills, and the workforce? Through the lens of someone building AI systems and an education marketplace, I write the honest version of that question — not the utopian or dystopian extremes, but the practical reality of what changes, what stays, and what leaders need to do to bring people with them.</p>
            <div className="topic-tags">
              <span className="pill">Leadership</span>
              <span className="pill">Talent</span>
              <span className="pill pill-amber">Ongoing series</span>
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
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <p className="themes-label">In the Press</p>
                <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.7, maxWidth: '74ch' }}>City St George&apos;s Alumni Network profiled this talk alongside my career transition from engineering into strategic technology leadership since my 2015 Executive MBA — including why human oversight remains critical to AI adoption and what&apos;s really holding enterprise programmes back. <a href="https://blogs.city.ac.uk/city-alumni/2026/07/08/lakshmanan-alagappan-executive-mba-2015-career-transitioning-in-the-information-age/" target="_blank" rel="noopener" style={{ color: 'var(--navy)', borderBottom: '1px solid var(--navy)', fontWeight: 500 }}>Read the interview ↗</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" id="ventures">
        <div className="sec-label">What I&apos;m Building</div>
        <h2 className="sec-title">The practitioner&apos;s proof.</h2>
        <p className="sec-desc">I speak from experience because I build. Four ventures at the intersection of AI, data, compliance, and human potential.</p>

        <div className="ventures-list">
          <div className="venture">
            <span className="venture-tag">Agentic Platform</span>
            <div>
              <h3><a href="https://meridian-nine-mauve.vercel.app/agents" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Meridian ↗</a></h3>
              <p>An agentic data platform built on LangGraph. Specialised agents for quality, lineage, enrichment, golden-record mastering, and exception management — orchestrated so systems can reason over data, not just process it.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Regulatory Ops</span>
            <div>
              <h3><a href="https://regulus-141kf5r13-laks-alagappans-projects.vercel.app/" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Regulus ↗</a></h3>
              <p>An agentic compliance platform with specialised agents across AML/KYC, breach management, transaction reporting, regulatory change, filing, and policy — turning regulatory obligation into an automated, auditable workflow.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">Marketplace</span>
            <div>
              <h3><a href="https://skillopedia.app" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Skillopedia ↗</a></h3>
              <p>A mentor–learner marketplace connecting people with mentors across 300+ specialisations. The same belief that powers the technology work: people before platforms.</p>
            </div>
          </div>
          <div className="venture">
            <span className="venture-tag">AI Platform</span>
            <div>
              <h3><a href="https://azend-ai.vercel.app" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: '1px solid var(--border)' }}>Azend.ai ↗</a></h3>
              <p>AI-powered investment intelligence — bringing institutional-grade data, analytics, and agentic insight to modern investors.</p>
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
              <h3>Best Technology Mentor Award</h3>
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

          <div className="contact-grid">
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

            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
