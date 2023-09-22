import Header from '@/app/components/Header'
export default function TCPip() {
  return (
    <>
      <Header />
      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-700">
            TCP/IP (Transmission Control Protocol/Internet Protocol) - це
            сукупність комунікаційних протоколів, що використовуються для
            передачі даних в комп&#39;ютерних мережах, зокрема в Інтернеті.
            TCP/IP є основним стандартом для передачі даних в глобальних
            комп&#39;ютерних мережах та локальних обчислювальних мережах (LAN).
          </p>
          <br></br>
          <p className="text-gray-700">
            IP (Internet Protocol): Цей протокол відповідає за адресацію та
            маршрутизацію пакетів даних в мережі. Він призначений для
            забезпечення доставки даних від одного пристрою до іншого через
            мережу.
          </p>
          <br></br>
          <p className="text-gray-700">
            TCP (Transmission Control Protocol): TCP забезпечує надійний обмін
            даними між пристроями в мережі. Він гарантує, що дані будуть
            доставлені в правильному порядку та без втрати.
          </p>
          <br></br>
          <p className="text-gray-700">
            UDP (User Datagram Protocol): UDP також використовується для
            передачі даних в мережі, але він працює менш надійно, ніж TCP. UDP
            корисний для додатків, де швидкість передачі важливіша за
            надійність, таких як стрімінг відео та голосовий зв&#39;язок.
          </p>
          <br></br>
          <p className="text-gray-700">
            HTTP (Hypertext Transfer Protocol): HTTP використовується для
            передачі веб-сторінок та інших ресурсів у Всесвітній мережі. Він
            визначає правила для запитів і відповідей між веб-серверами та
            клієнтами.
          </p>
          <br></br>
          <p className="text-gray-700">
            SMTP (Simple Mail Transfer Protocol): SMTP використовується для
            відправлення електронної пошти. Він визначає спосіб, яким
            повідомлення електронної пошти передаються з одного сервера до
            іншого.
          </p>
          <br></br>
          <p className="text-gray-700">
            FTP (File Transfer Protocol): FTP дозволяє передавати файли між
            комп&#39;ютерами в мережі. Він визначає правила для з&#39;єднання,
            автентифікації та передачі файлів.
          </p>
          <br></br>
          <p className="text-gray-700">
            DNS (Domain Name System): DNS перетворює доменні імена (наприклад,
            www.example.com) в IP-адреси, які використовуються для знаходження
            серверів в мережі.
          </p>
          <br></br>
        </div>
      </div>
    </>
  )
}
