'use client'
import { useState, useEffect } from 'react'
import { quotes } from '../data/quotes'
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}
function Quotes() {
  const [randomQuote, setRandomQuote] = useState('CodeВ’ю')

  useEffect(() => {
    const quote = getRandomQuote()
    setRandomQuote(quote)
  }, [])

  return (
    <>
      <h2 className="text-center m-3 font-bold">{randomQuote}</h2>
      <div className="separator"></div>
    </>
  )
}
export default Quotes
