'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { dou1 } from '@/app/data/QandA/dou1'
import Question from '@/app/components/Question'
export default function Junior() {
  return (
    <>
      <Header />{' '}
      <div>
        {dou1.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
