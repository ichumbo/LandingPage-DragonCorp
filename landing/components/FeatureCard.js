export function featureCard({ title, text, icon }) {
  return `
    <article class="feature-card reveal">
      <span class="feature-card__icon" aria-hidden="true">
        <i data-lucide="${icon}"></i>
      </span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
