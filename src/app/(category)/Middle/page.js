'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { dou2 } from '@/app/data/QandA/dou2'
import Question from '@/app/components/Question'
export default function Middle() {
  return (
    <>
      <Header />{' '}
      <div>
        {dou2.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
