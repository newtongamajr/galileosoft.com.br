import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPlug - Sistema de Gestão para Varejo e Food Service | GalileoSoft",
  description: "CPlug é a solução completa de gestão para pequeno varejo, restaurantes, bares, lanchonetes e food service. PDV, controle de estoque, delivery e muito mais.",
  keywords: ["CPlug", "sistema PDV", "gestão restaurante", "food service", "varejo", "controle estoque", "delivery"],
  openGraph: {
    title: "CPlug - Sistema de Gestão para Varejo e Food Service",
    description: "Solução completa de gestão para pequeno varejo e food service",
    type: "website",
  }
};

export default function CPlug() {

  const cardsMainFeatures = [
    <Card key={'pdv'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconPDV.svg"
          alt="Ícone PDV"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        PDV Completo e Ágil
      </h3>
      <p className="text-black text-center">
        Frente de caixa rápida e estável, com emissão de NF-e automática e controle financeiro completo.
      </p>
    </Card>,
    <Card key={'delivery'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconDelivery.svg"
          alt="Ícone Delivery"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Hub de Delivery Integrado
      </h3>
      <p className="text-black text-center">
        Centralize pedidos do iFood, Rappi, Uber Eats e outros apps em um só lugar.
      </p>
    </Card>,
    <Card key={'inventory'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconInventory.svg"
          alt="Ícone Controle de Estoque"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Controle de Estoque em Tempo Real
      </h3>
      <p className="text-black text-center">
        Monitore seu estoque automaticamente e evite rupturas ou excessos.
      </p>
    </Card>,
    <Card key={'kds'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconKDS.svg"
          alt="Ícone Sistema de Cozinha"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Sistema KDS para Cozinha
      </h3>
      <p className="text-black text-center">
        Pedidos chegam direto na cozinha em tempo real, eliminando erros e papel.
      </p>
    </Card>
  ];

  const segmentCards = [
    <Card key={'restaurant'} bgColor="bg-galileoPurple-250">
      <h3 className="text-white text-2xl font-bold text-center mb-4">
        Restaurantes e Food Service
      </h3>
      <p className="text-white text-center mb-4">
        Gestão completa de mesas, comandas, cozinha e delivery.
      </p>
      <Link
        href="/cplug/restaurantes"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-galileoGreen-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200"
      >
        Saiba mais
      </Link>
    </Card>,
    <Card key={'retail'} bgColor="bg-galileoPurple-250">
      <h3 className="text-white text-2xl font-bold text-center mb-4">
        Pequeno Varejo
      </h3>
      <p className="text-white text-center mb-4">
        Solução ideal para mercados, padarias, açougues e autopeças.
      </p>
      <Link
        href="/cplug/varejo"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-galileoGreen-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200"
      >
        Saiba mais
      </Link>
    </Card>,
    <Card key={'bars'} bgColor="bg-galileoPurple-250">
      <h3 className="text-white text-2xl font-bold text-center mb-4">
        Bares e Lanchonetes
      </h3>
      <p className="text-white text-center mb-4">
        Controle de mesas, comanda eletrônica e integração com delivery.
      </p>
      <Link
        href="/cplug/bares"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-galileoGreen-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200"
      >
        Saiba mais
      </Link>
    </Card>
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <section className="py-10 md:py-3 min-h-[95vh] relative w-full" id="cplug-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3 my-auto">
              <div className="mx-auto block md:hidden mb-6">
                <div className="relative h-40 w-60">
                  <Image
                    src="/cplug/logoCPlug.svg"
                    alt="Logo CPlug"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Gestão Completa para <span className="text-galileoGreen-300">Pequeno Varejo e Food Service</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Sistema integrado com PDV, controle de estoque, delivery, NF-e e muito mais. Tudo na nuvem e funcionando 24/7.
              </p>
              <ButtonGreen
                target="_blank"
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
                className="mx-auto md:mx-0"
              >
                Agendar demonstração
              </ButtonGreen>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <div className="relative h-80 w-96">
                <Image
                  src="/cplug/logoCPlug.svg"
                  alt="Logo CPlug"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="cplug-features">
          <ContentContainer className="flex flex-col text-center relative z-10 py-10 my-auto">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Tudo que você precisa para <span className="text-galileoPurple-500">gerir seu negócio</span>
            </h1>
            <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl mb-10">
              Funcionalidades desenvolvidas especialmente para pequenos varejos e estabelecimentos de food service.
            </p>
            <div className="hidden lg:grid grid-cols-2 gap-6 mt-6">
              {cardsMainFeatures}
            </div>
            <div className="lg:hidden mt-6">
              <Carousel>
                {cardsMainFeatures}
              </Carousel>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-gradient-to-b from-galileoPurple-100 to-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar pt-16" id="cplug-segments">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Soluções específicas para <span className="text-galileoGreen-300">seu segmento</span>
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mb-10">
              O CPlug se adapta perfeitamente às necessidades do seu tipo de negócio.
            </p>
            <div className="hidden lg:flex gap-6 mt-10">
              {segmentCards}
            </div>
            <div className="lg:hidden mt-10">
              <Carousel>
                {segmentCards}
              </Carousel>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative min-h-[50vh] py-16" id="cplug-benefits">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <Card bgColor="bg-white">
              <h2 className="text-galileoPurple-500 text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
                Por que escolher o CPlug?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-black">
                <div className="flex gap-4">
                  <div className="text-galileoGreen-500 text-3xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Funciona Online e Offline</h3>
                    <p>Nunca pare de vender, mesmo sem internet.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-galileoGreen-500 text-3xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Suporte Especializado</h3>
                    <p>Equipe dedicada para ajudar seu negócio crescer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-galileoGreen-500 text-3xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Fácil de Usar</h3>
                    <p>Interface intuitiva, sua equipe aprende em minutos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-galileoGreen-500 text-3xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Atualizações Automáticas</h3>
                    <p>Sempre com as últimas funcionalidades, sem custo extra.</p>
                  </div>
                </div>
              </div>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20CPlug"
                className="mx-auto font-bold mt-8"
              >
                Fale com um especialista
              </ButtonPurple>
            </Card>
          </ContentContainer>
        </section>

        <section className="relative w-full bg-galileoPurple-400" id="contactForm">
          <ContentContainer className="w-full grid grid-cols-1 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
            <div className="flex flex-col justify-between max-w-[900px] mx-auto">
              <Card>
                <ContactForm />
              </Card>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
