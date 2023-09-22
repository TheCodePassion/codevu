import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function Redux() {
  return (
    <>
      <Header />
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-700">
            {' '}
            Ця стаття чудово розповідає про те, що таке Redux{' '}
            <a
              href="https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/
            </a>
          </p>{' '}
          <br />
          <p className="text-gray-700">
            Документація RTK{' '}
            <a
              href=" https://redux-toolkit.js.org/  "
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              https://redux-toolkit.js.org/
            </a>
          </p>{' '}
          <br />
        </div>
      </div>
      <Footer />
    </>
  )
}
