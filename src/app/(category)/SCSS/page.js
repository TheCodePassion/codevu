import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
export default function SCSS() {
  return (
    <>
      <Header />
      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-ml italic font-semibold mb-4">
            Примітка: Для роботи з SASS (створеного Рітвіком Деєм) необхідний
            Watch Sass!
          </p>
          <p className="text-gray-700">
            Основна відмінність між SCSS і SASS полягає у їхньому синтаксисі.
            SASS використовує значно компактніший синтаксис без фігурних дужок і
            крапок з комою. У SCSS синтаксис більше схожий на звичайний CSS з
            фігурними дужками та крапками з комою. <br></br>SCSS з&#39;явився
            пізніше, ніж SASS.
          </p>
          <br></br>
          <p className="text-gray-700">
            SCSS більше в тренді і використовує фігурні дужки (знайомий
            синтаксис).
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Модульний підхід.</li>
            <li>Змінні (з&#39;явилися перед CSS).</li>
            <li>Вкладені стилі для дітей.</li>
            <li>
              MIXIN - перевикористовувані компоненти стилю, які можуть приймати
              змінні (динамічні + DRY).
            </li>
            <li>
              Extend - успадкування (статичне). Класи-заготовки позначаються
              символом %.
            </li>
            <li>
              Математичні оператори, такі як calc, можуть використовуватися зі
              змінними.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
