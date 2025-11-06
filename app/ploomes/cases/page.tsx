import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import ContentContainer from "@/components/ContentContainer";
import Particles from "@/components/Particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Sucesso Ploomes CRM | GalileoSoft",
  description: "Conheça empresas como Grupo Moura, Philips e Unimed que transformaram suas vendas com o Ploomes CRM. Resultados reais e comprovados.",
  keywords: ["cases de sucesso", "Ploomes", "CRM", "resultados", "depoimentos", "clientes"],
  openGraph: {
    title: "Cases de Sucesso - Ploomes CRM",
    description: "Empresas que transformaram suas vendas com Ploomes",
    type: "website",
  }
};

export default function PloomesCase() {
  const successCases = [
    {
      company: "Grupo Moura",
      segment: "Baterias e Energia",
      logo: "/ploomes/cases/moura.svg",
      result: "Redução de 30 minutos para 2 minutos",
      metric: "na criação de propostas comerciais",
      description: "O Grupo Moura conseguiu centralizar toda a operação comercial, otimizando a gestão do funil de vendas. A ferramenta proporcionou maior visibilidade sobre as operações e melhor previsibilidade para a fábrica.",
      videoId: "", // Adicionar ID do YouTube
      benefits: [
        "Centralização da operação comercial",
        "Gestão otimizada do funil de vendas",
        "Melhor previsibilidade para fábrica",
        "Redução drástica no tempo de criação de propostas"
      ]
    },
    {
      company: "Philips",
      segment: "Tecnologia e Saúde",
      logo: "/ploomes/iconClientePhilips.png",
      result: "Agilidade em processos",
      metric: "e atendimento de demandas",
      description: "Philips escolheu o Ploomes pela agilidade que a plataforma proporcionou aos seus processos e demandas, segundo Thiago Faustinoni Carvalho, Gerente de Atendimento ao Cliente.",
      videoId: "",
      benefits: [
        "Processos mais ágeis",
        "Melhor atendimento de demandas",
        "Integração com operações globais",
        "Maior controle da carteira de clientes"
      ]
    },
    {
      company: "Unimed",
      segment: "Saúde",
      logo: "/ploomes/iconClienteUnimed.png",
      result: "Aumento significativo",
      metric: "na produtividade dos vendedores",
      description: "A maior cooperativa de saúde do mundo aumentou a produtividade de seus vendedores e agora gerencia todas as operações comerciais através do Ploomes, segundo Flávia Schiochet, Gerente de Mercado Estratégico.",
      videoId: "",
      benefits: [
        "Aumento de produtividade",
        "Gestão completa das operações comerciais",
        "Centralização de informações",
        "Melhor acompanhamento de resultados"
      ]
    },
    {
      company: "Intercarta",
      segment: "Embalagens Alimentícias",
      logo: "/ploomes/cases/intercarta.svg",
      result: "Melhoria na conversão",
      metric: "e agilidade no atendimento",
      description: "A Intercarta ganhou agilidade no atendimento aos clientes, melhorou as taxas de conversão e conseguiu controle preciso das oportunidades. A integração com ERP trouxe segurança e eficiência.",
      videoId: "",
      benefits: [
        "Melhoria nas taxas de conversão",
        "Maior agilidade no atendimento",
        "Integração com ERP existente",
        "Controle preciso de oportunidades"
      ]
    },
    {
      company: "D+ Saúde",
      segment: "Saúde",
      logo: "/ploomes/cases/dmais.svg",
      result: "Gestão de +3.000 clientes",
      metric: "com qualidade e rastreabilidade",
      description: "Com o Ploomes, a D+ Saúde conseguiu gerenciar de forma satisfatória mais de 3.000 clientes, garantindo qualidade e rastreabilidade de todos os processos. A centralização das informações permitiu maior agilidade.",
      videoId: "",
      benefits: [
        "Gestão de mais de 3.000 clientes",
        "Qualidade e rastreabilidade",
        "Centralização de informações",
        "Maior agilidade na tomada de decisões"
      ]
    },
    {
      company: "Brizztech",
      segment: "Climatização",
      logo: "/ploomes/cases/brizztech.svg",
      result: "Visibilidade em tempo real",
      metric: "das entregas dos colaboradores",
      description: "A Brizztech conseguiu parametrizar diversas operações e visualizar em tempo real as entregas dos colaboradores. Essa centralização trouxe agilidade e confiança na gestão comercial.",
      videoId: "",
      benefits: [
        "Parametrização de operações",
        "Visibilidade em tempo real",
        "Agilidade na gestão comercial",
        "Maior confiança nos processos"
      ]
    }
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />

        {/* Hero Section */}
        <section className="py-20 md:py-32 relative w-full min-h-[70vh]" id="cases-hero">
          <ContentContainer className="flex flex-col text-center relative z-10">
            <div className="flex flex-col justify-center gap-6 text-white px-3 md:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Cases de <span className="text-galileoGreen-300">Sucesso</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6">
                Conheça empresas que transformaram suas vendas com o Ploomes
              </p>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                De pequenas empresas a grandes corporações, mais de 2.000 empresas confiam no Ploomes para gerenciar suas operações comerciais e alcançar resultados extraordinários.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Cases Grid */}
        <section className="w-full bg-galileoPurple-100 relative py-16" id="cases-grid">
          <ContentContainer className="flex flex-col z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3 md:px-6 lg:px-8">
              {successCases.map((caseItem, index) => (
                <Card key={index} bgColor="bg-white">
                  <div className="flex flex-col h-full">
                    {/* Company Logo */}
                    <div className="relative h-20 w-40 mx-auto mb-6">
                      {caseItem.logo && (
                        <Image
                          src={caseItem.logo}
                          alt={`Logo ${caseItem.company}`}
                          className="object-contain"
                          fill
                          sizes="160px"
                        />
                      )}
                    </div>

                    {/* Company Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-galileoPurple-500 mb-2">
                        {caseItem.company}
                      </h3>
                      <p className="text-sm text-gray-600 uppercase tracking-wider">
                        {caseItem.segment}
                      </p>
                    </div>

                    {/* Result Highlight */}
                    <div className="bg-galileoPurple-500 text-white p-4 rounded-lg mb-6">
                      <p className="text-xl font-bold text-center">
                        {caseItem.result}
                      </p>
                      <p className="text-center text-galileoGreen-300">
                        {caseItem.metric}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-black text-base mb-6 flex-grow">
                      {caseItem.description}
                    </p>

                    {/* Benefits List */}
                    <div className="mb-6">
                      <h4 className="text-galileoPurple-500 font-semibold mb-3">
                        Principais Benefícios:
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-black">
                            <span className="text-galileoGreen-300 mr-2">✓</span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Video CTA - Placeholder for when video IDs are added */}
                    {caseItem.videoId && (
                      <div className="mt-auto">
                        <a
                          href={`https://www.youtube.com/watch?v=${caseItem.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                          ▶ Assistir Case Completo
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-galileoPurple-400 relative py-20" id="cases-cta">
          <ContentContainer className="flex flex-col text-center z-10">
            <Card bgColor="bg-white">
              <h2 className="text-galileoPurple-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Seja o próximo caso de sucesso
              </h2>
              <p className="text-black text-lg md:text-xl mb-8">
                Agende uma demonstração e descubra como o Ploomes pode transformar suas vendas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonGreen
                  target="_blank"
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
                >
                  Agendar Demonstração
                </ButtonGreen>
                <ButtonGreen
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20Ploomes"
                >
                  Falar no WhatsApp
                </ButtonGreen>
              </div>
            </Card>
          </ContentContainer>
        </section>
      </main>
    </>
  );
}
