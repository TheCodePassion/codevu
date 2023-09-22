'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { sql } from '@/app/data/QandA/sql'
import Question from '@/app/components/Question'
export default function SQL() {
  return (
    <>
      <Header />{' '}
      <div>
        {sql.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
