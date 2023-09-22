import About from '@/app/components/About'
import Catagorylist from '@/app/components/Catagorylist'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Quotes from '@/app/components/Quotes'
import { dou } from '@/app/data/dou'
import Link from 'next/link'

export default function Dou() {
  return (
    <>
      <Header />
      <Quotes />
      <Catagorylist category={dou} />
      <div className="separator"></div>
      <div className="mx-auto w-max p-4 text-center">
        <Link
          className="text-blue-500 text-2xl  hover:underline"
          href="https://dou.ua/lenta/articles/interview-node-js/?from=comment-digest_post&utm_source=digest-comments&utm_medium=email&utm_campaign=31072023#middlesenior"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dou 255. Node.js
        </Link>
      </div>
      <div className="separator"></div>
      <About />
      <Footer />
    </>
  )
}
