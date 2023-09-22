function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <img src="logo.png" alt="Лого" className="mb-4" />{' '}
        <div className="mx-4 text-center">
          <p className=" text-xl text-center">
            Протягом часу, коли я готувався до свого інтерв'ю, у мене
            нагромадилося низка нотаток і особистих спостережень у процесі
            вивчення різних тем.
          </p>
          <p className="text-lg text-center mt-4">
            Цей ресурс містить запитання та відповіді для інтерв'ю як для
            фронтенд, так і для бекенд розробників, оскільки мене цікавила
            фулл-стек розробка. <br></br>Також він містить кілька корисних
            посилань, які допоможуть вам на шляху до успіху!
          </p>
          <p className="text-2xl text-center mt-4">Все буде добре! 🌟</p>{' '}
        </div>
      </div>
    </>
  )
}
export default About
