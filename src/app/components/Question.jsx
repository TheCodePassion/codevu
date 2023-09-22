import { useState } from 'react'
function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="mb-4 text-center">
      <div className="cursor-pointer text-blue-500" onClick={togglePopup}>
        {question}
      </div>
      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-2">{answer}</div>
      )}
    </div>
  )
}
export default Question
