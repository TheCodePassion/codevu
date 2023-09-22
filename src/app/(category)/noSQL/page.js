import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function Nosql() {
  return (
    <>
      <Header />
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-700">
            {' '}
            NoSQL - це велика тема, і варто вивчити саме ту технлогію , яка вам
            потрібна. Почати можна з цього відео, яке допоможе зрозуміти різницю
            між SQL і NoSQL.
          </p>{' '}
          <br />
          <div className="text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xh4gy1lbL2k"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
