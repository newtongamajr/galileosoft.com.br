import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import ContentContainer from "@/components/ContentContainer";
import ButtonGreen from "@/components/ButtonGreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Serviços - Soluções em Gestão Empresarial',
  description: 'Conheça nossos serviços: CRM Ploomes, Sistema CPlug para varejo e food service, ERPFlex, gestão de pedidos Mobbiz e desenvolvimento personalizado.',
  alternates: {
    canonical: '/servicos',
  },
  openGraph: {
    title: 'Serviços - GalileoSoft',
    description: 'Soluções completas para seu negócio',
    url: 'https://galileosoft.com.br/servicos',
    type: 'website',
  },
};

export default function Servicos() {
  const cardsForClients = [
    <Card
      key={"ploomes"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-white"
    >
      <div className="relative h-28 w-28 mx-auto pb-6 mb-6">
        <Image
          src="/ploomes/logoPloomesNovo.svg"
          alt="Logo Ploomes"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Ploomes</h3>
      <p className="leading-normal mb-4">
        Esta é a resposta para um relacionamento excepcional com seus clientes.
      </p>
      <Link
        href="/ploomes"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3  bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Encante seus clientes!
      </Link>
    </Card>,
    <Card
      key={"saurus"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-white"
    >
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosSaurus.svg"
          alt="Ícone Saurus"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Saurus</h3>
      <p className="leading-normal mb-4">
        Transforme sua empresa em uma máquina de vendas!
      </p>
      <Link
        href="/saurus"
        className="block text-white text-center text-lg font-bold rounded-lg mt-auto px-6 py-3 bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Aumente suas vendas!
      </Link>
    </Card>,
    <Card
      key={"mobbiz"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-white"
    >
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosMobbiz.svg"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Mobbiz</h3>
      <p className="leading-normal">
        Gerencie pedidos 24 horas por dia sem perder o sono.
      </p>
      <Link
        href="/mobbiz"
        className="block text-white text-center text-lg font-bold rounded-lg mt-auto px-6 py-3  bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Melhore suas entregas!
      </Link>
    </Card>,
  ];

  const cardsForManagement = [
    <Card
      key={"erpFlex"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-galileoPurple-250"
    >
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosErpflex.svg"
          alt="Ícone ERPFlex"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">ERPFlex</h3>
      <p className="leading-normal">
        A flexibilidade que impulsiona o crescimento do seu negócio.
      </p>
      <Link
        href="/erpflex"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3  bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Melhore sua gestão!
      </Link>
    </Card>,
    <Card
      key={"cplug"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-galileoPurple-250"
    >
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosCplug.svg"
          alt="Ícone CPlug"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">CPlug</h3>
      <p className="leading-normal">
        Solução completa para pequeno varejo e food service.
      </p>
      <Link
        href="/cplug"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3  bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Modernize seu negócio!
      </Link>
    </Card>,
    <Card
      key={"devPersonalizado"}
      className="flex flex-col justify-between h-full text-black"
      bgColor="bg-galileoPurple-250"
    >
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosDevPersonalizado.svg"
          alt="Ícone Desenvolvimento Personalizado"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Desenvolvimento Personalizado
      </h3>
      <p className="leading-normal">
        Soluções sob medida para resolver problemas e otimizar sua dinâmica de
        trabalho.
      </p>
      <Link
        href="/customDev"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3  bg-galileoPurple-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Saiba mais!
      </Link>
    </Card>,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-galileoPurple-900">
      <section
        className="relative flex w-full min-h-[90vh] bg-galileoPurple-100"
        id="servicosHeroSection"
      >
        <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
          <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 mx-auto">
            <div className="mx-auto block md:hidden">
              <Image
                src="/servicosHeroSection.png"
                alt="Planetas: GalileoSoft desbravando novos horizontes"
                width={300}
                height={300}
              />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Eleve sua empresa{" "}
              <span className="text-galileoPurple-500">
                {" "}
                a um Novo Patamar!{" "}
              </span>
            </h1>
            <p className="text-base font-bold lg:text-lg xl:text-xl">
              Desbloqueie seu crescimento através da Tecnologia!
            </p>
            <div className="flex flex-row justify-center md:justify-start md:items-start space-x-5">
              <ButtonGreen
                scrollToId="servicesToYourClients"
                href="servicos#servicesToYourClients"
              >
                Para seus clientes
              </ButtonGreen>
              <ButtonGreen
                scrollToId="servicesToYourManagement"
                href="servicos#servicesToYourManagement"
              >
                Para sua gestão
              </ButtonGreen>
            </div>
          </div>
          <div className="mx-auto my-auto hidden md:block">
            <Image
              src="/servicosHeroSection.png"
              alt="Planetas: GalileoSoft desbravando novos horizontes"
              width={600}
              height={600}
            />
          </div>
        </ContentContainer>
      </section>

      <section
        className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar pt-16"
        id="servicesToYourClients"
      >
        <ContentContainer className="flex flex-col my-auto py-6 z-10">
          <h1 className="text-center text-black text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
            <span className="text-galileoPurple-500">
              {" "}
              Experiências incríveis{" "}
            </span>
            geram clientes fiéis!
          </h1>
          <p className="text-base text-black font-semibold text-center md:text-lg lg:text-xl xl:text-2xl">
            Conquiste a lealdade do seu público-alvo com soluções de excelência.
          </p>
          <div className="hidden lg:flex gap-6 mt-10 text-white">
            {cardsForClients}
          </div>
          <div className="lg:hidden mt-10 text-white">
            <Carousel>{cardsForClients}</Carousel>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <ButtonGreen
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
              className="mx-auto"
            >
              Agende uma demonstração!
            </ButtonGreen>
          </div>
        </ContentContainer>
      </section>

      <section
        className="w-full flex bg-gradient-to-b from-galileoPurple-500 to-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar pt-16"
        id="servicesToYourManagement"
      >
        <ContentContainer className="flex flex-col my-auto py-6 z-10">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Tecnologia de ponta para Turbinar seu Crescimento
          </h1>
          <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl">
            Desenvolvimento customizado para maximizar seus resultados!
          </p>
          <div className="hidden lg:flex gap-6 mt-10 text-white">
            {cardsForManagement}
          </div>
          <div className="lg:hidden mt-10 text-white">
            <Carousel>{cardsForManagement}</Carousel>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <ButtonGreen
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
              className="mx-auto"
            >
              Agende uma demonstração
            </ButtonGreen>
          </div>
        </ContentContainer>
      </section>

      <section
        className="relative w-full bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900"
        id="contactForm"
      >
        <ContentContainer className="w-full grid lg:grid-cols-1 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
          <div className="flex flex-col justify-between md:w-[75%] mx-auto">
            <Card>
              <ContactForm />
            </Card>
            <p className="text-center text-md font-semibold opacity-80 px-5 mt-4 lg:mt-0">
              Ao enviar esse formulário, você concorda em receber contatos da
              GalileoSoft.
            </p>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}
