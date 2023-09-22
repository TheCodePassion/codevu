import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function HowToBecomeAProgrammer() {
  return (
    <>
      <title>Як стати програмістом?</title>
      <Header />
      <div className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="text-white text-4xl font-semibold text-center">
          Насправді, я не знаю 😄
          <br />
          Однак, я можу рекомендувати тобі -{' '}
          <a
            href="https://roadmap.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300"
          >
            https://roadmap.sh/
          </a>
          <br />
          Визначайся з напрямком і вперед!
        </div>
      </div>
      <Footer />
    </>
  )
}
