'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { git } from '@/app/data/QandA/git'
import Question from '@/app/components/Question'
export default function Git() {
  return (
    <>
      <Header />{' '}
      <div>
        <p className="text-gray-700 mb-4">
          {' '}
          Ресурс на якому ви можете практикувати свої навички -{' '}
          <a
            href="https://learngitbranching.js.org/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            learngitbranching
          </a>
        </p>{' '}
        {git.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Footer />
    </>
  )
}
