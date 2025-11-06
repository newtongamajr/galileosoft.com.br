import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import ButtonPurple from "@/components/ButtonPurple";
import Card from "@/components/Card";
import ContentContainer from "@/components/ContentContainer";
import Particles from "@/components/Particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos do Ploomes CRM - Funcionalidades | GalileoSoft",
  description: "Conheça todos os recursos do Ploomes: funil de vendas, automação, propostas, relatórios, integrações e muito mais. CRM completo para sua empresa.",
  keywords: ["Ploomes recursos", "funcionalidades CRM", "funil vendas", "automação", "propostas", "relatórios"],
  openGraph: {
    title: "Recursos e Funcionalidades - Ploomes CRM",
    description: "Descubra todas as funcionalidades do maior CRM da América Latina",
    type: "website",
  }
};

export default function PloomesRecursos() {
  const features = [
    {
      icon: "/ploomes/iconCrm.png",
      title: "CRM Altamente Customizável",
      description: "Adapte o Ploomes às particularidades do seu negócio. Campos personalizados, automações específicas e processos sob medida.",
      details: [
        "Campos e formulários personalizados",
        "Múltiplos pipelines de vendas",
        "Configuração de etapas customizadas",
        "Permissões por usuário e equipe"
      ]
    },
    {
      icon: "/ploomes/iconCentralize.png",
      title: "Centralização de Informações",
      description: "Mantenha todas as informações dos seus clientes em um só lugar, com histórico completo e organizado de todas as interações.",
      details: [
        "Histórico completo de interações",
        "Registro de e-mails e ligações",
        "Documentos e propostas anexados",
        "Linha do tempo de atividades"
      ]
    },
    {
      icon: "/ploomes/iconCrie.png",
      title: "Propostas Encantadoras",
      description: "Crie propostas comerciais profissionais e parametrizadas. Automatize a geração e impressione seus clientes.",
      details: [
        "Templates personalizáveis",
        "Geração automática de propostas",
        "Assinatura digital integrada",
        "Controle de versões e aprovações"
      ]
    },
    {
      icon: "/ploomes/iconOrganize.png",
      title: "Gestão Inteligente de Leads",
      description: "Organize sua base de clientes, segmente leads, filtre e visualize de modo intuitivo para priorizar oportunidades.",
      details: [
        "Segmentação avançada",
        "Filtros e visualizações personalizadas",
        "Score de leads automático",
        "Distribuição inteligente de leads"
      ]
    },
    {
      icon: "/ploomes/iconControle.png",
      title: "Funil de Vendas Visual",
      description: "Tenha controle total sobre seus processos de vendas através de um funil visual, intuitivo e poderoso.",
      details: [
        "Visualização kanban do pipeline",
        "Arraste e solte oportunidades",
        "Previsão de vendas em tempo real",
        "Análise de taxa de conversão por etapa"
      ]
    },
    {
      icon: "/ploomes/iconIntegre.png",
      title: "Integrações Poderosas",
      description: "Integre e-mail, agenda, sistemas de marketing, ERPs e muito mais. Conecte todas as suas ferramentas.",
      details: [
        "Integração com Gmail e Outlook",
        "Conexão com ERPs (Sankhya, TOTVS, etc)",
        "API RESTful completa",
        "Webhooks para automações"
      ]
    }
  ];

  const additionalResources = [
    {
      title: "Relatórios e Dashboards",
      description: "Análises completas em tempo real com gráficos interativos e relatórios customizáveis.",
      icon: "📊"
    },
    {
      title: "Automação de Tarefas",
      description: "Automatize ações repetitivas e foque no que realmente importa: vender mais.",
      icon: "🤖"
    },
    {
      title: "App Mobile",
      description: "Acesse o Ploomes de qualquer lugar com apps nativos para iOS e Android.",
      icon: "📱"
    },
    {
      title: "Gestão de Produtos",
      description: "Catálogo completo de produtos com preços, combos e regras de desconto.",
      icon: "🏷️"
    },
    {
      title: "Gestão de Contratos",
      description: "Controle renovações, aditivos e todo o ciclo de vida dos contratos.",
      icon: "📄"
    },
    {
      title: "Workflow Visual",
      description: "Crie fluxos de trabalho complexos com interface visual drag-and-drop.",
      icon: "⚙️"
    },
    {
      title: "Importação de Dados",
      description: "Migre facilmente de outros sistemas com importação assistida.",
      icon: "📥"
    },
    {
      title: "Suporte Especializado",
      description: "Equipe de suporte dedicada e base de conhecimento completa.",
      icon: "💬"
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
        <section className="py-20 md:py-32 relative w-full min-h-[70vh]" id="recursos-hero">
          <ContentContainer className="flex flex-col text-center relative z-10">
            <div className="flex flex-col justify-center gap-6 text-white px-3 md:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Recursos <span className="text-galileoGreen-300">Completos</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6">
                Tudo o que você precisa para vender mais e melhor
              </p>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                O Ploomes oferece todas as ferramentas necessárias para gerenciar vendas complexas B2B, desde a prospecção até o pós-venda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <ButtonGreen
                  target="_blank"
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
                >
                  Agendar Demonstração
                </ButtonGreen>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Main Features */}
        <section className="w-full bg-galileoPurple-100 relative py-16" id="main-features">
          <ContentContainer className="flex flex-col z-10">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center px-3">
              Principais <span className="text-galileoPurple-500">Funcionalidades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-6 lg:px-8">
              {features.map((feature, index) => (
                <Card key={index} bgColor="bg-white">
                  <div className="flex flex-col h-full">
                    <div className="relative h-24 w-24 mx-auto mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        className="object-contain"
                        fill
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-galileoPurple-500 text-xl font-bold text-center mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-black text-base mb-6 text-center">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-black text-sm">
                          <span className="text-galileoGreen-300 mr-2 flex-shrink-0">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Additional Resources */}
        <section className="w-full bg-galileoPurple-400 relative py-16" id="additional-resources">
          <ContentContainer className="flex flex-col z-10">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center px-3">
              E muito <span className="text-galileoGreen-300">mais...</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 md:px-6 lg:px-8">
              {additionalResources.map((resource, index) => (
                <Card key={index} bgColor="bg-white">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="text-5xl mb-4">{resource.icon}</div>
                    <h4 className="text-galileoPurple-500 text-lg font-bold mb-3">
                      {resource.title}
                    </h4>
                    <p className="text-black text-sm">
                      {resource.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* Demo Section */}
        <section className="w-full bg-galileoPurple-100 relative py-16" id="demo-section">
          <ContentContainer className="flex flex-col z-10">
            <Card bgColor="bg-white">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-galileoPurple-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Veja o Ploomes em ação
                </h2>
                <p className="text-black text-lg md:text-xl mb-8">
                  Agende uma demonstração personalizada e descubra como o Ploomes pode revolucionar suas vendas
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ButtonPurple
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Ploomes"
                    className="font-bold"
                  >
                    Falar com Especialista
                  </ButtonPurple>
                  <ButtonGreen
                    target="_blank"
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
                  >
                    Agendar Demonstração
                  </ButtonGreen>
                </div>
              </div>
            </Card>
          </ContentContainer>
        </section>

        {/* Integration Logos Section */}
        <section className="w-full bg-galileoPurple-400 relative py-16" id="integrations">
          <ContentContainer className="flex flex-col z-10">
            <Card bgColor="bg-white">
              <h3 className="text-galileoPurple-500 text-2xl md:text-3xl font-bold mb-8 text-center">
                Integra com as ferramentas que você já usa
              </h3>
              <p className="text-black text-center mb-6">
                API completa e integrações nativas com os principais sistemas do mercado
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 py-6">
                <div className="text-gray-600 text-sm">Gmail</div>
                <div className="text-gray-600 text-sm">Outlook</div>
                <div className="text-gray-600 text-sm">Sankhya</div>
                <div className="text-gray-600 text-sm">TOTVS</div>
                <div className="text-gray-600 text-sm">RD Station</div>
                <div className="text-gray-600 text-sm">Pipedrive</div>
                <div className="text-gray-600 text-sm">E muito mais...</div>
              </div>
            </Card>
          </ContentContainer>
        </section>
      </main>
    </>
  );
}
