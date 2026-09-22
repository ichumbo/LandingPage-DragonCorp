export function phoneMockup({
  image,
  alt = "",
  size = "md",
  rotate = "0deg",
  className = "",
  loading = "lazy",
}) {
  return `
    <figure class="phone phone--${size} ${className}" style="--phone-rotate: ${rotate};">
      <span class="phone__side phone__side--left" aria-hidden="true"></span>
      <span class="phone__side phone__side--right" aria-hidden="true"></span>
      <span class="phone__island" aria-hidden="true"></span>
      <span class="phone__speaker" aria-hidden="true"></span>
      <img class="phone__screen" src="${image}" alt="${alt}" width="430" height="932" loading="${loading}" decoding="async">
    </figure>
  `;
}
