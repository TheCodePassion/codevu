'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { linux } from '@/app/data/QandA/linux'
import Question from '@/app/components/Question'
export default function Linux() {
  return (
    <>
      <Header />{' '}
      <h1 className="mb-10">
        Найкращий спосіб вивчити Linux - встановити його самостійно, почати
        можно з віртуальної машини і використовувати його як другу операційну
        систему! ✔️
      </h1>
      <div>
        {linux.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
