import Link from "next/link"

interface ButtonPurpleProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string
}

export default function ButtonPurple({ children, href, target, className }: ButtonPurpleProps) {
  // Detecta se é um link externo
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const linkTarget = target || (isExternal ? '_blank' : undefined);

  return (
    <Link
      x-componentname="ButtonPurple"
      href={href}
      target={linkTarget}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${className} bg-gradient-to-br from-galileoPurple-500 to-galileoPurple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-bol rounded-lg w-fit px-5 py-2.5 text-center`}
    >
      {children}
    </Link>
  )
}
