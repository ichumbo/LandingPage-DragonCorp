import {
  FAQSection,
  FeaturesSection,
  FinalCTA,
  HeroSection,
  HowSection,
  LandingFooter,
  LandingHeader,
  Marquee,
  PlansSection,
  ProblemSection,
  ResultsSection,
  TestimonialsSection,
} from "../components/sections.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${LandingHeader()}
  <main>
    ${HeroSection()}
    ${Marquee()}
    ${ProblemSection()}
    ${FeaturesSection()}
    ${HowSection()}
    ${ResultsSection()}
    ${TestimonialsSection()}
    ${PlansSection()}
    ${FAQSection()}
    ${FinalCTA()}
  </main>
  ${LandingFooter()}
`;

// Marca o document como "com JS" para que os estados iniciais
// (revelação de elementos) só existam quando houver o que animar.
document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktop = () => window.matchMedia("(min-width: 1081px)").matches;

/* ---------- header, barra de progresso e parallax ---------- */

const header = document.querySelector("[data-header]");
const progress = document.querySelector("[data-progress]");
const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;

function updateOnScroll() {
  ticking = false;
  const y = window.scrollY;

  header?.classList.toggle("is-scrolled", y > 8);

  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;

  if (!reducedMotion && isDesktop() && y < window.innerHeight * 1.5) {
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translateY(${(y * speed).toFixed(1)}px)`;
    });
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateOnScroll);
    }
  },
  { passive: true },
);
updateOnScroll();

/* ---------- revelação no scroll (fade + máscara de título) ---------- */

const revealEls = document.querySelectorAll("[data-reveal], [data-mask]");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-in"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

/* ---------- contadores animados ---------- */

function formatValue(value, decimals) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function setCountFinal(el) {
  const to = parseFloat(el.dataset.to || "0");
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  el.textContent = `${el.dataset.prefix || ""}${formatValue(to, decimals)}${el.dataset.suffix || ""}`;
}

function countUp(el) {
  const to = parseFloat(el.dataset.to || "0");
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();

  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${prefix}${formatValue(to * eased, decimals)}${suffix}`;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const countEls = document.querySelectorAll("[data-count]");
if (reducedMotion || !("IntersectionObserver" in window)) {
  countEls.forEach(setCountFinal);
} else {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  countEls.forEach((el) => countObserver.observe(el));
}

/* ---------- barras de progresso (seção resultados) ---------- */

const bars = document.querySelectorAll("[data-bar]");
if (reducedMotion || !("IntersectionObserver" in window)) {
  bars.forEach((bar) => (bar.style.width = `${bar.dataset.bar}%`));
} else {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.bar}%`;
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  bars.forEach((bar) => barObserver.observe(bar));
}

/* ---------- "como funciona": a tela do celular troca com o scroll ---------- */

const phone = document.querySelector("[data-phone]");
const howSteps = document.querySelectorAll("[data-step]");

if (phone && howSteps.length && "IntersectionObserver" in window) {
  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) phone.dataset.active = entry.target.dataset.screen;
      });
    },
    { rootMargin: "-44% 0px -44% 0px", threshold: 0 },
  );
  howSteps.forEach((step) => stepObserver.observe(step));
}

/* ---------- scrollspy (link ativo do menu conforme a seção) ---------- */

const spyLinks = [...document.querySelectorAll("[data-spy]")];
if (spyLinks.length && "IntersectionObserver" in window) {
  const spySections = spyLinks.map((link) => document.getElementById(link.dataset.spy)).filter(Boolean);
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spyLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.spy === entry.target.id));
        }
      });
    },
    { rootMargin: "-38% 0px -55% 0px", threshold: 0 },
  );
  spySections.forEach((section) => spyObserver.observe(section));
}

/* ---------- menu mobile ---------- */

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function closeMobileMenu() {
  mobileNav?.classList.remove("is-open");
  menuToggle?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileNav?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", () => {
  const open = mobileNav?.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(Boolean(open)));
  mobileNav?.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

/* ---------- acordeão do FAQ ---------- */

document.querySelectorAll("[data-accordion] .accordion__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion__item");
    const panel = item?.querySelector(".accordion__panel");
    const open = item?.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(Boolean(open)));
    panel?.setAttribute("aria-hidden", String(!open));
  });
});

/* ---------- ícones (lucide) ---------- */

function renderIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

renderIcons();
window.addEventListener("load", renderIcons, { once: true });
