import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function HowToWriteACv() {
  return (
    <>
      <title>Як скласти CV?</title>
      <Header />
      <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
        <div className="text-white text-4xl text-center mb-4">
          Існує безліч конструкторів резюме (CV builders), але, можливо,
          найпростішим варіантом є використання{' '}
          <a
            href="https://www.canva.com/resumes/templates/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300"
          >
            canva.com
          </a>
        </div>
        <div className="text-white text-lg text-center mt-4">
          Ви можете переглянути, як це роблять інші люди і дізнатися думку про
          те, що вони роблять не так на цьому каналі -{' '}
          <a
            href="https://www.youtube.com/@SergeyNemchinskiy/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300"
          >
            https://www.youtube.com/@SergeyNemchinskiy/streams
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
