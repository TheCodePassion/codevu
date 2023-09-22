import { links } from '../data/links'
import Link from 'next/link'
function Linkblok() {
  return (
    <>
      <div className="separator"></div>
      <div className="mx-auto w-max p-4 text-center">
        <ul className="list-none">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-blue-500 text-2xl  hover:underline"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="separator"></div>
    </>
  )
}
export default Linkblok
