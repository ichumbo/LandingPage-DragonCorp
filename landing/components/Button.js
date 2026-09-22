export function button({ href, label, variant = "primary", icon = "arrow-right", className = "" }) {
  return `
    <a class="btn btn--${variant} ${className}" href="${href}">
      <span>${label}</span>
      <i data-lucide="${icon}" aria-hidden="true"></i>
    </a>
  `;
}
