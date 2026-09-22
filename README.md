# DragonCorp — Landing Page

Site institucional focado em **conversão por assinatura** para personal trainers:
baixar o aplicativo (App Store / Google Play) + assinar o plano.

## Estrutura

```
landing/
├── index.html            # meta tags, SEO, fontes e scripts
├── utils/config.js       # ← EDITE AQUI: textos, preços, links e métricas
├── components/
│   ├── sections.js       # todas as seções da página
│   ├── StoreBadges.js    # botões App Store / Google Play
│   └── PhoneMockup.js    # moldura do celular
├── scripts/main.js       # efeitos de scroll (reveals, contadores, sticky, scrollspy)
├── styles/               # base / componentes / seções / responsivo
└── assets/               # marca (logo, foto) e screenshots do app
```

## Rodando localmente

Não há build — é HTML/CSS/JS puro. Basta servir a pasta `landing/`:

```bash
cd landing
python3 -m http.server 4173
# abra http://localhost:4173
```

## O que editar no dia a dia (tudo em `landing/utils/config.js`)

| O quê | Onde no arquivo |
| --- | --- |
| Links reais da App Store e do Google Play | `stores.appStore` / `stores.googlePlay` |
| Link de checkout da assinatura (se fora do app) | `signupUrl` |
| Preços dos planos | `plans.items[].price` |
| Textos do hero, problemas, recursos, FAQ, depoimentos | seções correspondentes |
| Métricas com contador animado | `heroStats` e `results.stats` |
| E-mail e redes sociais do rodapé | `email` e `LandingFooter` |

> Os preços e métricas atuais são **exemplos** — ajuste para os números reais
> do seu negócio antes de publicar.

## Efeitos de scroll

Todos os efeitos respeitam `prefers-reduced-motion` e exigem JavaScript:

- Título revelado linha a linha (máscara) e fade-up com stagger nas seções
- Barra fina de progresso de rolagem no topo (vermelho)
- Contadores animados (métricas) e barras de progresso (resultados)
- Marquee contínuo com os termos do produto
- Seção “Como funciona”: o celular fica **fixo** e troca de tela conforme
  você rola os passos (sticky + IntersectionObserver)
- Parallax sutil na foto do hero (apenas em desktop)
- Menu com item ativo conforme a seção visível (scrollspy)

## Trocando os screenshots do app

Veja `landing/README-SCREENSHOTS.md` — mantenha os nomes dos arquivos.
