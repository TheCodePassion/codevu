import Header from '@/app/components/Header'
export default function TCPip() {
  return (
    <>
      <Header />
      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-700">
            REST API (Representational State Transfer Application Programming
            Interface) - це структурований спосіб для створення та взаємодії з
            веб-сервісами, який ґрунтується на принципах архітектури REST. REST
            - це скорочення від &#34;Representational State Transfer&#34;, що
            означає &#34;передачу стану представлення&#34;. REST API
            використовується для обміну даними між різними програмами або
            сервісами через мережу Інтернет.
          </p>
          <br></br>
          <p className="text-gray-700">
            Основні принципи REST API включають такі:
          </p>
          <br></br>
          <p className="text-gray-700">
            Ресурси: У REST API дані та функціональність представлені як
            ресурси, які можуть бути доступні за певною URL-адресою.
          </p>
          <br></br>
          <p className="text-gray-700">
            HTTP методи: REST використовує HTTP методи, такі як GET (отримати),
            POST (створити), PUT (оновити) та DELETE (видалити), для взаємодії з
            ресурсами.
          </p>
          <br></br>
          <p className="text-gray-700">
            Представлення: Дані, що передаються через REST API, можуть бути у
            формі різних представлень, таких як JSON (JavaScript Object
            Notation) або XML (eXtensible Markup Language).
          </p>
          <br></br>
          <p className="text-gray-700">
            (Stateless) Безстандартність: Кожен запит до REST API повинен бути
            незалежним і не залежати від попередніх запитів. Сервер не зберігає
            стан клієнта між запитами.
          </p>
          <br></br>
          <p className="text-gray-700">
            Інтерфейс одного з серверів: REST API повинен мати однорідний
            інтерфейс, який описує всі можливі дії з ресурсами сервера.
          </p>
          <br></br>
        </div>
      </div>
    </>
  )
}
