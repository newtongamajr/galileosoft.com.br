"use client"
import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import Image from 'next/image';


export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    {href:"/", text: "Home"},
    {href:"/servicos", text: "Serviços"},
    {href:"/contato", text: "Contato"},
  ]

  return (
    <nav
      aria-label="Navegação principal"
      className="bg-purple-900/40 fixed w-full z-20 shadow-md backdrop-blur-sm"
    >
      <div className="flex justify-between max-w-7xl h-16 mx-auto px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="#"
            onClick={() => scrollToTop()}
            className="fill-white text-2xl font-bold relative w-[210px] h-full"
            aria-label="GalileoSoft - Voltar ao topo"
          >
            <Image
              src="/logoGalileoSoft.svg"
              alt="GalileoSoft Logo"
              fill
              sizes="210px"
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-4 ml-6">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.text}
                href={link.href}
                className={`${
                  pathname === link.href ? "bg-purple-700/50" : ""
                } text-white px-3 py-2 rounded-md text-md lg:text-lg font-medium hover:bg-purple-700`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="flex sm:hidden h-full">
          {showLinks ? (
            <button
              onClick={() => setShowLinks(false)}
              className="p-3"
              aria-label="Fechar menu"
              aria-expanded="true"
            >
              <MdOutlineClose className="text-white w-8 h-8" aria-hidden="true" />
            </button>
          ) : (
            <button
              onClick={() => setShowLinks(true)}
              className="p-3"
              aria-label="Abrir menu"
              aria-expanded="false"
            >
              <GiHamburgerMenu className="text-white w-8 h-8" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      {showLinks ? (
        <div
          onClick={() => setShowLinks(false)}
          className="absolute top-16 left-0 right-0 bottom-0 pt-4 pb-16 px-4 h-screen flex justify-center align-middle bg-gray-900"
        >
          <div className="my-auto text-center flex flex-col gap-20 w-2/5">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.text}
                  href={link.href}
                  className={`${
                    pathname === link.href ? "bg-purple-700/50" : ""
                  } text-white px-3 py-4 rounded-md text-xl font-bold hover:bg-purple-700`}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      ) : undefined}
    </nav>
  );
}
