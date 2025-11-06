"use client"
import Link from "next/link";

interface ButtonGreenProps {
  href: string;
  scrollToId?: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ButtonGreen({
  children,
  href,
  target,
  scrollToId,
  className,
}: ButtonGreenProps) {
  // Detecta se é um link externo
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const linkTarget = target || (isExternal ? '_blank' : undefined);

  return (
    <Link
      onClick={() => { scrollToId && scrollToSection(scrollToId)}}
      x-componentname="ButtonGreen"
      href={href}
      target={linkTarget}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${className} bg-gradient-to-br from-galileoGreen-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-black text-lg font-bold rounded-lg w-fit px-5 py-2.5 text-center`}
    >
      {children}
    </Link>
  );
}
