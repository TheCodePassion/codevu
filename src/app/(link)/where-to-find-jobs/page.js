import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export default function WhereToFindJobs() {
  return (
    <>
      <title>Де шукати вакансії?</title>
      <Header />
      <div className="bg-blue-500 h-screen flex flex-col justify-center items-center ">
        <div className="text-white text-4xl text-center mb-4">
          Список сайтів для пошуку вакансій:
        </div>
        <ul className="text-white text-4xl text-center list-disc">
          <li>
            <a
              href="https://jobs.dou.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-300"
            >
              jobs.dou.ua
            </a>
          </li>
          <li>
            <a
              href="https://work.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-300"
            >
              work.ua
            </a>
          </li>
          <li>
            <a
              href="https://djinni.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-300"
            >
              djinni.co
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}
