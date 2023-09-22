import Header from './components/Header'
import Quotes from './components/Quotes'
import Catagorylist from './components/Catagorylist'
import Linkblok from './components/Linkblok'
import About from './components/About'
import Footer from './components/Footer'
import { category } from './data/category'

export default function Home() {
  return (
    <>
      <Header />
      <Quotes />
      <Catagorylist category={category} />
      <Linkblok />
      <About />
      <Footer />
    </>
  )
}
