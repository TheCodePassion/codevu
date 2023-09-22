import Link from 'next/link'

function Header() {
  return (
    <>
      <div className="text-center header">
        <Link href="/" className="text-fuchsia-500 text-2xl italic">
          CodeВ’ю
        </Link>{' '}
      </div>
      <div className="separator"></div>
    </>
  )
}
export default Header
