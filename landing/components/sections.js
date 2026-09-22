import { button } from "./Button.js";
import { featureCard } from "./FeatureCard.js";
import { phoneMockup } from "./PhoneMockup.js";
import { appConfig, faqs, featureCards, navItems, screenshots, steps } from "../utils/config.js";

function storeButton(label, meta, href, icon) {
  return `
    <a class="store-button" href="${href}" aria-label="${label}">
      <i data-lucide="${icon}" aria-hidden="true"></i>
      <span>
        <small>${meta}</small>
        ${label}
      </span>
    </a>
  `;
}

export function LandingHeader() {
  return `
    <header class="landing-header" data-header>
      <a class="landing-header__brand" href="#home" aria-label="DragonCorp inicio">
        <img src="./assets/brand/logotipo-principal.png" alt="DragonCorp" width="214" height="48">
      </a>

      <nav class="landing-header__nav" aria-label="Navegacao principal">
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>

      <button class="landing-header__menu" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
        <i data-lucide="menu" aria-hidden="true"></i>
      </button>

      ${button({ href: appConfig.ctaUrl, label: "Começar agora", icon: "arrow-right", className: "landing-header__cta" })}

      <div class="mobile-nav" data-mobile-nav>
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        ${button({ href: appConfig.ctaUrl, label: "Começar agora", icon: "arrow-right" })}
      </div>
    </header>
  `;
}

export function HeroSection() {
  return `
    <section class="hero section-shell" id="home" aria-labelledby="hero-title">
      <div class="hero__content reveal reveal--visible">
        <p class="badge">
          <span></span>
          A nova forma de gerenciar seus alunos
        </p>
        <h1 id="hero-title">Tudo que um Personal Trainer precisa em um só lugar.</h1>
        <p class="hero__lead">Gerencie alunos, treinos, avaliações, agenda e evolução através de uma única plataforma premium.</p>

        <div class="hero__actions">
          ${button({ href: appConfig.ctaUrl, label: "Começar agora", icon: "arrow-right" })}
          ${button({ href: appConfig.learnUrl, label: "Conhecer o aplicativo", variant: "secondary", icon: "chevron-down" })}
        </div>

        <div class="hero__stores" aria-label="Lojas de aplicativo">
          ${storeButton("Google Play", "Em breve no", appConfig.stores.googlePlay, "play")}
          ${storeButton("App Store", "Em breve na", appConfig.stores.appStore, "apple")}
        </div>

        <dl class="hero__metrics" aria-label="Indicadores do aplicativo">
          ${appConfig.metrics
            .map(
              (metric) => `
                <div>
                  <dt>${metric.value}</dt>
                  <dd>${metric.label}</dd>
                </div>
              `,
            )
            .join("")}
        </dl>
      </div>

      <div class="hero__visual reveal reveal--visible" aria-label="Previa visual do aplicativo DragonCorp">
        <span class="ring ring--one" aria-hidden="true"></span>
        <span class="ring ring--two" aria-hidden="true"></span>
        <span class="hero__marker hero__marker--top" aria-hidden="true">Agenda sincronizada</span>
        <span class="hero__marker hero__marker--bottom" aria-hidden="true">+12% evolução</span>
        ${phoneMockup({
          image: screenshots.dashboard,
          alt: "Tela de dashboard do aplicativo DragonCorp",
          size: "hero",
          className: "float-slow",
          loading: "eager",
        })}
      </div>
    </section>
  `;
}

export function IntroSection() {
  return `
    <section class="intro section-shell" aria-labelledby="intro-title">
      <div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Rotina organizada</p>
        <h2 id="intro-title">Menos planilhas. Mais resultados.</h2>
        <p>Organize sua rotina profissional sem perder tempo entre planilhas, mensagens e aplicativos diferentes.</p>
      </div>

      <div class="intro-board reveal">
        <article class="mini-card mini-card--profile">
          <span class="avatar-pill" aria-hidden="true"></span>
          <div>
            <strong>Ana Lima</strong>
            <small>Hipertrofia | 4x semana</small>
          </div>
        </article>

        <article class="mini-card mini-card--metric">
          <small>Frequência</small>
          <strong>92%</strong>
          <span aria-hidden="true"></span>
        </article>

        ${phoneMockup({
          image: screenshots.alunos,
          alt: "Tela de lista de alunos do aplicativo",
          size: "sm",
          className: "intro-board__phone float-soft",
        })}

        <article class="mini-dashboard" aria-label="Mini dashboard de treino">
          <div>
            <small>Treinos esta semana</small>
            <strong>31</strong>
          </div>
          <span style="--bar-h: 44px"></span>
          <span style="--bar-h: 68px"></span>
          <span style="--bar-h: 52px"></span>
          <span style="--bar-h: 86px"></span>
          <span style="--bar-h: 60px"></span>
        </article>
      </div>
    </section>
  `;
}

export function FeatureShowcase() {
  return `
    <section class="dark-showcase section-shell" aria-labelledby="showcase-title">
      <div class="dark-showcase__inner reveal">
        <div class="section-heading section-heading--dark">
          <p class="eyebrow">Controle profissional</p>
          <h2 id="showcase-title">Sua rotina profissional. Mais simples.</h2>
          <p>O aplicativo organiza os pontos principais do atendimento para você evoluir o aluno sem perder velocidade.</p>
        </div>

        <div class="showcase-grid">
          <article class="showcase-card showcase-card--students">
            <div>
              <span class="card-kicker">01</span>
              <h3>Gerencie seus alunos</h3>
              <p>Cadastro, objetivos, historico, observacoes e acompanhamento em uma ficha clara.</p>
            </div>
            <ul class="clean-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Perfil completo</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Histórico centralizado</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Objetivos visíveis</li>
            </ul>
            ${phoneMockup({
              image: screenshots.alunos,
              alt: "Tela de gestão de alunos",
              size: "card",
              className: "showcase-card__phone",
            })}
          </article>

          <article class="showcase-card showcase-card--training">
            <div>
              <span class="card-kicker">02</span>
              <h3>Monte treinos em minutos</h3>
              <p>Exercícios, séries, repetições, cargas e grupos musculares em uma estrutura visual.</p>
            </div>
            <div class="workout-lines" aria-hidden="true">
              <span style="--w: 78%"></span>
              <span style="--w: 92%"></span>
              <span style="--w: 64%"></span>
              <span style="--w: 84%"></span>
            </div>
            <div class="phone-pair">
              ${phoneMockup({
                image: screenshots.treinos,
                alt: "Tela de montagem de treino",
                size: "xs",
                className: "phone-pair__front",
              })}
              ${phoneMockup({
                image: screenshots.agenda,
                alt: "Tela de agenda de treinos",
                size: "xs",
                rotate: "5deg",
                className: "phone-pair__back",
              })}
            </div>
          </article>

          <article class="showcase-card showcase-card--progress">
            <div>
              <span class="card-kicker">03</span>
              <h3>Acompanhe cada evolução</h3>
              <p>Peso, medidas, percentual de gordura, cargas, frequência e progresso em uma leitura direta.</p>
            </div>
            <div class="progress-panel" aria-label="Resumo de evolução">
              <span>
                <small>Peso</small>
                <strong>78,2 kg</strong>
              </span>
              <span>
                <small>Gordura</small>
                <strong>12,8%</strong>
              </span>
              <span>
                <small>Treinos</small>
                <strong>18</strong>
              </span>
            </div>
            ${phoneMockup({
              image: screenshots.evolucao,
              alt: "Tela de evolução do aluno",
              size: "wide",
              className: "showcase-card__dashboard",
            })}
          </article>
        </div>
      </div>
    </section>
  `;
}

export function HowItWorks() {
  return `
    <section class="how section-shell" id="como-funciona" aria-labelledby="how-title">
      <div class="how__visual reveal">
        ${phoneMockup({
          image: screenshots.avaliacao,
          alt: "Tela de avaliação física do aplicativo",
          size: "lg",
          className: "float-soft",
        })}
      </div>

      <div class="how__content reveal">
        <p class="eyebrow">Como funciona</p>
        <h2 id="how-title">Comece em poucos passos.</h2>
        <div class="step-list">
          ${steps
            .map(
              (step) => `
                <article class="step-item">
                  <span>${step.number}</span>
                  <div>
                    <h3>${step.title}</h3>
                    <p>${step.text}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function BenefitsGrid() {
  return `
    <section class="benefits section-shell" id="recursos" aria-labelledby="benefits-title">
      <div class="section-heading reveal">
        <p class="eyebrow">Recursos</p>
        <h2 id="benefits-title">Tudo que você precisa para trabalhar melhor.</h2>
        <p>Uma estrutura pensada para personal trainers que precisam vender, executar e acompanhar com consistência.</p>
      </div>

      <div class="benefits__grid">
        ${featureCards.map((item) => featureCard(item)).join("")}
      </div>
    </section>
  `;
}

export function ProgressSection() {
  return `
    <section class="progress-section section-shell" aria-labelledby="progress-title">
      <div class="progress-section__content reveal">
        <p class="eyebrow">Evolução física</p>
        <h2 id="progress-title">Resultados que você consegue acompanhar.</h2>
        <p>Indicadores claros ajudam a ajustar treinos, reforçar consistência e mostrar progresso para cada aluno.</p>
        <div class="progress-metrics">
          <span><small>Peso</small><strong>78,2 kg</strong></span>
          <span><small>Gordura corporal</small><strong>12,8%</strong></span>
          <span><small>Treinos concluídos</small><strong>18</strong></span>
          <span><small>Evolução</small><strong>+12%</strong></span>
        </div>
      </div>

      <div class="progress-section__visual reveal">
        <article class="floating-stat floating-stat--top">
          <small>Frequência</small>
          <strong>92%</strong>
        </article>
        ${phoneMockup({
          image: screenshots.evolucao,
          alt: "Tela de acompanhamento de evolução",
          size: "lg",
          className: "float-slow",
        })}
        <article class="floating-stat floating-stat--bottom">
          <small>Carga media</small>
          <strong>+8 kg</strong>
        </article>
      </div>
    </section>
  `;
}

export function PersonalStudentSection() {
  return `
    <section class="dual section-shell" id="para-personal" aria-labelledby="dual-title">
      <div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Personal + aluno</p>
        <h2 id="dual-title">A mesma plataforma para os dois lados do treino.</h2>
      </div>

      <div class="dual__grid">
        <article class="dual-panel reveal">
          <div class="dual-panel__copy">
            <span class="card-kicker">Para o Personal</span>
            <h3>Gestão, agenda, avaliações e treinos sob controle.</h3>
            <ul class="clean-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Alunos e historicos</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Agenda de atendimentos</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Avaliações e evolução</li>
            </ul>
          </div>
          ${phoneMockup({
            image: screenshots.dashboard,
            alt: "Interface para o personal trainer",
            size: "md",
            className: "dual-panel__phone",
          })}
        </article>

        <article class="dual-panel dual-panel--dark reveal">
          <div class="dual-panel__copy">
            <span class="card-kicker">Para o Aluno</span>
            <h3>Treino diario, cargas, historico e feedback no celular.</h3>
            <ul class="clean-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Treino do dia</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Cargas e repeticoes</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Acompanhamento de progresso</li>
            </ul>
          </div>
          ${phoneMockup({
            image: screenshots.aluno,
            alt: "Interface mobile para aluno",
            size: "md",
            className: "dual-panel__phone",
          })}
        </article>
      </div>
    </section>
  `;
}

export function FAQSection() {
  return `
    <section class="faq section-shell" id="duvidas" aria-labelledby="faq-title">
      <div class="faq__content reveal">
        <p class="eyebrow">Dúvidas</p>
        <h2 id="faq-title">Perguntas frequentes.</h2>
        <div class="accordion" data-accordion>
          ${faqs
            .map(
              (faq, index) => `
                <article class="accordion__item">
                  <button class="accordion__trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${faq.question}</span>
                    <i data-lucide="plus" aria-hidden="true"></i>
                  </button>
                  <div class="accordion__panel" aria-hidden="${index === 0 ? "false" : "true"}">
                    <p>${faq.answer}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="faq__visual reveal">
        <article class="faq-card">
          <small>Próximo atendimento</small>
          <strong>17:00</strong>
          <span>Avaliação física</span>
        </article>
        ${phoneMockup({
          image: screenshots.agenda,
          alt: "Tela de agenda do aplicativo",
          size: "lg",
          className: "float-soft",
        })}
      </div>
    </section>
  `;
}

export function FinalCTA() {
  return `
    <section class="final-cta section-shell" id="comece-agora" aria-labelledby="final-cta-title">
      <div class="final-cta__inner reveal">
        <div class="final-cta__copy">
          <p class="eyebrow">Comece agora</p>
          <h2 id="final-cta-title">Sua rotina como Personal pode ser muito mais simples.</h2>
          <p>Centralize alunos, treinos, agenda e evolução em uma experiência premium pronta para crescer.</p>
          <div class="final-cta__actions">
            ${button({ href: appConfig.ctaUrl, label: "Começar agora", icon: "arrow-right" })}
            ${button({ href: appConfig.learnUrl, label: "Conhecer recursos", variant: "light", icon: "list-checks" })}
          </div>
        </div>

        <div class="final-cta__phones" aria-hidden="true">
          ${phoneMockup({ image: screenshots.treinos, alt: "", size: "sm", rotate: "-8deg", className: "final-phone final-phone--one" })}
          ${phoneMockup({ image: screenshots.dashboard, alt: "", size: "md", className: "final-phone final-phone--two" })}
          ${phoneMockup({ image: screenshots.aluno, alt: "", size: "sm", rotate: "8deg", className: "final-phone final-phone--three" })}
        </div>
      </div>
    </section>
  `;
}

export function LandingFooter() {
  return `
    <footer class="landing-footer">
      <div>
        <img src="./assets/brand/logotipo-principal.png" alt="DragonCorp" width="178" height="40">
        <p>© ${appConfig.currentYear} ${appConfig.appName}.</p>
      </div>
      <nav aria-label="Links do rodape">
        <a href="#home">Produto</a>
        <a href="#recursos">Recursos</a>
        <a href="#comece-agora">Planos</a>
        <a href="#duvidas">Suporte</a>
        <a href="#">Privacidade</a>
        <a href="#">Termos</a>
      </nav>
    </footer>
  `;
}
