// =====================================================================
//  DragonCorp · Configurações do site
//
//  Edite AQUI tudo o que precisa mudar: textos, preços, links,
//  métricas e perguntas. O restante do site lê este arquivo.
// =====================================================================

export const appConfig = {
  appName: "DragonCorp",
  tagline: "Feito para quem vive de resultado.",
  canonicalUrl: "https://dragoncorp.app/",
  currentYear: new Date().getFullYear(),
  email: "contato@dragoncorp.app",

  // ---- CONVERSÃO: baixar app + assinar --------------------------------
  // Coloque aqui os links REAIS das lojas. Enquanto estiver como "#",
  // os botões funcionam como âncora para a seção final.
  stores: {
    appStore: "#",
    googlePlay: "#",
  },
  // Se a assinatura for feita em um checkout externo (fora do app),
  // troque esta âncora pelo link do checkout.
  signupUrl: "#comece",

  nav: [
    { label: "Recursos", href: "#recursos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],

  hero: {
    kicker: "Plataforma por assinatura · Personal trainers",
    title: ["Seus alunos.", "Seus treinos.", "Seu resultado."],
    sub: "O DragonCorp reúne treino, avaliação, agenda e evolução em um único app. Menos planilha, mais aluno no topo da tabela.",
    proof: ["7 dias grátis", "sem cartão", "cancele quando quiser"],
    chip: "+12% de força em 90 dias",
  },

  heroStats: [
    { value: 1200, prefix: "+", label: "personal trainers ativos" },
    { value: 4.8, decimals: 1, label: "nota média nas lojas" },
    { value: 50, suffix: " mil", label: "treinos entregues por mês" },
    { value: 92, suffix: "%", label: "dos alunos mantém a frequência" },
  ],

  marquee: ["Alunos", "Treinos", "Avaliação física", "Agenda", "Evolução", "Resultado"],

  problem: {
    kicker: "O problema",
    title: ["Planilha não", "fecha aluno."],
    lead: "Você vive de resultado, mas perde o dia em planilha, foto de treino no WhatsApp e anotação em agenda. O aluno sente a bagunça — e some no meio do pacote.",
    pains: [
      {
        num: "01",
        title: "Treino no papel, carga errada",
        text: "Exercício certo, versão errada. O aluno treina com a carga de três meses atrás e o resultado estagna.",
      },
      {
        num: "02",
        title: "Avaliação que nunca sai",
        text: "Medida no caderno, foto solta na galeria. O comparativo de 90 dias vira promessa que nunca aparece.",
      },
      {
        num: "03",
        title: "Agenda que não respira",
        text: "Horário combinado na boca, retorno esquecido, aluno sem resposta some do pacote no mês seguinte.",
      },
    ],
  },

  features: {
    kicker: "Recursos",
    title: ["Tudo do seu personal.", "Num aplicativo."],
    lead: "Cada função foi desenhada para o ritmo de quem treina de verdade — da academia ao condomínio.",
    cards: [
      {
        icon: "users-round",
        title: "Gestão de alunos",
        text: "Ficha completa: objetivo, restrição, histórico e contato. Tudo num lugar, sem caderno.",
      },
      {
        icon: "dumbbell",
        title: "Treinos personalizados",
        text: "Monte exercício, série, carga e rep em minutos. O aluno abre o app e já sabe o que fazer.",
      },
      {
        icon: "clipboard-check",
        title: "Avaliação física",
        text: "Medidas, fotos e indicadores registrados no app. O antes e depois vira prova, não promessa.",
      },
      {
        icon: "trending-up",
        title: "Evolução",
        text: "Gráfico de carga, frequência e peso. O aluno vê o progresso — e renova a assinatura.",
      },
      {
        icon: "calendar-days",
        title: "Agenda",
        text: "Atendimento, avaliação e retorno organizados. Menos esquecimento, mais constância.",
      },
      {
        icon: "smartphone",
        title: "Área do aluno",
        text: "O treino do dia no celular do aluno, com checklist e feedback direto com você.",
      },
    ],
  },

  how: {
    kicker: "Como funciona",
    title: ["Do cadastro", "ao gráfico."],
    steps: [
      {
        number: "01",
        screen: "dashboard",
        title: "Crie sua conta",
        text: "Configure seu perfil, sua identidade e sua assinatura em dois minutos.",
      },
      {
        number: "02",
        screen: "aluno",
        title: "Cadastre o aluno",
        text: "Objetivo, restrição, medidas e histórico em uma ficha única, pronta para treinar.",
      },
      {
        number: "03",
        screen: "treinos",
        title: "Monte o treino",
        text: "Exercício, série, carga e rep. O aluno recebe na hora, no celular, com checklist.",
      },
      {
        number: "04",
        screen: "evolucao",
        title: "Acompanhe a evolução",
        text: "Carga, frequência e resultado em gráfico. Você ajusta o plano, o aluno vê o progresso.",
      },
    ],
  },

  results: {
    kicker: "Resultado",
    title: ["Resultado", "se mede."],
    lead: "No DragonCorp o progresso do aluno vira gráfico. E é o gráfico que faz o pacote renovar — não a promessa.",
    stats: [
      { value: 12, prefix: "+", suffix: "%", label: "de força média em 90 dias", level: 78 },
      { value: 92, suffix: "%", label: "de frequência com plano ativo", level: 92 },
      { value: 2, suffix: "x", label: "mais renovação de pacote", level: 66 },
      { value: 40, suffix: " min", label: "economizados por dia", level: 52 },
    ],
    chip: "92% de frequência",
  },

  testimonials: {
    kicker: "Quem usa, renova",
    title: ["Personal que saiu", "da planilha."],
    items: [
      {
        quote: "Saí da planilha no primeiro mês. Hoje o aluno chega na aula e já viu o treino no celular. A renovação subiu sozinha.",
        name: "Marina Costa",
        role: "Personal · São Paulo, SP",
      },
      {
        quote: "A avaliação física virou meu fechamento. Mostro o gráfico dos 90 dias e o aluno renova na hora, sem desconto.",
        name: "Diego Almeida",
        role: "Personal · Rio de Janeiro, RJ",
      },
      {
        quote: "Atendo 30 alunos e a agenda não caiu nem uma vez. O estúdio roda igual aplicativo de banco.",
        name: "Rafa Teixeira",
        role: "Studio · Curitiba, PR",
      },
    ],
  },

  // ---- ASSINATURA (preços são editáveis aqui) -------------------------
  plans: {
    kicker: "Assinatura",
    title: ["Um plano para cada", "fase do seu personal."],
    lead: "Sem taxa de adesão. Sem fidelidade. Assine direto no app e cancele quando quiser.",
    items: [
      {
        name: "Start",
        price: "49",
        tagline: "Pra quem está saindo da planilha.",
        features: ["Até 15 alunos", "Treinos personalizados", "Área do aluno no app", "Suporte por e-mail"],
        cta: "Começar no Start",
        popular: false,
      },
      {
        name: "Pro",
        price: "89",
        tagline: "Pra quem vive de resultado.",
        features: ["Alunos ilimitados", "Avaliação física + evolução", "Agenda completa", "Suporte prioritário"],
        cta: "Assinar o Pro",
        popular: true,
      },
      {
        name: "Studio",
        price: "149",
        tagline: "Pra estúdio com equipe.",
        features: ["Até 5 profissionais", "Alunos compartilhados", "Relatórios do estúdio", "Suporte dedicado"],
        cta: "Falar sobre o Studio",
        popular: false,
      },
    ],
    note: "Preços em reais · cobrança mensal · 7 dias de teste grátis antes da primeira cobrança",
  },

  faq: {
    kicker: "Dúvidas",
    title: ["Pergunta boa.", "Resposta direta."],
    contactLabel: "Ficou com outra dúvida?",
    items: [
      {
        q: "Como funciona a assinatura?",
        a: "Você assina direto no app: começa com 7 dias grátis, escolhe o plano no seu ritmo e pode cancelar quando quiser, sem fidelidade.",
      },
      {
        q: "Preciso de outro aplicativo?",
        a: "Não. Treino, avaliação, agenda e evolução ficam no DragonCorp. O aluno usa o mesmo aplicativo, na aba dele.",
      },
      {
        q: "Meu aluno precisa saber de planilha?",
        a: "Não. O aluno só vê o treino do dia, o checklist e a própria evolução. Toda a gestão fica do seu lado.",
      },
      {
        q: "Funciona quando o aluno está na academia?",
        a: "Sim. O app roda no celular e o treino fica sempre à mão — inclusive com acesso rápido entre as séries.",
      },
      {
        q: "Posso mudar de plano depois?",
        a: "Pode. Faça upgrade a qualquer momento e o valor novo vale a partir da próxima cobrança.",
      },
      {
        q: "Vocês têm versão web?",
        a: "O DragonCorp é pensado para o celular, onde o treino acontece. O painel de gestão também funciona em qualquer navegador.",
      },
    ],
  },

  ctaFinal: {
    kicker: "Comece hoje",
    title: ["Baixe o app.", "Assine em 2 minutos."],
    sub: "Teste grátis de 7 dias, sem cartão. Seu primeiro aluno entra hoje.",
  },
};

// Screenshots do app (substitua os arquivos mantendo os nomes)
export const screenshots = {
  dashboard: "./assets/screenshots/screen-dashboard.webp",
  aluno: "./assets/screenshots/screen-aluno.webp",
  alunos: "./assets/screenshots/screen-alunos.webp",
  treinos: "./assets/screenshots/screen-treinos.webp",
  avaliacao: "./assets/screenshots/screen-avaliacao.webp",
  evolucao: "./assets/screenshots/screen-evolucao.webp",
  agenda: "./assets/screenshots/screen-agenda.webp",
};
