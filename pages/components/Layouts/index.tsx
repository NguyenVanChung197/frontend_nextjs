import Link from 'next/link';
import { useRouter } from 'next/router';
import menu from '../../../config/menu';

const Sidebar = ({ children }: any) => {
  const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        Header Sidebar
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-fuchsia-100 w-full md:w-60'>
          <nav>
            <ul>
              {menu.map(({ href, title }: any) => (
                <li className='m-2' key={title}>
                  <Link href={href} legacyBehavior>
                    <a className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${router.asPath === href && 'bg-fuchsia-600 text-white'}`}>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}

export default Sidebar;
