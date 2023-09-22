'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { ds } from '@/app/data/QandA/ds'
import Question from '@/app/components/Question'
export default function DS() {
  return (
    <>
      <Header />{' '}
      <div>
        {ds.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
