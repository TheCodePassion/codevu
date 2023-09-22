'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { dou4 } from '@/app/data/QandA/dou4'
import Question from '@/app/components/Question'
export default function Senior() {
  return (
    <>
      <Header />{' '}
      <div>
        {dou4.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
