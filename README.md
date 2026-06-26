# Стратоплан — Slidev-дека

Шаблон презентации в том же стиле, что и `podlodka`: тёмная/светлая тема «плам + коралл»,
страницы разнесены по файлам, готовый деплой на GitHub Pages.

## Запуск

```bash
npm install
npm run dev     # откроет http://localhost:3030
```

Сборка и экспорт:

```bash
npm run build   # статика в dist/
npm run export  # PDF
```

В режиме показа: `p` — заметки спикера (presenter), `o` — обзор слайдов, `d` — тёмная/светлая тема.

## Структура

```
slides.md              точка входа: титул + порядок страниц (src-импорты)
pages/                 по файлу на смысловой блок
  00-agenda.md         оглавление (.road)
  01-section.md        раздел: section-разделитель, тезис, .flow, .concl
  02-components.md     витрина блоков темы (.tiers, .ba, чипы, таблица)
  99-outro.md          контакты
style.css              тема: палитра, типографика, все компоненты
components/             Vue-компоненты (Qr, CopyBtn)
public/                статика (обложки, QR — public/qr/*.png)
scripts/               воркэраунды для деплоя на GitHub Pages
.github/workflows/      авто-деплой на push в main
```

Чтобы добавить слайд-блок: создайте `pages/NN-name.md` и пропишите его в `slides.md`:

```md
---
src: ./pages/NN-name.md
---
```

## Шпаргалка по стилю (классы из `style.css`)

- Акценты текста: `.accent` (коралл), `.accent-2` (плам), `.muted` (приглушённый).
- Разделитель главы: слайд с `layout: section`.
- `.road` — оглавление-«дорожка» из карточек с номерами.
- `.flow` — горизонтальная цепочка шагов со стрелками.
- `.tiers` / `.tier--1..3` — уровни-полоски с растущей заливкой.
- `.ba` + `.before` / `.after` / `.trow` — блок «было / стало».
- `.concl` — выделенная плашка с выводом слайда.
- `.chip` / `.chip.on`, `.tag`, `.list-pill` — чипы и пилюли.
- `.cover-deck` (+ `.eyebrow`, `.cover-title`, `.cover-rule`, `.cover-speaker`) — титульный слайд.
- `<Qr src="имя" />` — QR из `public/qr/имя.png`; `<CopyBtn text="..." />` — кнопка копирования.

Полный набор готовых компонентов (`.struct-grid`, `.pd-file`, `.ms-grid`, `.chats`,
`.step-kicker` и др.) смотрите в `style.css` и в исходной деке `../podlodka/pages`.

## Деплой на GitHub Pages

`.github/workflows/deploy.yml` собирает деку на каждый push в `main` и публикует в Pages.
`base` подставляется из имени репозитория автоматически; скрипты в `scripts/` чинят
навигацию и refresh на project-сайтах. В настройках репозитория включите Pages → Source: GitHub Actions.
