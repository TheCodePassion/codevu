'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { css } from '@/app/data/QandA/css'
import Question from '@/app/components/Question'
export default function CSS() {
  return (
    <>
      <Header />{' '}
      <div>
        {css.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
