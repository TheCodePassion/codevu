'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { dou3 } from '@/app/data/QandA/dou3'
import Question from '@/app/components/Question'
export default function MiddleSenior() {
  return (
    <>
      <Header />{' '}
      <div>
        {dou3.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
