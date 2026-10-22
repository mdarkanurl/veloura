export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__media">
          <img src="/hero.jpg" alt="Veloura capsule cream collection held in hand" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Authentic skincare for everyday beauty</p>
          <h1 className="hero__title">Luxury Skincare, Everyday Glow</h1>
          <p className="hero__text">
            Veloura brings you carefully selected, 100% authentic skincare —
            with nationwide delivery and personal recommendations whenever
            you need them.
          </p>
          <div className="hero__cta">
            <a href="#products" className="btn btn--outline">
              SHOP THE COLLECTION
            </a>
            <a
              href="https://m.me"
              className="link-underline"
              target="_blank"
              rel="noreferrer"
            >
              DM for recommendations
            </a>
          </div>
        </div>

        <div className="hero__pager" aria-hidden="true">
          <span className="hero__arrow">︿</span>
          <span className="dot" />
          <span className="dot dot--active" />
          <span className="dot" />
          <span className="hero__arrow">﹀</span>
        </div>
      </div>
    </section>
  )
}
