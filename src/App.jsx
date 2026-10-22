import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Promos from './components/Promos.jsx'
import Newsletter from './components/Newsletter.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Promos />
        <Newsletter />
      </main>
    </>
  )
}
