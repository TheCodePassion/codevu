import Header from '@/app/components/Header'
export default function SOLID() {
  return (
    <>
      <Header />
      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-700">
            Принцип єдиного обов&#39;язку (Single responsibility principle) 1
            клас = 1 завдання; 1 сутність = 1 завдання
          </p>
          <br></br>
          <p className="text-gray-700">
            Принцип відкритості і закритості (Open-closed principle) Відкритий
            для розширення, але закритий для змін
          </p>
          <br></br>
          <p className="text-gray-700">
            Принцип підстановки Ліскова (Liskov Substitution principle) Похідний
            клас повинен посилити, а не замінювати поведінку базового класу
          </p>
          <br></br>
          <p className="text-gray-700">
            Принцип розділення інтерфейсу (Interface segregation principle)
            Сутності не повинні залежати від методів, які вони не використовують
          </p>
          <br></br>
          <p className="text-gray-700">
            Принцип інверсії залежності (Dependency inversion principle) Модулі
            високого рівня не повинні залежати від модулів низького рівня; вони
            повинні залежати від абстракцій, і абстракції не повинні залежати
            від деталей, деталі повинні залежати від абстракцій.
          </p>
          <br></br>
        </div>
      </div>
    </>
  )
}
