'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { ts } from '@/app/data/QandA/ts'
import Question from '@/app/components/Question'
export default function TypeScript() {
  return (
    <>
      <Header />{' '}
      <div>
        {ts.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
