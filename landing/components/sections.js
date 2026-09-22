import { appConfig, screenshots } from "../utils/config.js";
import { StoreBadges } from "./StoreBadges.js";
import { PhoneMockup } from "./PhoneMockup.js";

/* ============================ Header ============================ */

export function LandingHeader() {
  return `
    <a class="progress" href="#home" data-progress aria-hidden="true"></a>
    <header class="nav" data-header>
      <div class="container nav__inner">
        <a class="nav__brand" href="#home" aria-label="DragonCorp — início">
          <img src="./assets/brand/logotipo-white.png" alt="DragonCorp" width="168" height="30">
        </a>
        <nav class="nav__links" aria-label="Navegação principal">
          ${appConfig.nav
            .map((item) => `<a href="${item.href}" data-spy="${item.href.slice(1)}">${item.label}</a>`)
            .join("")}
        </nav>
        <div class="nav__actions">
          <a class="btn btn--primary btn--sm" href="#planos">Começar grátis</a>
          <button class="nav__toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menu">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="menu" data-mobile-nav id="mobile-nav" aria-hidden="true">
      <nav class="menu__links" aria-label="Navegação móvel">
        ${appConfig.nav
          .map((item, i) => `<a href="${item.href}" style="--md:${60 + i * 60}ms">${item.label}</a>`)
          .join("")}
      </nav>
      <div class="menu__foot">${StoreBadges()}</div>
    </div>`;
}

/* ============================= Hero ============================= */

export function HeroSection() {
  const { hero, heroStats } = appConfig;
  return `
    <section class="hero" id="home">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="kicker" data-reveal>${hero.kicker}</p>
          <h1 class="hero__title" data-mask>
            ${hero.title
              .map(
                (line, i) =>
                  `<span class="mask-line"><span${i === hero.title.length - 1 ? ' class="hero__title-red"' : ""}>${line}</span></span>`,
              )
              .join("")}
          </h1>
          <p class="hero__sub" data-reveal style="--rd:220ms">${hero.sub}</p>
          <div class="hero__cta" data-reveal style="--rd:340ms">
            ${StoreBadges()}
            <a class="link-arrow" href="#planos">Ver planos <span aria-hidden="true">→</span></a>
          </div>
          <p class="hero__proof" data-reveal style="--rd:440ms">
            ${hero.proof.map((item, i) => (i === 0 ? `<span>${item}</span>` : `<i aria-hidden="true"></i><span>${item}</span>`)).join("")}
          </p>
        </div>
        <div class="hero__media" data-reveal style="--rd:160ms">
          <span class="hero__watermark" aria-hidden="true">FORÇA</span>
          <img
            class="hero__photo"
            data-parallax="0.07"
            src="./assets/brand/person.png"
            alt="Personal trainer acompanhando o aluno durante o treino"
            width="514"
            height="485"
          >
          <div class="hero__phone">${PhoneMockup({ screen: screenshots.dashboard })}</div>
          <div class="hero__chip chip">
            <span class="chip__dot" aria-hidden="true"></span>${hero.chip}
          </div>
        </div>
      </div>
      <div class="container hero__stats">
        ${heroStats
          .map(
            (s, i) => `
            <div class="stat" data-reveal style="--rd:${i * 90}ms">
              <strong>
                <span data-count data-to="${s.value}" data-decimals="${s.decimals || 0}" data-prefix="${s.prefix || ""}" data-suffix="${s.suffix || ""}">0</span>
              </strong>
              <span class="stat__label">${s.label}</span>
            </div>`,
          )
          .join("")}
      </div>
    </section>`;
}

/* =========================== Marquee ============================ */

export function Marquee() {
  const row = appConfig.marquee
    .map((word, i) => `<span class="marquee__item${i % 3 === 0 ? " marquee__item--solid" : ""}">${word}</span><span class="marquee__dot" aria-hidden="true">✦</span>`)
    .join("");
  return `
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <div class="marquee__group">${row}</div>
        <div class="marquee__group">${row}</div>
      </div>
    </div>`;
}

/* ========================== Problema ============================ */

export function ProblemSection() {
  const { problem } = appConfig;
  return `
    <section class="section problem" id="problema">
      <div class="container">
        <div class="section__head">
          <p class="kicker" data-reveal>${problem.kicker}</p>
          <h2 class="section__title" data-mask>
            ${problem.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
          </h2>
          <p class="section__lead" data-reveal style="--rd:180ms">${problem.lead}</p>
        </div>
        <div class="problem__grid">
          ${problem.pains
            .map(
              (pain, i) => `
            <article class="card pain" data-reveal style="--rd:${i * 110}ms">
              <span class="pain__num">${pain.num}</span>
              <h3>${pain.title}</h3>
              <p>${pain.text}</p>
            </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

/* ========================== Recursos ============================ */

export function FeaturesSection() {
  const { features } = appConfig;
  return `
    <section class="section features" id="recursos">
      <div class="container">
        <div class="section__head section__head--split">
          <div>
            <p class="kicker" data-reveal>${features.kicker}</p>
            <h2 class="section__title" data-mask>
              ${features.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
            </h2>
          </div>
          <p class="section__lead" data-reveal style="--rd:180ms">${features.lead}</p>
        </div>
        <div class="features__grid">
          ${features.cards
            .map(
              (card, i) => `
            <article class="card feature" data-reveal style="--rd:${(i % 3) * 100}ms">
              <div class="feature__icon"><i data-lucide="${card.icon}"></i></div>
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

/* ======================= Como funciona ========================== */

export function HowSection() {
  const { how } = appConfig;
  const screens = how.steps
    .map((step, i) => `<img data-screen="${step.screen}" src="${screenshots[step.screen]}" alt=""${i > 0 ? ' loading="lazy"' : ""}>`)
    .join("");
  return `
    <section class="section how" id="como-funciona">
      <div class="container how__grid">
        <div class="how__steps">
          <div class="section__head how__head">
            <p class="kicker" data-reveal>${how.kicker}</p>
            <h2 class="section__title" data-mask>
              ${how.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
            </h2>
          </div>
          ${how.steps
            .map(
              (step) => `
            <article class="how__step" data-step data-screen="${step.screen}" data-reveal>
              <span class="how__num">${step.number}</span>
              <div>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </div>
            </article>`,
            )
            .join("")}
        </div>
        <div class="how__visual">
          <div class="how__phone-wrap">
            <div class="phone how__phone" data-phone data-active="dashboard">
              <div class="phone__screen phone__screens">${screens}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

/* ========================= Resultados =========================== */

export function ResultsSection() {
  const { results } = appConfig;
  return `
    <section class="section results" id="resultados">
      <div class="container results__grid">
        <div class="results__copy">
          <p class="kicker" data-reveal>${results.kicker}</p>
          <h2 class="section__title" data-mask>
            ${results.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
          </h2>
          <p class="results__lead" data-reveal style="--rd:180ms">${results.lead}</p>
          <div class="results__stats">
            ${results.stats
              .map(
                (s, i) => `
              <div class="result-stat" data-reveal style="--rd:${i * 90}ms">
                <strong>
                  <span data-count data-to="${s.value}" data-decimals="0" data-prefix="${s.prefix || ""}" data-suffix="${s.suffix || ""}">0</span>
                </strong>
                <span>${s.label}</span>
                <div class="bar"><i data-bar="${s.level}"></i></div>
              </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="results__media" data-reveal style="--rd:200ms">
          ${PhoneMockup({ screen: screenshots.evolucao })}
          <span class="chip results__chip"><span class="chip__dot" aria-hidden="true"></span>${results.chip}</span>
        </div>
      </div>
    </section>`;
}

/* ======================== Depoimentos =========================== */

export function TestimonialsSection() {
  const { testimonials } = appConfig;
  const stars = `<div class="quote__stars" aria-label="Avaliação 5 de 5">
      ${'<i data-lucide="star"></i>'.repeat(5)}
    </div>`;
  return `
    <section class="section testimonials" id="depoimentos">
      <div class="container">
        <div class="section__head">
          <p class="kicker" data-reveal>${testimonials.kicker}</p>
          <h2 class="section__title" data-mask>
            ${testimonials.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
          </h2>
        </div>
        <div class="testimonials__grid">
          ${testimonials.items
            .map(
              (item, i) => `
            <article class="card quote" data-reveal style="--rd:${i * 110}ms">
              ${stars}
              <p class="quote__text">“${item.quote}”</p>
              <footer class="quote__author">
                <strong>${item.name}</strong>
                <span>${item.role}</span>
              </footer>
            </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

/* ========================= Assinatura =========================== */

export function PlansSection() {
  const { plans } = appConfig;
  return `
    <section class="section plans" id="planos">
      <div class="container">
        <div class="section__head section__head--center">
          <p class="kicker" data-reveal>${plans.kicker}</p>
          <h2 class="section__title" data-mask>
            ${plans.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
          </h2>
          <p class="section__lead section__lead--center" data-reveal style="--rd:180ms">${plans.lead}</p>
        </div>
        <div class="plans__grid">
          ${plans.items
            .map(
              (plan, i) => `
            <article class="plan${plan.popular ? " plan--popular" : ""}" data-reveal style="--rd:${i * 110}ms">
              ${plan.popular ? `<span class="plan__tag">Mais escolhido</span>` : ""}
              <h3>${plan.name}</h3>
              <p class="plan__price"><span>R$</span>${plan.price}<i>/mês</i></p>
              <p class="plan__tagline">${plan.tagline}</p>
              <ul class="plan__list">
                ${plan.features.map((f) => `<li><i data-lucide="check"></i>${f}</li>`).join("")}
              </ul>
              <a class="btn ${plan.popular ? "btn--primary" : "btn--ghost"} btn--block" href="${appConfig.signupUrl}">${plan.cta}</a>
            </article>`,
            )
            .join("")}
        </div>
        <p class="plans__note" data-reveal>${plans.note}</p>
      </div>
    </section>`;
}

/* ============================ FAQ =============================== */

export function FAQSection() {
  const { faq } = appConfig;
  return `
    <section class="section faq" id="duvidas">
      <div class="container faq__grid">
        <div class="faq__head">
          <p class="kicker" data-reveal>${faq.kicker}</p>
          <h2 class="section__title" data-mask>
            ${faq.title.map((line) => `<span class="mask-line"><span>${line}</span></span>`).join("")}
          </h2>
          <p class="faq__contact" data-reveal style="--rd:180ms">
            ${faq.contactLabel} <a href="mailto:${appConfig.email}">Fale com a gente</a>.
          </p>
        </div>
        <div class="faq__list" data-accordion data-reveal>
          ${faq.items
            .map(
              (item) => `
            <div class="accordion__item">
              <button class="accordion__trigger" aria-expanded="false">
                <span>${item.q}</span>
                <i data-lucide="plus"></i>
              </button>
              <div class="accordion__panel" aria-hidden="true">
                <div class="accordion__panel-inner"><p>${item.a}</p></div>
              </div>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

/* ========================== CTA final =========================== */

export function FinalCTA() {
  const { ctaFinal } = appConfig;
  return `
    <section class="section cta-final" id="comece">
      <div class="container cta-final__inner">
        <p class="kicker kicker--center" data-reveal>${ctaFinal.kicker}</p>
        <h2 class="cta-final__title" data-mask>
          ${ctaFinal.title
            .map(
              (line, i) =>
                `<span class="mask-line"><span${i === 1 ? ' class="cta-final__red"' : ""}>${line}</span></span>`,
            )
            .join("")}
        </h2>
        <p class="cta-final__sub" data-reveal style="--rd:220ms">${ctaFinal.sub}</p>
        <div class="cta-final__cta" data-reveal style="--rd:340ms">${StoreBadges({ size: "lg" })}</div>
        <a class="link-arrow" href="#planos" data-reveal style="--rd:440ms">Comparar planos <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

/* =========================== Footer ============================= */

export function LandingFooter() {
  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="./assets/brand/logotipo-white.png" alt="DragonCorp" width="168" height="30">
          <p>${appConfig.tagline}</p>
        </div>
        <nav class="footer__col" aria-label="Produto">
          <h4>Produto</h4>
          ${appConfig.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </nav>
        <nav class="footer__col" aria-label="App">
          <h4>App</h4>
          <a href="${appConfig.stores.appStore}">App Store</a>
          <a href="${appConfig.stores.googlePlay}">Google Play</a>
          <a href="#planos">Planos e assinatura</a>
        </nav>
        <div class="footer__col">
          <h4>Contato</h4>
          <a href="mailto:${appConfig.email}">${appConfig.email}</a>
          <a href="#" rel="noopener">Instagram</a>
          <a href="#" rel="noopener">YouTube</a>
        </div>
      </div>
      <div class="container footer__bottom">
        <span>© ${appConfig.currentYear} DragonCorp. Todos os direitos reservados.</span>
        <span class="footer__legal"><a href="#">Termos</a> · <a href="#">Privacidade</a></span>
      </div>
    </footer>`;
}
