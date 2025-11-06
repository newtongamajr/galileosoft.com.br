import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm";
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPlug para Bares e Lanchonetes | Sistema de Gestão | GalileoSoft",
  description: "Sistema completo para bares, lanchonetes e hamburguerias com controle de mesas, comanda eletrônica, delivery e PDV integrado.",
  keywords: ["CPlug bar", "sistema bar", "comanda eletrônica", "gestão lanchonete", "hamburgueria", "PDV bar"],
};

export default function CPlugBares() {
  const features = [
    <Card key={'tables'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconTables.svg"
          alt="Ícone Comandas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Comanda Eletrônica
      </h3>
      <p className="text-black text-center">
        Controle total das mesas com comanda digital, divisão de conta facilitada.
      </p>
    </Card>,
    <Card key={'beer'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconBeer.svg"
          alt="Ícone Chopp"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Controle de Chopp
      </h3>
      <p className="text-black text-center">
        Integração com torneiras de chopp para controle preciso de vendas.
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
        Delivery Integrado
      </h3>
      <p className="text-black text-center">
        Gerencie pedidos de delivery e salão no mesmo sistema.
      </p>
    </Card>,
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
        PDV Ágil
      </h3>
      <p className="text-black text-center">
        Fechamento de contas rápido mesmo em horários de pico.
      </p>
    </Card>,
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles className="fixed animate-fade-in z-10" quantity={200} />

        <section className="py-10 md:py-3 min-h-[95vh] relative w-full" id="hero">
          <ContentContainer className="flex flex-col md:flex-row text-center relative z-10 pt-16 md:text-left items-center">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Gestão Completa para <span className="text-galileoGreen-300">Bares e Lanchonetes</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Sistema com comanda eletrônica, controle de mesas, delivery e integração com chopp. Perfeito para seu negócio.
              </p>
              <ButtonGreen
                target="_blank"
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
                className="mx-auto md:mx-0"
              >
                Agendar demonstração
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full min-h-[75vh] bg-galileoPurple-100" id="features">
          <ContentContainer className="flex flex-col text-center relative z-10 py-10 my-auto">
            <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Funcionalidades para <span className="text-galileoPurple-500">Bares e Lanchonetes</span>
            </h2>
            <p className="text-black text-base md:text-lg mb-10">
              Tecnologia desenvolvida especialmente para o seu tipo de negócio.
            </p>
            <div className="hidden lg:grid grid-cols-2 gap-6 mt-6">
              {features}
            </div>
            <div className="lg:hidden mt-6">
              <Carousel>{features}</Carousel>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full bg-gradient-to-b from-galileoPurple-100 to-galileoPurple-400 py-16">
          <ContentContainer className="z-10">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
              Benefícios para seu Estabelecimento
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">🚀 Atendimento Rápido</h3>
                <p className="text-black">Feche contas em segundos, mesmo nos momentos de pico.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">🍺 Controle de Desperdício</h3>
                <p className="text-black">Monitore vendas de chopp e bebidas com precisão total.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">📱 Pedidos Digitais</h3>
                <p className="text-black">Clientes podem fazer pedidos pelo celular sem chamar garçom.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">💳 Divisão de Conta</h3>
                <p className="text-black">Divida contas por pessoa ou item de forma simples e rápida.</p>
              </Card>
            </div>
            <ButtonPurple
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20CPlug%20para%20bares%20e%20lanchonetes"
              className="mx-auto font-bold mt-10"
            >
              Fale com um especialista
            </ButtonPurple>
          </ContentContainer>
        </section>

        <section className="w-full bg-galileoPurple-400 py-16">
          <ContentContainer>
            <Card bgColor="bg-white">
              <h2 className="text-galileoPurple-500 text-2xl md:text-4xl font-bold mb-6 text-center">
                Ideal para:
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-black">
                <div className="text-center">
                  <div className="text-4xl mb-3">🍺</div>
                  <h3 className="font-bold text-xl mb-2">Bares</h3>
                  <p>Bares e botequins</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍔</div>
                  <h3 className="font-bold text-xl mb-2">Hamburguerias</h3>
                  <p>Artesanais e fast food</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌭</div>
                  <h3 className="font-bold text-xl mb-2">Lanchonetes</h3>
                  <p>Lanches e porções</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍕</div>
                  <h3 className="font-bold text-xl mb-2">Pizzarias</h3>
                  <p>Salão e delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🥤</div>
                  <h3 className="font-bold text-xl mb-2">Açaiterias</h3>
                  <p>Açaí e sucos</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍽️</div>
                  <h3 className="font-bold text-xl mb-2">Pubs</h3>
                  <p>Pubs e chopperias</p>
                </div>
              </div>
            </Card>
          </ContentContainer>
        </section>

        <section className="w-full bg-white py-12">
          <ContentContainer className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="w-24 h-24 relative">
              <Image
                src="/cplug/seloParceiroAutorizado.svg"
                alt="Parceiro Autorizado CPlug"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl">
              <strong>GalileoSoft</strong> é parceiro autorizado <strong>CPlug</strong> - ConnectPlug, com suporte especializado e implementação personalizada para seu negócio.
            </p>
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
  );
}
