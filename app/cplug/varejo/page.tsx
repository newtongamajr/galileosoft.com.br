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
  title: "CPlug para Pequeno Varejo | Sistema de Gestão PDV | GalileoSoft",
  description: "Sistema de gestão completo para pequeno varejo: mercados, padarias, açougues, autopeças. PDV, estoque, NF-e e controle financeiro.",
  keywords: ["CPlug varejo", "sistema PDV", "gestão mercado", "padaria", "açougue", "autopeças", "controle estoque"],
};

export default function CPlugVarejo() {
  const features = [
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
        PDV Rápido e Confiável
      </h3>
      <p className="text-black text-center">
        Frente de caixa ágil que agiliza o atendimento e reduz filas.
      </p>
    </Card>,
    <Card key={'nfe'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconNFE.svg"
          alt="Ícone NF-e"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Emissão de NF-e Automática
      </h3>
      <p className="text-black text-center">
        Emita notas fiscais automaticamente a cada venda, sem complicação.
      </p>
    </Card>,
    <Card key={'inventory'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconInventory.svg"
          alt="Ícone Estoque"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Controle de Estoque Inteligente
      </h3>
      <p className="text-black text-center">
        Monitore seu estoque em tempo real e receba alertas de reposição.
      </p>
    </Card>,
    <Card key={'financial'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/cplug/iconFinancial.svg"
          alt="Ícone Financeiro"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Gestão Financeira Completa
      </h3>
      <p className="text-black text-center">
        Controle de caixa, contas a pagar e receber, fluxo de caixa.
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
                Gestão Completa para <span className="text-galileoGreen-300">Pequeno Varejo</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Sistema integrado com PDV, estoque, NF-e e financeiro. Tudo que seu negócio precisa em um só lugar.
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
              Funcionalidades para <span className="text-galileoPurple-500">Varejo</span>
            </h2>
            <p className="text-black text-base md:text-lg mb-10">
              Tudo que você precisa para gerenciar seu comércio com eficiência.
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
              Benefícios para seu Varejo
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">✅ Menos Erros</h3>
                <p className="text-black">Elimine erros de caixa e tenha controle total das vendas.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">📦 Estoque Organizado</h3>
                <p className="text-black">Saiba exatamente o que tem em estoque e evite rupturas.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">🧾 NF-e Simplificada</h3>
                <p className="text-black">Emissão automática de notas fiscais sem complicação.</p>
              </Card>
              <Card bgColor="bg-white">
                <h3 className="text-galileoPurple-500 font-bold text-2xl mb-3">💼 Gestão Profissional</h3>
                <p className="text-black">Relatórios completos para tomar decisões inteligentes.</p>
              </Card>
            </div>
            <ButtonPurple
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20CPlug%20para%20varejo"
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
              <div className="grid md:grid-cols-4 gap-6 text-black">
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <h3 className="font-bold text-xl mb-2">Pequenos Mercados</h3>
                  <p>Minimercados e mercearias</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🥖</div>
                  <h3 className="font-bold text-xl mb-2">Padarias</h3>
                  <p>Padarias e confeitarias</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🥩</div>
                  <h3 className="font-bold text-xl mb-2">Açougues</h3>
                  <p>Açougues e casa de carnes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold text-xl mb-2">Autopeças</h3>
                  <p>Lojas de autopeças</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛠️</div>
                  <h3 className="font-bold text-xl mb-2">Mat. Construção</h3>
                  <p>Lojas de materiais</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛢️</div>
                  <h3 className="font-bold text-xl mb-2">Troca de Óleo</h3>
                  <p>Centro automotivo</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍦</div>
                  <h3 className="font-bold text-xl mb-2">Sorveterias</h3>
                  <p>Sorveterias e açaiterias</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏪</div>
                  <h3 className="font-bold text-xl mb-2">Outros Varejos</h3>
                  <p>E muito mais!</p>
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
