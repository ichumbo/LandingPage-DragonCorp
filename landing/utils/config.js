export const appConfig = {
  appName: "DragonCorp",
  currentYear: new Date().getFullYear(),
  canonicalUrl: "https://dragoncorp.app/",
  ctaUrl: "#comece-agora",
  learnUrl: "#recursos",
  stores: {
    appStore: "#",
    googlePlay: "#",
  },
  metrics: [
    { value: "4.8", label: "avaliação média" },
    { value: "+1.000", label: "treinos organizados" },
    { value: "24/7", label: "rotina no celular" },
  ],
};

export const screenshots = {
  dashboard: "./assets/screenshots/screen-dashboard.webp",
  alunos: "./assets/screenshots/screen-alunos.webp",
  treinos: "./assets/screenshots/screen-treinos.webp",
  avaliacao: "./assets/screenshots/screen-avaliacao.webp",
  evolucao: "./assets/screenshots/screen-evolucao.webp",
  agenda: "./assets/screenshots/screen-agenda.webp",
  aluno: "./assets/screenshots/screen-aluno.webp",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para Personal", href: "#para-personal" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const featureCards = [
  {
    title: "Gestão de alunos",
    text: "Centralize objetivos, histórico, observações e dados importantes de cada aluno.",
    icon: "users-round",
  },
  {
    title: "Treinos personalizados",
    text: "Crie blocos, exercícios, séries, cargas e repetições com mais velocidade.",
    icon: "dumbbell",
  },
  {
    title: "Avaliação física",
    text: "Registre medidas, fotos e indicadores para acompanhar resultados com clareza.",
    icon: "clipboard-check",
  },
  {
    title: "Evolução",
    text: "Compare histórico, frequência, cargas e progresso sem depender de planilhas.",
    icon: "trending-up",
  },
  {
    title: "Agenda",
    text: "Organize atendimentos, avaliações e retornos em uma visão simples.",
    icon: "calendar-days",
  },
  {
    title: "Area do aluno",
    text: "Entregue o treino diário no celular do aluno, com acompanhamento e feedback.",
    icon: "smartphone",
  },
];

export const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    text: "Configure seu perfil profissional e deixe a plataforma pronta para receber alunos.",
  },
  {
    number: "02",
    title: "Cadastre seu aluno",
    text: "Organize dados, objetivos, restrições, medidas e histórico em uma ficha completa.",
  },
  {
    number: "03",
    title: "Monte o treino",
    text: "Estruture exercícios, séries, repetições e cargas em poucos minutos.",
  },
  {
    number: "04",
    title: "Acompanhe a evolução",
    text: "Visualize progresso, frequência e resultados para ajustar cada plano com precisão.",
  },
];

export const faqs = [
  {
    question: "O que é o aplicativo?",
    answer:
      "DragonCorp é uma plataforma para personal trainers gerenciarem alunos, treinos, avaliações, agenda e evolução em uma única experiência.",
  },
  {
    question: "Para quem ele foi desenvolvido?",
    answer:
      "Para personal trainers, studios e profissionais que precisam organizar atendimentos, entregar treinos e acompanhar progresso com mais controle.",
  },
  {
    question: "Consigo cadastrar meus proprios exercicios?",
    answer:
      "Sim. A estrutura da landing já comunica essa possibilidade e os textos podem ser ajustados conforme a regra final do produto.",
  },
  {
    question: "Meu aluno tambem possui acesso?",
    answer:
      "Sim. A proposta visual inclui uma área do aluno para consulta de treino, cargas, histórico e acompanhamento pelo celular.",
  },
  {
    question: "Posso acompanhar avaliações físicas?",
    answer:
      "Sim. A landing apresenta avaliações, medidas e indicadores de evolução como parte central da experiência.",
  },
  {
    question: "Consigo montar treinos personalizados?",
    answer:
      "Sim. A página destaca montagem de treinos com exercícios, séries, repetições, cargas e grupos musculares.",
  },
  {
    question: "Posso usar pelo celular?",
    answer:
      "Sim. Toda a composição foi pensada para vender uma experiência mobile, com mockups reutilizáveis de smartphone.",
  },
  {
    question: "Como funciona a assinatura?",
    answer:
      "A área de planos pode ser conectada futuramente. Por enquanto os botões usam URLs configuráveis no arquivo de configuração.",
  },
];
