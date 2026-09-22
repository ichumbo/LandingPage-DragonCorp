import {
  BenefitsGrid,
  FAQSection,
  FeatureShowcase,
  FinalCTA,
  HeroSection,
  HowItWorks,
  IntroSection,
  LandingFooter,
  LandingHeader,
  PersonalStudentSection,
  ProgressSection,
} from "../components/sections.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${LandingHeader()}
  <main>
    ${HeroSection()}
    ${IntroSection()}
    ${FeatureShowcase()}
    ${HowItWorks()}
    ${BenefitsGrid()}
    ${ProgressSection()}
    ${PersonalStudentSection()}
    ${FAQSection()}
    ${FinalCTA()}
  </main>
  ${LandingFooter()}
`;

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 10);
}

function closeMobileMenu() {
  mobileNav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.querySelectorAll("[data-accordion] .accordion__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion__item");
    const panel = item?.querySelector(".accordion__panel");
    const expanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!expanded));
    panel?.setAttribute("aria-hidden", String(expanded));
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px 0px" },
  );

  document.querySelectorAll(".reveal:not(.reveal--visible)").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("reveal--visible"));
}

function renderIcons() {
  if (!window.lucide) return;

  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8,
    },
  });
}

renderIcons();
window.addEventListener("load", renderIcons, { once: true });
