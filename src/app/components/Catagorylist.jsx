import Link from 'next/link'

function Catagorylist({ category }) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {category.map((category, index) => (
          <div key={index} className="m-4">
            <Link
              href={`/${category}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
export default Catagorylist
