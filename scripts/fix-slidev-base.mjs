// Воркэраунд бага Slidev 52.14+ при деплое с непустым --base (напр. на GitHub Pages).
//
// Начиная с 52.14 функция getSlidePath() в @slidev/client возвращает путь УЖЕ С
// префиксом базы: `${import.meta.env.BASE_URL}${no}` (например "/podlodka-skills-deck/2").
// Этот путь отдаётся в router.push({ path }) и в openSlideInNewTab(); vue-router
// добавляет базу ПОВТОРНО → получается "/podlodka-skills-deck/podlodka-skills-deck/2",
// который не матчит маршрут слайда (/:no) → Slidev показывает "404 Page ... not found"
// при листании. Прямые ссылки на слайд работают (там база отрезается при чтении URL),
// ломается только клиентская навигация. Локально база "/" — поэтому проблема не видна.
//
// До 52.14 (и в этом фиксе) getSlidePath возвращает base-RELATIVE путь "/${no}", который
// ожидают все вызывающие (router.push сам добавит базу; openSlideInNewTab делает
// pathPrefix + path.slice(1)). Здесь мы возвращаем эту строку к корректному виду.
//
// Запускается из CI ПОСЛЕ установки зависимостей и ПЕРЕД сборкой (см. deploy.yml).
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const BUGGY = 'return `${import.meta.env.BASE_URL}${path}`'
const FIXED = 'return `/${path}`'

const REL = 'node_modules/@slidev/client/logic/slides.ts'
const candidates = []

// npm/yarn-раскладка (хойстинг): @slidev/client лежит прямо в node_modules
candidates.push(REL)

// pnpm-раскладка: каталоги @slidev+client@* содержат хэши, поэтому перебираем все
const pnpmDir = 'node_modules/.pnpm'
if (existsSync(pnpmDir)) {
  for (const name of readdirSync(pnpmDir)) {
    if (name.startsWith('@slidev+client@')) candidates.push(join(pnpmDir, name, REL))
  }
}

const files = candidates.filter(existsSync)

if (files.length === 0) {
  console.error('[fix-slidev-base] не найден @slidev/client/logic/slides.ts — структура node_modules изменилась?')
  process.exit(1)
}

let patched = 0
let alreadyOk = 0
for (const file of files) {
  const src = readFileSync(file, 'utf8')
  if (src.includes(FIXED) && !src.includes(BUGGY)) {
    alreadyOk++
    continue
  }
  if (!src.includes(BUGGY)) {
    console.error(`[fix-slidev-base] в ${file} не найдена ожидаемая строка getSlidePath — версия Slidev изменилась, проверьте патч вручную`)
    process.exit(1)
  }
  writeFileSync(file, src.replace(BUGGY, FIXED))
  patched++
  console.log(`[fix-slidev-base] пропатчен ${file}`)
}

console.log(`[fix-slidev-base] готово: пропатчено ${patched}, уже корректно ${alreadyOk}`)
