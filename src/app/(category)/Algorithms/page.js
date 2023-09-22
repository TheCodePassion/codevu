import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function Algorithms() {
  return (
    <>
      <Header />
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h1>Алгоритми - це дуже обширна тема!</h1>
          <p className="text-gray-700">
            {' '}
            Ресурс на якому ви можете практикувати свої навички, -{' '}
            <a
              href="https://leetcode.com/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              leetcode.com
            </a>
          </p>{' '}
          <br />
          <p className="text-gray-700">
            Я можу рекомендувати знайти RoadMap на{' '}
            <a
              href="https://neetcode.io/roadmap"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              https://neetcode.io/roadmap
            </a>
          </p>{' '}
          <br />
          <p className="text-gray-700">
            Ви також можете обрати одну з книг і після кожного розділу
            вирішувати завдання:
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Introduction to Algorithms (hard)
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/-/en/Aditya-Bhargava/dp/1617292230"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Grokking Algorithms (easy)
                </a>
              </li>
            </ul>
          </p>{' '}
          <br />
          <p className="text-gray-700">
            Альтернативний тренажер -{' '}
            <a
              href="https://www.freecodecamp.org/learn/coding-interview-prep/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              freecodecamp.org
            </a>
          </p>{' '}
          <br />
        </div>
      </div>
      <Footer />
    </>
  )
}
