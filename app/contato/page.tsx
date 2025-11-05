import Link from "next/link"
import BackgroundImage from "@/components/BackgroundImage"
import Card from "@/components/Card"
import ContactForm from "@/components/ContactForm"
import ContentContainer from "@/components/ContentContainer"
import { MdFacebook, MdPhone, MdWhatsapp } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import PrimaryHeading from "@/components/PrimaryHeading"
import SecundaryText from "@/components/SecundaryText"
import SecundaryHeading from "@/components/SecundaryHeading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contato - Entre em contato com a GalileoSoft',
  description: 'Entre em contato com a GalileoSoft. Tire suas dúvidas sobre CRM, ERP, PDV e soluções personalizadas. Atendemos em Maringá-PR e todo Brasil.',
  alternates: {
    canonical: '/contato',
  },
  openGraph: {
    title: 'Contato - GalileoSoft',
    description: 'Entre em contato e modernize sua empresa',
    url: 'https://galileosoft.com.br/contato',
    type: 'website',
  },
};

export default function Contato() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-purple-950 text-white">
      <section className="relative w-full">
        <BackgroundImage src="/bgImageWaves.svg" className="-mt-20 opacity-75" priority />
        <ContentContainer className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
          <div>
            <span className="hidden lg:block text-xl md:text-2xl font-semibold text-green-500">ENTRE EM CONTATO</span>
            <PrimaryHeading className="text-center lg:text-left">Pronto para modernizar sua empresa?</PrimaryHeading>
            <SecundaryText className="text-center lg:text-left">
              Fornecemos diversos produtos que são verdadeiros campeões seus segmentos com a garantia de customização completa para atender seu negócio.
            </SecundaryText>
          </div>
          <Card>
            <ContactForm />
          </Card>
          <div className="lg:col-start-2">
            <SecundaryText className="text-center text-md font-semibold opacity-80 px-5">Ao enviar esse formulário, você concorda em receber contatos da GalileoSoft.</SecundaryText>
          </div>
          <div className="flex-1 space-y-3 lg:col-span-2 py-3">
            <SecundaryHeading className="text-center">Outros canais de contato:</SecundaryHeading>
            <div className="text-black w-fit mx-auto grid gap-4 grid-cols-2 lg:grid-cols-4">
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1%20GalileoSoft,%20"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdWhatsapp size={40} className="mx-auto" />
                    <SecundaryText className="mt-3">Whatsapp</SecundaryText>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="tel:+5544997530950"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdPhone size={40} className="mx-auto" />
                    <SecundaryText className="mt-3">Ligação</SecundaryText>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/galileosoft/"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdFacebook size={40} className="mx-auto" />
                    <SecundaryText className="mt-3">Facebook</SecundaryText>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/galileosoft/"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
                >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <FaInstagram size={40} className="mx-auto" />
                    <SecundaryText className="mt-3">Instagram</SecundaryText>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}
