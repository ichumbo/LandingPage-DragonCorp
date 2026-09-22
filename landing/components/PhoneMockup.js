export function PhoneMockup({ screen, className = "" }) {
  return `
    <div class="phone ${className}" aria-hidden="true">
      <div class="phone__screen">
        <img src="${screen}" alt="">
      </div>
    </div>`;
}
