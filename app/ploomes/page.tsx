import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ploomes CRM - O Maior CRM da América Latina | GalileoSoft",
  description: "Ploomes é o maior CRM da América Latina para gestão de vendas complexas B2B. Funis personalizáveis, automação, propostas e relatórios completos.",
  keywords: ["Ploomes", "CRM", "gestão vendas", "funil vendas", "automação", "B2B", "CRM América Latina"],
  openGraph: {
    title: "Ploomes CRM - O Maior CRM da América Latina",
    description: "Gerencie vendas complexas com o CRM mais completo da América Latina",
    type: "website",
  }
};

export default function Ploomes() {

  const cardsLightSection = [
    <Card key={'crm'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconCrm.png"
          alt="Ícone CRM"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Conte com um CRM altamente customizável, que se adapta facilmente às particularidades do seu negócio.
      </h3>
    </Card>,
    <Card key={'centralizedInfos'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconCentralize.png"
          alt="Ícone Centralize Informações"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Centralize todas as informações de seus clientes e mantenha um histórico de comunicação completo e organizado.
      </h3>
    </Card>,
    <Card key={'customizableProposals'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconCrie.png"
          alt="Ícone Criação de Propostas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Crie propostas encantadoras e parametrizadas. Automatize a geração de propostas e melhore seu processo de vendas.
      </h3>
    </Card>
  ];

  const cardsDarkSection = [
    <Card key={'crm'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconOrganize.png"
          alt="Ícone Organização de Clientes"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Organize sua base de clientes, segmente leads, filtre e visualize de modo intuitivo.
      </h3>
    </Card>,
    <Card key={'centralizedInfos'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconControle.png"
          alt="Ícone Controle seu processo de vendas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Tenha controle total sob seus processos de vendas através de um funil de vendas visual.
      </h3>
    </Card>,
    <Card key={'customizableProposals'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/ploomes/iconIntegre.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Integre e-mail, agenda, sistemas de marketing, ERPs e muito mais.
      </h3>
    </Card>
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <div className="absolute right-[5vw] w-[35vw] h-[95vh] hidden md:block">
          <Image
            src="/ploomes/logoPloomesNovo.svg"
            alt="Logo Ploomes"
            className="object-contain absolute animate-pulse"
            fill
            sizes="35vw"
            style={{
              animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="ploomes-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/ploomes/logoPloomesNovo.svg"
                  alt="Logo Ploomes"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                O Maior CRM da <span className="text-galileoGreen-300">América Latina</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-4">
                Mais de <span className="text-galileoGreen-300 font-bold">2.000 empresas</span> confiam no Ploomes para transformar suas vendas
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Unifique pipelines de vendas, workflows, automação de propostas e relatórios em uma única plataforma. Desenvolvido especialmente para empresas com vendas complexas B2B.
              </p>
              <ButtonGreen target="_blank" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="ploomes-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/ploomes/demoMultiDevice.webp"
                  alt="Demonstração ploomes multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-galileoPurple-500">Visão 360° </span>dos seus clientes
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Acesse o histórico completo de cada cliente: e-mails, ligações, propostas, negociações, produtos adquiridos, atividades pendentes e contratos vigentes. Tudo centralizado em um só lugar.
              </p>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto font-bold"
              >
                Agende uma Demonstração!
              </ButtonPurple>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/ploomes/demoMultiDevice.webp"
                alt="Demonstração ploomes multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="ploomes-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Clientes Ploomes têm
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> vantagens exclusivas:</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsLightSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsLightSection}
              </Carousel>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="ploomes-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsDarkSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsDarkSection}
              </Carousel>
            </div>
            <div className="flex flex-col gap-5 my-10">
              <ButtonGreen
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mx-auto"
              >
                Quero saber mais!
              </ButtonGreen>
            </div>
            <Card bgColor="bg-white">
              <h1 className="text-galileoPurple-500 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">Junte-se a mais de 2.000 empresas</h1>
              <p className="text-black text-2xl font-medium pb-3 text-center">Que já confiam no Ploomes para simplificar suas vendas</p>
              <div className="flex flex-row justify-evenly w-100">
                <Image
                  src="/ploomes/iconClienteUnimed.png"
                  alt="Logo Unimed"
                  width={100}
                  height={30}
                  className="h-7 my-auto"
                />
                <Image
                  src="/ploomes/iconClientePhilips.png"
                  alt="Logo Philips"
                  width={150}
                  height={46}
                  className="h-12 my-auto"
                />
                <Image
                  src="/ploomes/iconClienteIntelbras.webp"
                  alt="Logo Intelbras"
                  width={150}
                  height={150}
                />
                <Image
                  src="/ploomes/iconClienteVotorantim.webp"
                  alt="Logo Votorantim"
                  width={150}
                  height={150}
                />
              </div>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto font-bold mt-6"
              >
                Seja o próximo
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
