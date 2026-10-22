const NAV = ['Home', 'Skincare', 'Accessories', 'Bestsellers', 'Contact']

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo" aria-label="Veloura home">
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
            <path
              d="M6 5h6l4 13 4-13h6L19 27h-6L6 5Z"
              fill="currentColor"
            />
          </svg>
          <span>VELOURA</span>
        </a>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <a key={item} href="#" className="nav__link">
              {item}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <span className="header__divider" aria-hidden="true" />
          <button type="button" className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" className="icon-btn icon-btn--cart" aria-label="Cart, 3 items">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M3 4h2.2l1.6 10.2a1.6 1.6 0 0 0 1.6 1.3h7.7a1.6 1.6 0 0 0 1.6-1.3L19.4 7H6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9.5" cy="19.5" r="1.4" fill="currentColor" />
              <circle cx="16.5" cy="19.5" r="1.4" fill="currentColor" />
            </svg>
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>
    </header>
  )
}
