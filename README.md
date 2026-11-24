# jainy, amo você ♥

> Um site estático de declaração de amor, redesenhado em 2026 com animações, gradientes e um clima moderno e romântico.

🔗 **Veja no ar:** [https://bythiago.github.io/jainy/](https://bythiago.github.io/jainy/)

---

## ✨ Sobre o projeto

Uma página em rolagem com quatro seções que contam uma pequena história de amor para a Jainy. Tudo roda no navegador, sem build, framework ou dependências de runtime — apenas HTML, CSS e JavaScript puros.

O visual usa uma paleta *midnight romance* (vinho profundo, rosa e dourado), com fundo animado, textos em gradiente, revelações ao rolar e corações que respondem ao clique.

## 💕 Recursos

- **Fundo animado** — blobs de gradiente em movimento, estrelas cintilantes e corações flutuando.
- **Textos em gradiente** com brilho pulsante e tipografia script no ano `2026`.
- **Reveal on scroll** — cada mensagem aparece suavemente ao entrar na tela.
- **Coração interativo** — clique (ou `Enter`/`Espaço`) em um ♥ para soltar uma explosão de corações.
- **Seção finale 2026** — encerramento com desejo de ano novo e rodapé personalizado.
- **Responsivo** — layout adaptado para celulares e telas grandes.
- **Acessível** — respeita `prefers-reduced-motion` e permite navegação por teclado.

## 📁 Estrutura

```
.
├── index.html              # Marcação das quatro seções e metadados
└── src/
    └── assets/
        ├── base.css        # Reset, variáveis de tema e fontes
        ├── main.css        # Layout, animações e responsividade
        └── main.js         # Estrelas, corações, reveal e interações
```

## 🚀 Rodando localmente

Não há etapa de build. Basta servir a pasta raiz com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8000

# ou, se preferir Node
npx serve .
```

Depois abra [http://localhost:8000](http://localhost:8000).

> Também é possível abrir o `index.html` diretamente no navegador, mas usar um servidor local garante o carregamento correto dos CSS/JS e das fontes do Google Fonts.

## 🎨 Personalizando

| O que mudar | Onde editar |
| --- | --- |
| Textos das mensagens | `index.html` (elementos com as classes `.love`, `.subtitle` e `.eyebrow`) |
| Cores do tema | Variáveis no topo de `src/assets/base.css` (`--rose`, `--pink`, `--gold`, `--night`, …) |
| Velocidade/quantidade de animações | `src/assets/main.js` (contagem de estrelas, intervalo dos corações) e os `@keyframes` em `main.css` |
| Fontes | Link do Google Fonts no `<head>` do `index.html` e variáveis `--font-*` em `base.css` |

## 🌐 Deploy

O site é publicado automaticamente pelo **GitHub Pages** a partir da branch **`master`**. A branch `main` contém uma versão antiga e não é a usada no ar.

Ao fazer push em `master`, o Pages republica o conteúdo em poucos minutos.

## 🛠️ Tecnologias

HTML5 · CSS3 (animações, gradientes, `backdrop-filter`) · JavaScript vanilla (`IntersectionObserver`) · Google Fonts

---

Feito com ♥ para a Jainy.
