# Screenshots da landing

Como não havia um sistema local executável neste diretório para capturar telas reais, a landing usa placeholders profissionais em WebP.

Substitua os arquivos abaixo mantendo os mesmos nomes para trocar as imagens sem alterar código.

## Especificacao recomendada

- Formato: WebP ou PNG exportado e renomeado para WebP após conversão.
- Dimensoes: 430 x 932 px.
- Proporção: 430:932, equivalente a tela vertical de smartphone.
- Area segura: evite textos importantes nos primeiros 72 px do topo, porque o mockup possui dynamic island.
- Peso sugerido: até 180 KB por imagem.
- Qualidade visual: use screenshots reais do aplicativo, sem moldura de aparelho. O componente `PhoneMockup` cria a moldura automaticamente.

## Arquivos

- `screen-dashboard.webp`: usado no hero, CTA final e painel "Para o Personal".
- `screen-alunos.webp`: usado na transicao visual e no card "Gerencie seus alunos".
- `screen-treinos.webp`: usado no card "Monte treinos em minutos" e CTA final.
- `screen-avaliacao.webp`: usado na seção "Como funciona".
- `screen-evolucao.webp`: usado no card "Acompanhe cada evolução" e na seção de resultados.
- `screen-agenda.webp`: usado no FAQ e como tela secundaria de agenda.
- `screen-aluno.webp`: usado na seção "Para o Aluno" e CTA final.

## Como regenerar placeholders

Execute na raiz do projeto:

```bash
node landing/scripts/generate-screenshots.mjs
```

O script gera os WebP em `landing/assets/screenshots/` e guarda os SVG/PNG intermediários em `landing/assets/screenshots/_generated/`.
