import { useRef } from 'react'

const PRODUCTS = [
  { id: 'VLR-001', name: 'Brightening Essentials Set', price: 149, old: 210, img: '/products/brightening-set.jpg' },
  { id: 'VLR-002', name: 'Japan Sakura 4-Piece Set', price: 149, old: 210, img: '/products/sakura-set.jpg' },
  { id: 'VLR-003', name: 'Aylin Blueberry Body Scrub', price: 149, old: 210, img: '/products/aylin-scrub.jpg' },
  { id: 'VLR-004', name: 'Dr. Davey Papaya Cream', price: 149, old: 210, img: '/products/papaya-cream.jpg' },
  { id: 'VLR-005', name: 'Medicube Capsule Cream Set', price: 149, old: 210, img: '/products/medicube-set.jpg' },
  { id: 'VLR-006', name: 'Crystal Pendant Necklace', price: 149, old: 210, img: '/products/necklace.jpg' },
  { id: 'VLR-007', name: 'Crystal Line Gold Bangle', price: 149, old: 210, img: '/products/gold-bangle.jpg' },
  { id: 'VLR-008', name: 'Woven Checkered Handbag', price: 149, old: 210, img: '/products/handbag.jpg' },
]

export default function Products() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section className="products section" id="products">
      <div className="container">
        <header className="section-head">
          <h2 className="section-title">OUR PRODUCTS</h2>
          <span className="section-rule" />
          <p className="section-sub">
            Carefully selected products — authentic skincare and everyday
            essentials, delivered to your door nationwide.
          </p>
        </header>

        <div className="carousel">
          <button type="button" className="carousel__btn" aria-label="Previous products" onClick={() => scroll(-1)}>
            ‹
          </button>

          <div className="carousel__track" ref={trackRef}>
            {PRODUCTS.map((p) => (
              <article className="product" key={p.id}>
                <div className="product__media">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <h3 className="product__name">{p.name}</h3>
                <p className="product__id">Product ID: {p.id}</p>
                <div className="product__meta">
                  <span className="price">${p.price}</span>
                  <span className="price price--old">${p.old}</span>
                  <button type="button" className="product__add">+ Add to bag</button>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="carousel__btn" aria-label="Next products" onClick={() => scroll(1)}>
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
