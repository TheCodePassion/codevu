'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { js } from '@/app/data/QandA/js'
import Question from '@/app/components/Question'
export default function JavaScript() {
  return (
    <>
      <Header />{' '}
      <div>
        {js.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
