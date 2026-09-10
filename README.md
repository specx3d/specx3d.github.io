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

### Dodawanie aktualności bez edycji kodu

1. Kliknij dwukrotnie `DODAJ_NEWS.bat`.
2. W otwartym panelu wybierz **News / Dev Log**, a następnie **Create**.
3. Uzupełnij tytuł, datę, krótki opis i treść. Opcjonalnie dodaj zdjęcie oraz tagi.
4. Kliknij **Create** lub **Save**.
5. Zamknij okno serwera i kliknij dwukrotnie `OPUBLIKUJ_STRONE.bat`.

Publikator sprawdzi stronę, zapisze nowe treści w repozytorium i wyśle je do `main`. GitHub Pages opublikuje nową wersję automatycznie.
