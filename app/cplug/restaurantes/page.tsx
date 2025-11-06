import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm";
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPlug para Restaurantes | Sistema de Gestão Completo | GalileoSoft",
  description: "Sistema completo para restaurantes com PDV, controle de mesas, KDS (cozinha), delivery integrado e cardápio digital. Aumente a eficiência do seu restaurante.",
  keywords: ["CPlug restaurante", "sistema restaurante", "PDV restaurante", "KDS", "gestão mesas", "delivery restaurante"],
};

export default function CPlugRestaurantes() {
  const features = [
    <Card key={'tables'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconTables.svg"
          alt="Ícone Gestão de Mesas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Gestão de Mesas Inteligente
      </h3>
      <p className="text-black text-center">
        Controle de status das mesas, divisão de contas e atendimento otimizado.
      </p>
    </Card>,
    <Card key={'kds'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconKDS.svg"
          alt="Ícone KDS"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Sistema KDS para Cozinha
      </h3>
      <p className="text-black text-center">
        Pedidos chegam em tempo real na cozinha, sem papel e sem erros.
      </p>
    </Card>,
    <Card key={'menu'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconMenu.svg"
          alt="Ícone Cardápio Digital"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Cardápio Digital Interativo
      </h3>
      <p className="text-black text-center">
        Clientes pedem pelo celular via QR Code, sem esperar garçom.
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
        Hub de Delivery Unificado
      </h3>
      <p className="text-black text-center">
        Gerencie iFood, Rappi, Uber Eats e pedidos próprios em um só lugar.
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
                Transforme seu <span className="text-galileoGreen-300">Restaurante</span> com Tecnologia
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Sistema completo com controle de mesas, cozinha digital, delivery integrado e muito mais.
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
              Funcionalidades para <span className="text-galileoPurple-500">Restaurantes</span>
            </h2>
            <p className="text-black text-base md:text-lg mb-10">
              Otimize cada etapa do atendimento, da entrada do cliente até a entrega do pedido.
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
              Benefícios para seu Restaurante
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">⚡ Atendimento Mais Rápido</h3>
                <p className="text-black">Reduza o tempo de espera dos clientes com pedidos direto na cozinha.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">📊 Controle Total</h3>
                <p className="text-black">Acompanhe vendas, estoque e performance em tempo real.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">🛵 Delivery Descomplicado</h3>
                <p className="text-black">Gerencie todos os apps de delivery em uma única tela.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">💰 Aumente o Faturamento</h3>
                <p className="text-black">Atenda mais clientes com a mesma equipe através da automação.</p>
              </Card>
            </div>
            <ButtonPurple
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20CPlug%20para%20restaurantes"
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
                  <div className="text-4xl mb-3">🍽️</div>
                  <h3 className="font-bold text-xl mb-2">Restaurantes</h3>
                  <p>À la carte, self-service, rodízio</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍕</div>
                  <h3 className="font-bold text-xl mb-2">Pizzarias</h3>
                  <p>Delivery e salão</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">☕</div>
                  <h3 className="font-bold text-xl mb-2">Cafeterias</h3>
                  <p>Atendimento rápido e eficiente</p>
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
