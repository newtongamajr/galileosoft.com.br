import Image from "next/image";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import ButtonOrange from "@/components/ButtonOrange";
import Particles from "@/components/Particles";
import PrimaryHeading from "@/components/PrimaryHeading";
import SecundaryText from "@/components/SecundaryText";
import SecundaryHeading from "@/components/SecundaryHeading";
import TertiaryHeading from "@/components/TertiaryHeading";
import PrimaryText from "@/components/PrimaryText";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'GalileoSoft - Tecnologia para Gestão Empresarial',
  description: 'Explore um universo de possibilidades com soluções tecnológicas para simplificar sua gestão. CRM Ploomes, sistema CPlug para varejo e food service, ERP e desenvolvimento personalizado.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GalileoSoft - Tecnologia para Gestão Empresarial',
    description: 'Explore um universo de possibilidades com soluções tecnológicas',
    url: 'https://galileosoft.com.br',
    type: 'website',
  },
};

export default function Home() {

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor Comercial",
      company: "TechVendas Distribuidora",
      content: "O Ploomes transformou nossa gestão comercial. Aumentamos 40% nas vendas em 6 meses com visibilidade total do pipeline."
    },
    {
      name: "Maria Santos",
      role: "Proprietária",
      company: "Restaurante Sabor & Arte",
      content: "Com o CPlug, reduzimos erros de pedidos em 90% e nosso delivery ficou muito mais organizado. Sistema intuitivo e suporte excelente!"
    },
    {
      name: "João Oliveira",
      role: "Gerente",
      company: "Mercado Bom Preço",
      content: "Controle de estoque impecável! O CPlug nos ajudou a reduzir perdas e melhorar o giro de produtos. Recomendo muito!"
    }
  ];

  const faqItems = [
    {
      question: "Quais soluções a GalileoSoft oferece?",
      answer: "Oferecemos uma ampla gama de soluções: CRM Ploomes para gestão de vendas complexas, sistema CPlug para pequeno varejo e food service, ERPFlex para gestão empresarial, Mobbiz para gestão de pedidos, Saurus para força de vendas, além de desenvolvimento de software personalizado."
    },
    {
      question: "O CPlug funciona sem internet?",
      answer: "Sim! O CPlug funciona tanto online quanto offline. Você nunca para de vender, mesmo se a internet cair. Quando a conexão for restabelecida, os dados são sincronizados automaticamente."
    },
    {
      question: "Quanto tempo leva para implementar um sistema?",
      answer: "O tempo varia conforme a complexidade do projeto. Sistemas como CPlug podem ser implementados em 1-2 semanas. Projetos maiores como CRM ou ERP levam de 4 a 8 semanas, incluindo treinamento e migração de dados."
    },
    {
      question: "Vocês oferecem treinamento e suporte?",
      answer: "Sim! Fornecemos treinamento completo para sua equipe e suporte técnico especializado. Nosso time está disponível para ajudar sempre que você precisar."
    },
    {
      question: "Os sistemas podem ser customizados?",
      answer: "Absolutamente! Todos os nossos sistemas podem ser customizados para atender as necessidades específicas do seu negócio. Além disso, oferecemos desenvolvimento de software 100% personalizado."
    },
    {
      question: "Como funciona a contratação?",
      answer: "É simples! Agende uma reunião com nossos consultores, faremos um diagnóstico das suas necessidades, apresentaremos a solução ideal e cuidaremos de toda a implementação. Entre em contato pelo WhatsApp ou pelo formulário abaixo."
    }
  ];

  const cards = [
    <Card key={'smartManagement'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconGestaoInteligente.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <PrimaryText className="text-center">
        Tecnologia a favor da Gestão
      </PrimaryText>
      <SecundaryText className="leading-normal">
        Diagnóstico e construção de soluções personalizadas para a sua gestão.
      </SecundaryText>
    </Card>,
    <Card key={'contentInovation'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconMaisDoQueSoftware.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <PrimaryText className="text-center">
        Estratégia de Implementação
      </PrimaryText>
      <SecundaryText className="leading-normal">
        Análise completa de cada caso para uma implementação assertiva.
      </SecundaryText>
    </Card>,
    <Card key={'moreThanSoftware'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconInovacaoConstante.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <PrimaryText className="text-center">
        Assistência sob medida
      </PrimaryText>
      <SecundaryText className="leading-normal">
        Foco em atender necessidades específicas e resolver problemas.
      </SecundaryText>
    </Card>
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <div className="absolute right-[10vw] w-[40vw] h-[95vh] hidden md:block">
          <Image
            src="/rocket.jpg"
            alt="Foguete decolando"
            className="object-contain absolute"
            fill
            sizes="50vw"
            priority
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/home-view2-luneta-colorida.png"
                  alt="Luneta: GalileoSoft visando novos horizontes"
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <PrimaryHeading>
                Explore um universo de possibilidades!
              </PrimaryHeading>
              <SecundaryText>
                A sinergia perfeita entre tecnologia e gestão para alcançar resultados extraordinários.
              </SecundaryText>
              <ButtonOrange 
                target="_blank" 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true" 
                className="mx-auto md:mx-0" 
              >
                Agendar reunião
              </ButtonOrange>
            </div>
            <a href="#whyGalileoSoft" className="scroll-down hidden md:block h-4 w-4" />
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh]" id="whyGalileoSoft">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/rocket.jpg"
                  alt="Luneta: GalileoSoft visando novos horizontes"
                  width={300}
                  height={300}
                />
              </div>
              <SecundaryHeading >
                A tecnologia é o combustível que leva as empresas a desbravar novos horizontes.
              </SecundaryHeading>
              <SecundaryText>
                Somos apaixonados por explorar o cosmos digital em busca de tecnologias para facilitar a sua gestão.
              </SecundaryText>
              <SecundaryText>
                Conte com nossa equipe experiente e dedicada para transformar suas metas em realidade e simplificar a gestão do seu negócio.
                Juntos, vamos alcançar horizontes além da imaginação.
              </SecundaryText>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/home-view2-luneta-colorida.png"
                alt="Luneta: GalileoSoft visando novos horizontes"
                width={400}
                height={400}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="howWeWork">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <SecundaryHeading className="text-center mt-10">
              Simplificamos a sua Gestão
              <TertiaryHeading className="hidden md:block"> <br /> através da tecnologia</TertiaryHeading>
            </SecundaryHeading>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cards}
            </div>
            <div className="lg:hidden lg:mt-10 text-white">
              <Carousel>
                {cards}
              </Carousel>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <ButtonOrange
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mx-auto"
              >
                Fale conosco
              </ButtonOrange>
            </div>
          </ContentContainer>
        </section>

        <Testimonials testimonials={testimonials} />

        <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre nossas soluções" />

        <section className="relative w-full bg-galileoPurple-400" id="contactForm">
          <ContentContainer className="w-full flex flex-col gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
            <div className="mx-auto">
              <SecundaryHeading className="text-center">
                Acelere sua empresa com soluções tecnológicas!
              </SecundaryHeading>
              <SecundaryText className="text-center">
                Cadastre-se e descubra como a tecnologia pode revolucionar sua gestão.
              </SecundaryText>
            </div>
            <div className="mx-auto flex flex-col justify-between">
              <Card>
                <ContactForm />
              </Card>
              <SecundaryText>Ao enviar esse formulário, você concorda em receber contatos da GalileoSoft.</SecundaryText>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
