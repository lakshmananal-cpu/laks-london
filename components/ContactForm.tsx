'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('Enquiry from ' + name)
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Organisation: ' + org + '\n' +
      'Reason: ' + topic + '\n\n' +
      message
    )
    window.location.href = 'mailto:lakshmanan.al@gmail.com?subject=' + subject + '&body=' + body
  }

  return (
    <div className="contact-form">
      <p className="form-title">Send an enquiry</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Jane Smith" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="jane@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="org">Organisation</label>
          <input type="text" id="org" name="org" placeholder="Company or publication…" value={org} onChange={(e) => setOrg(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Reason for reaching out</label>
          <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Select a topic…</option>
            <option>The Agentic Enterprise</option>
            <option>AI Governance &amp; Trust</option>
            <option>From Models to Systems</option>
            <option>The Future of Work &amp; AI</option>
            <option>Speaking enquiry</option>
            <option>Other / Not sure yet</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="What's on your mind…" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="form-submit">Send enquiry →</button>
      </form>
    </div>
  )
}
