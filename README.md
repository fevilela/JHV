# JHV

## Publicar no GitHub Pages

Este projeto é React + Vite e o `index.html` de entrada fica em `client/index.html`.
Para o GitHub Pages, o arquivo publicado é gerado automaticamente no build.

### Passos

1. Faça push da branch `main`.
2. No GitHub, vá em **Settings → Pages** e selecione **Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` fará:
   - `npm ci`
   - `npm run build:pages`
   - upload da pasta `dist/pages`

No fim do build, o Pages terá um `index.html` dentro do artefato publicado.

### Build local para conferir

```bash
npm ci
npm run build:pages
```

Depois disso, confira que existe `dist/pages/index.html`.
