import { useState } from 'react'

const SOCIALS = [
  { label: 'Facebook', path: 'M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8v2.8h2.5V21h3Z' },
  { label: 'Twitter', path: 'M21 6.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9A3.6 3.6 0 0 0 12 9.3c0 .3 0 .6.1.8-3-.1-5.7-1.6-7.5-3.8-.3.6-.5 1.2-.5 1.9 0 1.3.6 2.4 1.6 3-.6 0-1.1-.2-1.6-.4 0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.5 3.5 2.6a7.3 7.3 0 0 1-5.3 1.5A10.2 10.2 0 0 0 9.5 20c6.3 0 9.7-5.2 9.7-9.7v-.4c.7-.5 1.3-1.1 1.8-1.9Z' },
  { label: 'LinkedIn', path: 'M7.5 9.5H4.8V20h2.7V9.5ZM6.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20 14c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.6 1.4V9.5H11.5c0 .8 0 10.5 0 10.5h2.7v-5.9c0-.3 0-.6.1-.8.3-.6.8-1.3 1.8-1.3 1.3 0 1.9 1 1.9 2.4V20H20v-6Z' },
  { label: 'Pinterest', path: 'M12 4a8 8 0 0 0-2.9 15.4c-.1-.6-.1-1.6 0-2.2l1-4.1s-.2-.5-.2-1.2c0-1.2.7-2 1.5-2 .7 0 1 .5 1 1.2 0 .7-.5 1.8-.7 2.8-.2.8.4 1.5 1.2 1.5 1.5 0 2.6-1.6 2.6-3.8 0-2-1.4-3.4-3.5-3.4a3.6 3.6 0 0 0-3.8 3.6c0 .7.3 1.5.6 1.9l.1.4-.3 1c0 .2-.2.3-.4.2-1.1-.5-1.8-2.1-1.8-3.4 0-2.7 2-5.2 5.7-5.2 3 0 5.3 2.1 5.3 5 0 3-1.9 5.4-4.5 5.4-.9 0-1.7-.5-2-1l-.5 2c-.2.8-.7 1.7-1 2.3A8 8 0 1 0 12 4Z' },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="news section" id="contact">
      <div className="container news__inner">
        <span className="news__watermark" aria-hidden="true">
          GET WEEKLY UPDATES
        </span>

        <header className="section-head">
          <h2 className="section-title">JOIN OUR MAILING LIST</h2>
          <span className="section-rule" />
          <p className="section-sub">
            Skincare tips, new arrivals and members-only offers — no spam,
            just the good stuff.
          </p>
        </header>

        <form className="news__form" onSubmit={onSubmit}>
          <input
            type="email"
            className="news__input"
            placeholder="EMAIL ADDRESS"
            aria-label="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setSent(false)
            }}
            required
          />
          <button type="submit" className="news__btn" aria-label="Subscribe">
            ›
          </button>
        </form>

        {sent && <p className="news__thanks">Thanks for subscribing!</p>}

        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href="#" className="social" aria-label={s.label}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d={s.path} fill="currentColor" />
              </svg>
            </a>
          ))}
        </div>

        <p className="copyright">
          © 2026 Veloura | Luxury Skincare, All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
