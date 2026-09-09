# Quiet Current

Oficjalna strona Quiet Current Games.

Strona: [https://specx3d.github.io/](https://specx3d.github.io/)

## Uruchomienie lokalne

W folderze strony uruchom:

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem wyświetlonym w terminalu. Panel treści Keystatic działa lokalnie pod adresem `/keystatic`.

## Publikacja

Publikacja jest bezpłatna i działa przez GitHub Pages. Workflow w `.github/workflows/deploy-pages.yml` automatycznie:

1. instaluje zależności,
2. buduje statyczną wersję strony,
3. publikuje folder `dist` na GitHub Pages.

Każdy push do brancha `main` automatycznie publikuje nową wersję pod adresem [https://specx3d.github.io/](https://specx3d.github.io/). Nie trzeba ręcznie przesyłać plików.

## Treści

Gry i aktualności są przechowywane w `src/content`. Lokalny panel Keystatic ułatwia ich edycję, a zapisane pliki można normalnie commitować i wysyłać do `main`.
