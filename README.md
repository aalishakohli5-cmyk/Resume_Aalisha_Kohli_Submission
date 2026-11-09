# Aalisha Kohli — Portfolio

A personal portfolio introducing Aalisha's studies, projects, case competitions, skills, achievements, and contact details. The site is built with plain HTML, CSS, and JavaScript, with no build step or framework required.

## Pages and sections

### Introduction — `index.html`

The introduction page presents Aalisha, her focus on computer science, AI, and digital business, and her illustrated portrait. **Explore my work** opens the full portfolio; **View resume** opens the CV PDF.

### Portfolio — `portfolio.html`

The portfolio is a single long page. Its sticky navigation links jump directly to each section:

1. **About me** — Aalisha's background, studies, and interests.
2. **Education** — her BBA in Digital Business & Entrepreneurship at IIM Bangalore and B.Tech in Computer Science & Engineering (AI/ML) at JK Lakshmipat University.
3. **Case competitions** — Green Energy GCC Consulting, DigiYatra Commercial Expansion, and The Hype Economy. Each entry includes a link to its case deck PDF.
4. **Technical projects** — Vcare.life, PRAMAN, ANĒK, TwentyFour, and the JKLU Resource Archive, with project links and technologies where documented.
5. **Skills** — languages and web, frameworks and backend, data and deployment, security and AI, business and analytics, and product and strategy.
6. **Certifications & achievements** — NYC CodeQuest, the Agentic AI workshop, and the cybersecurity and OSINT certificate, with credential or PDF links.
7. **Contact** — email and phone links.

The **Home** tab returns to the photo introduction page. The footer also includes a back-to-top link.

## Design decisions

- **A warm editorial palette:** coral, yellow, cream, and blue accents make the portfolio feel personal and approachable while giving important links a clear visual role.
- **Soft glass surfaces:** translucent cards, blurred backgrounds, bright edge highlights, and gentle shadows create depth without hiding the content.
- **A long-page layout:** keeping portfolio material together lets visitors browse continuously, while the sticky section navigation provides direct access to topics.
- **Offset cards and section widths:** varied alignment gives the long page a visual rhythm instead of a repeated stack of identical full-width blocks.
- **Clear scan patterns:** section labels, prominent headings, short metadata lines, bullets, and accent bars help readers find details quickly.
- **Small interactions:** cards lift slightly on hover and reveal as visitors scroll. The portrait uses a restrained pointer response on supported screens. Reduced-motion preferences are respected.
- **Responsive layout:** navigation and card grids adapt for narrower screens.

## Run locally

Open `index.html` in a browser, or use a local static server such as the VS Code Live Server extension. With Python installed, run this from the project folder:

```bash
python3 -m http.server 5500
```

Then open <http://localhost:5500>.

## Main files

- `index.html` — photo introduction page
- `portfolio.html` — one-page portfolio content
- `styles.css` — shared portfolio layout, colors, cards, and responsive styles
- `home.css` — introduction page styling
- `interactions.js` — portrait response and scroll/card interactions
- `profile-portrait.png` — portrait image used on the introduction page
- `Aalisha_Kohli_CV_Final.pdf` — downloadable/viewable CV
- Other PDF files — case decks and certificates linked from the portfolio
