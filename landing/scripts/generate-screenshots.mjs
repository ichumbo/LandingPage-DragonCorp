import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = join(root, "assets", "screenshots");
const tmpDir = join(outDir, "_generated");

mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const red = "#f70707";
const ink = "#121212";
const soft = "#f5f5f2";
const line = "#e7e7e1";
const muted = "#73736c";

const screens = [
  {
    file: "screen-dashboard",
    title: "Dashboard",
    eyebrow: "Resumo do dia",
    metric: "18",
    label: "treinos ativos",
    rows: ["Ana Lima", "Bruno Rocha", "Carla Dias"],
    chart: [72, 92, 62, 118, 84, 142, 106],
  },
  {
    file: "screen-alunos",
    title: "Alunos",
    eyebrow: "Carteira ativa",
    metric: "42",
    label: "alunos",
    rows: ["Marina Costa", "Felipe Alves", "Joao Pedro"],
    chart: [84, 54, 112, 76, 132, 96, 148],
  },
  {
    file: "screen-treinos",
    title: "Treino A",
    eyebrow: "Peito e triceps",
    metric: "07",
    label: "exercicios",
    rows: ["Supino reto", "Crucifixo", "Triceps corda"],
    chart: [48, 88, 76, 114, 88, 132, 118],
  },
  {
    file: "screen-avaliacao",
    title: "Avaliacao",
    eyebrow: "Medidas recentes",
    metric: "12.8%",
    label: "gordura",
    rows: ["Peso 78.2 kg", "Torax 102 cm", "Cintura 78 cm"],
    chart: [128, 116, 102, 94, 84, 72, 66],
  },
  {
    file: "screen-evolucao",
    title: "Evolucao",
    eyebrow: "Ultimos 90 dias",
    metric: "+12%",
    label: "progresso",
    rows: ["Carga média +8 kg", "Frequência 92%", "18 treinos concluídos"],
    chart: [136, 118, 126, 96, 104, 74, 58],
  },
  {
    file: "screen-agenda",
    title: "Agenda",
    eyebrow: "Semana",
    metric: "09",
    label: "horarios",
    rows: ["08:00 Avaliacao", "10:30 Treino guiado", "17:00 Retorno"],
    chart: [92, 92, 92, 132, 132, 72, 72],
  },
  {
    file: "screen-aluno",
    title: "Meu treino",
    eyebrow: "Area do aluno",
    metric: "A",
    label: "treino de hoje",
    rows: ["Agachamento", "Leg press", "Panturrilha"],
    chart: [132, 102, 112, 82, 92, 64, 76],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chartPath(values) {
  const step = 46;
  const startX = 58;
  const baseY = 836;
  return values
    .map((value, index) => `${index === 0 ? "M" : "L"} ${startX + index * step} ${baseY - value * 0.62}`)
    .join(" ");
}

function rowMarkup(rows) {
  return rows
    .map((row, index) => {
      const y = 472 + index * 72;
      return `
        <g>
          <rect x="38" y="${y}" width="354" height="52" rx="18" fill="#ffffff" stroke="${line}" />
          <circle cx="70" cy="${y + 26}" r="14" fill="${index === 0 ? red : "#171717"}" />
          <text x="96" y="${y + 32}" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="${ink}">${escapeHtml(row)}</text>
          <text x="334" y="${y + 32}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="800" fill="${red}">${index + 1}x</text>
        </g>
      `;
    })
    .join("");
}

function makeSvg(screen) {
  const bars = screen.chart
    .map((value, index) => {
      const x = 62 + index * 45;
      const height = Math.max(32, Math.round(value * 0.72));
      const y = 760 - height;
      return `<rect x="${x}" y="${y}" width="22" height="${height}" rx="11" fill="${index % 2 ? "#202020" : red}" opacity="${index % 2 ? "0.92" : "1"}" />`;
    })
    .join("");

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="430" height="932" viewBox="0 0 430 932">
  <rect width="430" height="932" rx="0" fill="${soft}" />
  <rect x="0" y="0" width="430" height="176" fill="#ffffff" />
  <circle cx="374" cy="76" r="24" fill="${red}" />
  <circle cx="374" cy="76" r="8" fill="#ffffff" />
  <text x="38" y="74" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="${red}" letter-spacing="1.8">${escapeHtml(screen.eyebrow.toUpperCase())}</text>
  <text x="38" y="125" font-family="Inter, Arial, sans-serif" font-size="43" font-weight="900" fill="${ink}">${escapeHtml(screen.title)}</text>

  <rect x="38" y="205" width="354" height="190" rx="32" fill="${ink}" />
  <text x="68" y="269" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="900" fill="#ffffff">${escapeHtml(screen.metric)}</text>
  <text x="72" y="313" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#ffffff">${escapeHtml(screen.label)}</text>
  <rect x="68" y="343" width="112" height="12" rx="6" fill="${red}" />
  <rect x="196" y="343" width="68" height="12" rx="6" fill="#ffffff" opacity="0.34" />
  <rect x="276" y="343" width="46" height="12" rx="6" fill="#ffffff" opacity="0.22" />

  <rect x="38" y="425" width="354" height="201" rx="28" fill="#ffffff" stroke="${line}" />
  <text x="62" y="462" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="900" fill="${muted}">ATIVIDADES</text>
  ${rowMarkup(screen.rows)}

  <rect x="38" y="662" width="354" height="206" rx="30" fill="#ffffff" stroke="${line}" />
  <text x="62" y="706" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="900" fill="${muted}">EVOLUCAO</text>
  <path d="${chartPath(screen.chart)}" fill="none" stroke="${line}" stroke-width="3" />
  <path d="${chartPath(screen.chart)}" fill="none" stroke="${red}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
  ${bars}
  <rect x="60" y="816" width="128" height="12" rx="6" fill="${ink}" opacity="0.12" />
  <rect x="60" y="840" width="220" height="12" rx="6" fill="${ink}" opacity="0.08" />
</svg>`;
}

for (const screen of screens) {
  const svgPath = join(tmpDir, `${screen.file}.svg`);
  const pngPath = join(tmpDir, `${screen.file}.png`);
  const webpPath = join(outDir, `${screen.file}.webp`);
  writeFileSync(svgPath, makeSvg(screen));
  execFileSync("sips", ["-s", "format", "png", svgPath, "--out", pngPath], { stdio: "ignore" });
  execFileSync("cwebp", ["-preset", "drawing", "-q", "88", "-quiet", pngPath, "-o", webpPath]);
}

console.log(`Generated ${screens.length} screenshot placeholders in ${outDir}`);
