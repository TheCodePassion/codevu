'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { react } from '@/app/data/QandA/react'
import Question from '@/app/components/Question'
export default function React() {
  return (
    <>
      <Header />{' '}
      <div>
        {react.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
