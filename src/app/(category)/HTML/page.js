'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { html } from '@/app/data/QandA/html'
import Question from '@/app/components/Question'
export default function HTML() {
  return (
    <>
      <Header />{' '}
      <div>
        {html.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
