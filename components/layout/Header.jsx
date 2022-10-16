import { useState } from 'react';
import Link from 'next/link';

import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 w-full bg-slate-50 md:bg-slate-50/90 md:backdrop-blur-sm border-b border-orange-700'>
      <div className='container mx-auto max-w-4xl flex justify-between items-center py-2 px-4'>
        {/* Left - Logo */}
        <Link href='/'>
          <a className='flex space-x-0 items-end cursor-pointer my-auto'>
            <p className='text-slate-900 text-xl font-semibold tracking-widest'>
              kolefnis
            </p>
            <span className='text-xl font-semibold text-orange-700 tracking-widest'>
              brask.is
            </span>
          </a>
        </Link>

        {/* Right */}
        <nav className='flex  items-center justify-end text-slate-900 md:ml-auto'>
          <ul className='space-x-8'>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/charts/cc-chart-1b'>
                <a>Chart 1</a>
              </Link>
            </li>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/charts/cc-chart-2b'>
                <a>Chart 2</a>
              </Link>
            </li>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/charts/cc-chart-3b'>
                <a>Chart 3</a>
              </Link>
            </li>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/about'>
                <a>Um</a>
              </Link>
            </li>

            {!menuOpen && (
              <HiMenu
                className='text-3xl text-slate-900 md:hidden cursor-pointer hover:text-orange-600'
                onClick={() => setMenuOpen(true)}
              />
            )}
          </ul>

          {/* Open mobile menu starts      */}
          <div className='flex relative'>
            {menuOpen && (
              <AiOutlineClose
                fontSize={28}
                className='text-white md:hidden cursor-pointer hover:text-orange-600'
                onClick={() => setToggleMenu(false)}
              />
            )}
            {menuOpen && (
              <ul
                className='z-10 fixed -top-0 -right-2 px-6 py-1 backdrop-blur-sm w-full h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end bg-slate-50/90 text-slate-900 animate-slide-in'>
                <li className='text-3xl mt-3 mb-6 cursor-pointer hover:text-orange-600'>
                  <AiOutlineClose onClick={() => setMenuOpen(false)} />
                </li>

                <li className='my-2 mr-3 text-lg flex flex-col items-end'>
                  <Link href='/charts/cc-chart-1b'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hover:text-orange-600'>
                      Chart 1
                    </a>
                  </Link>
                  <Link href='/charts/cc-chart-2b'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hhover:text-orange-600'>
                      Chart 2
                    </a>
                  </Link>
                  <Link href='/charts/cc-chart-3b'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hover:text-orange-600'>
                      Chart 3
                    </a>
                  </Link>
                  <Link href='/about'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hover:text-orange-600'>
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
