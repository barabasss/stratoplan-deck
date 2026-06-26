---
layout: section
class: text-center
---

# Часть 1. Скиллы

---

# Контекст не резиновый

<div class="muted -mt-2 mb-5">хотим передать агенту экспертизу — но всё сразу в контекст не влезает</div>

<div class="a-grid">
  <div>
    <div class="a-lead"><b>Хотим передать экспертизу:</b></div>
    <div class="chips-col">
      <div class="kchip">саммари встречи с задачами</div>
      <div class="kchip">статус для стейкхолдеров</div>
      <div class="kchip">разбор обратной связи</div>
      <div class="kchip">one-pager по шаблону</div>
    </div>
  </div>
  <div class="a-arr">→</div>
  <div>
    <div class="ctx ctx--over">
      <div class="ctx__lab">контекст</div>
      <div class="ctx__grid">
        <span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk"></span><span class="blk r"></span><span class="blk r"></span><span class="blk r"></span><span class="blk r"></span>
      </div>
    </div>
  </div>
</div>

<div class="concl mt-10">→ нужен механизм: <strong>подгружать знания только когда нужны</strong></div>

<!--
Мостик к скиллам: хотим передать агенту много разной экспертизы, но всё сразу в контекст
не влезает (он ограничен, при переполнении агент начинает тупить). Значит нужен механизм,
который подгружает нужные знания только в нужный момент. Дальше — зачем нужны скиллы и что это такое.
-->

---

# Зачем нужны скиллы

<div class="mt-8 text-2xl leading-relaxed">

– чтобы <strong class="accent">передать агенту вашу экспертизу</strong> в конкретном вопросе

</div>

<div class="muted mt-10" style="font-size:13px; max-width:64ch">По сути это «переизобретённые промпты»: папка со структурой, механизм распространения и подгрузка по необходимости. Помните моду делиться промптами? Скиллы — её развитие.</div>

<!--
Главная мысль для нетехнической аудитории: скилл нужен, чтобы передать агенту вашу
экспертизу в конкретном вопросе. У вас есть понимание «как правильно» — скилл превращает
его в инструкцию, по которой агент работает каждый раз одинаково, по вашему стандарту.
Внизу мелким — мысль, что скиллы это развитие старой идеи «делиться промптами».
-->

---

# Что такое скилл

<div class="text-xl muted mt-6">

Скилл — это <strong class="accent">папка с инструкцией</strong>, которую агент сам подхватывает в нужный момент и делает по проверенному сценарию.

</div>

<div class="flow mt-10">
  <div class="fstep"><div class="fn">1</div><p><b>Триггер</b> — вы ставите задачу, которая подходит под скилл.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">2</div><p><b>Активация</b> — агент подгружает инструкцию скилла себе в контекст.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">3</div><p><b>Сценарий</b> — идёт по шагам из инструкции и выдаёт результат в нужном формате.</p></div>
</div>

<!--
Ключевое уточнение для зала: «активация» — это не магия. Агент при срабатывании
подгружает текст инструкции скилла в свой контекст и дальше действует строго по ней.
Поэтому результат повторяемый. Дальше — где брать скиллы и как вызывать.
-->

---

# Где искать скиллы

<div class="grid grid-cols-2 gap-10 mt-8">
<div>

**Каталог:**

<div class="qrrow mt-4">
  <Qr src="skills-sh" />
  <div class="lbl"><a href="https://www.skills.sh/" target="_blank"><strong>skills.sh</strong></a><br><span class="muted">каталог разных скиллов</span></div>
</div>

</div>
<div>

**Готовые коллекции:**

<div class="qrrow mt-4">
  <Qr src="superpowers" />
  <div class="lbl"><a href="https://github.com/obra/superpowers" target="_blank"><strong>obra/superpowers</strong></a><br><span class="muted">большая коллекция</span></div>
</div>

<div class="qrrow mt-4">
  <Qr src="anthropics-skills" />
  <div class="lbl"><a href="https://github.com/anthropics/skills" target="_blank"><strong>anthropics/skills</strong></a><br><span class="muted">официальные от Anthropic</span></div>
</div>

</div>
</div>

<!--
Источники — как в нашей внутренней деке: каталог skills.sh, плюс готовые коллекции
(obra/superpowers — её же разберём как фреймворк, и официальные anthropics/skills).
-->

---

# Как установить

<div class="muted mt-2">поддерживается всеми агентами</div>

<div class="grid grid-cols-2 gap-8 mt-5">
<div>

**1. Через npx — команда:**

```bash
npx skills add <ссылка>
```

**2. Скормить ссылку агенту** — дать ссылку на скилл и попросить установить:

<CopyPrompt text="установи скилл https://github.com/obra/superpowers" />

</div>
<div>

**Где лежат** — у каждого агента своя папка:

<div class="paths mt-3">
  <div class="prow">
    <span class="ppath">.claude/skills/</span>
    <span class="pann"># Claude Code</span>
  </div>
  <div class="prow">
    <span class="ppath uni">.agents/skills/</span>
    <span class="pann"># для остальных агентов</span>
  </div>
</div>

</div>
</div>

<!--
Два способа установки: npx skills add — универсальная команда; либо просто скормить
агенту ссылку на скилл и сказать «установи» — он сам сходит и поставит. Дальше у каждого
агента своя папка: .claude/skills у Claude Code, .agents/skills — для остальных.
-->

---
class: usage-chats
---

# Как вызывать скилл

<div class="muted -mt-2 mb-3">2 способа · попробуйте прямо тут</div>

<div class="chats" style="grid-template-columns:repeat(2,1fr); max-width:780px; margin-left:auto; margin-right:auto">
  <ChatCol title="Агент сам" tag="авто" tag-class="tagx--auto"
    desc="если <b>description</b> внятный — агент зовёт сам"
    preset="давай спроектируем дизайн-макет сайта"
    placeholder="напишите задачу…" />
  <ChatCol title="Через /" tag="/" tag-class="tagx--slash"
    desc="явный вызов <b>руками</b> — как команда"
    preset="/release-notes"
    placeholder="/имя-скилла" fill />
</div>

<!--
Интерактивно (как в нашей деке): два способа вызова. «Агент сам» — печатаешь задачу,
агент подхватывает скилл по description. «Через /» — слэш-меню, выбираешь команду.
Можно дать залу попробовать прямо на слайде.
-->

---

# Демо 1 · visual-explainer: презентация

<div class="mt-12 text-2xl leading-relaxed">

просто попросите <strong class="accent">visual-explainer</strong> — он соберёт презентацию

</div>

<div class="mt-5 text-xl muted">с нуля по описанию · или по образцу — скинуть картинки и скриншоты</div>

<div class="qrrow mt-12">
  <Qr src="visual-explainer" />
  <div class="lbl"><a href="https://github.com/nicobailon/visual-explainer" target="_blank"><strong class="accent">visual-explainer</strong></a><br><span class="muted">визуальные HTML-объяснения</span></div>
</div>

<!--
Тут не объясняю — всем и так понятно. Просто прошу visual-explainer, и он собирает
презентацию (с нуля по описанию или по образцу с картинок/скриншотов).
-->

---

# Демо 2 · visual-explainer: дашборд DataLens

<Demo>скриншот дашборда → интерактивная панель</Demo>

<div class="grid grid-cols-2 gap-8 mt-2">
<div>
<p class="muted">Берём скриншот дашборда и делаем из него панель управления: заменить реальные цифры, добавить подписи, подсвечивать нужное по ходу рассказа.</p>
<CopyPrompt text="Свёрстай интерактивный график точь-в-точь по приложенной картинке (auditorium.png) и добавь три инструмента для презентации: 1) переключатель цифр — показывать/скрывать значения над столбцами; 2) линию с подписью от столбца 3088 до 4116, подпись редактируемая прямо на графике; 3) затемнение колонок, чтобы фокусировать внимание." />
</div>
<div>
<div class="flex flex-col gap-3 mt-1">
  <DemoLink href="auditorium-chart.html" label="результат (HTML)" />
  <DemoLink href="auditorium.png" label="исходный дашборд" />
</div>
</div>
</div>

<!--
ЖИВОЕ — главный wow. Прикладываю auditorium.png через «+», вставляю промпт (кнопка копирует).
Три инструмента в промпте = три эффекта: переключатель цифр, линия с подписью, затемнение.
Из статичного скриншота — живая аннотированная панель. Таймбокс ~5 мин.
ПЛЕЙСХОЛДЕР: приложить картинку дашборда; ссылки на результат и запись.
-->

---

# Демо 3 · кейс: решение по беклогу

<Demo>visual-explainer + brainstorming на одном решении</Demo>

<div class="grid grid-cols-2 gap-8 mt-2">
<div>
<p class="muted"><b>visual-explainer</b> — показать таблицу наглядно</p>
<CopyPrompt text="visual-explainer, давай визуализируем представленный беклог, чтобы понять, стоит ли нам разъезжаться с Forge. В таблице есть сложность задач и тип реализации — общая или раздельная." />
</div>
<div>
<p class="muted"><b>brainstorming</b> — помочь принять решение</p>
<CopyPrompt text="brainstorming: помоги принять решение — стоит ли разъезжаться с Forge. Какие вопросы нужно закрыть, чтобы принять это решение? Спрашивай по одному." />
</div>
</div>

<div class="mt-4"><DemoLink href="forge-divergence.html" label="результат (HTML)" /></div>

<!--
Кейс с двумя скиллами на одном решении. visual-explainer наглядно показывает беклог
(сложность задач, тип реализации). brainstorming помогает с самим решением — задаёт
вопросы по одному. Оба промпта копируются по клику.
Результат — обезличенная визуализация беклога (forge-divergence.html, лежит в public/).
ПЛЕЙСХОЛДЕР: ссылка на запись демо.
-->

---

# Демо 4 · фронтенд-дизайн — по рефу или с нуля

<script setup>
const sbase = import.meta.env.BASE_URL
</script>

<div class="muted -mt-2 mb-3" style="font-size:14px">скилл <strong class="accent">frontend-design</strong> от Anthropic — аккуратный фронтенд без дизайнерских навыков</div>

<div class="grid grid-cols-2 gap-7 mt-1">
<div>
<p class="muted"><b>По рефу:</b> дал образец — дальше скилл сам собрал варианты. Кейс: лендинг школы soft skills «Среда».</p>

<CopyPrompt text="frontend-design: вот реф (скриншоты сайта-образца). Посмотри его, сохрани структуру и смысловые блоки, собери шаблоны и сделай несколько вариантов лендинга – каждый в своём визуальном направлении." />

<p class="muted mt-3"><b>С нуля:</b> по описанию, без рефа — сразу 2–3 варианта.</p>
</div>

<div>
<div class="muted mb-2" style="font-size:13px">реф → четыре свежих направления:</div>
<div class="sreda-gallery">
  <a class="sg-card" :href="`${sbase}sreda-school/variant-d.html`" target="_blank">
    <div class="sg-sw sg-d"><i></i><i></i><i></i></div>
    <div class="sg-meta"><b>Необрутализм</b><span>швейцарский панк</span></div>
  </a>
  <a class="sg-card" :href="`${sbase}sreda-school/variant-e.html`" target="_blank">
    <div class="sg-sw sg-e"><i></i><i></i><i></i></div>
    <div class="sg-meta"><b>Ризограф-зин</b><span>артовый принт</span></div>
  </a>
  <a class="sg-card" :href="`${sbase}sreda-school/variant-f.html`" target="_blank">
    <div class="sg-sw sg-f"><i></i><i></i><i></i></div>
    <div class="sg-meta"><b>Терапевтический сад</b><span>органика и природа</span></div>
  </a>
  <a class="sg-card" :href="`${sbase}sreda-school/variant-g.html`" target="_blank">
    <div class="sg-sw sg-g"><i></i><i></i><i></i></div>
    <div class="sg-meta"><b>Письмо в круг</b><span>нарратив-приглашение</span></div>
  </a>
</div>
<div class="mt-3 flex items-center gap-5">
  <DemoLink href="sreda-school/index.html" label="галерея вариантов" />
  <div class="qrrow">
    <Qr src="frontend-design" sm />
    <div class="lbl"><a href="https://github.com/anthropics/skills/tree/main/skills/frontend-design" target="_blank"><strong>frontend-design</strong></a><br><span class="muted">скилл · GitHub</span></div>
  </div>
</div>
</div>

</div>

<!--
Демо: frontend-design (Anthropic) — аккуратный фронтенд без дизайнера, двумя путями:
1) ПО РЕФУ — дал образец и одну просьбу, скилл сохранил структуру/смысловые блоки и выдал
несколько лендингов в разных направлениях. Реальный кейс — школа soft skills «Среда»:
кликабельны 4 финальных направления (D–G); в галерее — все, включая первый заход (A–C),
оставленный для сравнения. Бренд и контент везде одинаковые — сравниваем дизайн.
2) С НУЛЯ — по описанию без рефа, сразу несколько вариантов, выбираем и доводим.
Можно показать вживую: открыть галерею.
-->

---

# Демо 5 · стратегия продукта — голосом

<Demo>Handy + visual-explainer</Demo>

<div class="grid grid-cols-2 gap-8 mt-2">
<div>
<p class="muted">Задача — представить <b>стратегию продукта</b>. В голове хаотичные мысли; надо собрать их в структурированный, презентабельный вид.</p>
<p class="muted mt-3"><strong class="accent-2">Handy</strong> — наговариваешь мысли голосом, не печатая. <strong class="accent">visual-explainer</strong> — визуализирует их в наглядную картинку.</p>
</div>
<div>
<div class="qrrow">
  <Qr src="handy" />
  <div class="lbl"><a href="https://handy.computer/" target="_blank"><strong class="accent">handy.computer</strong></a><br><span class="muted">бесплатный open-source диктовщик · локально · push-to-talk · в любое поле</span></div>
</div>
<CopyPrompt text="visual-explainer: вот мои сырые мысли по стратегии продукта (наговорил голосом) — разложи их в структуру (проблема, аудитория, ценность, гипотезы, метрики, дорожная карта) и собери презентабельный вид." />
</div>
</div>

<!--
Демо: голос + структура. Рекламируем Handy (рекомендуем для голосового управления):
наговариваешь хаотичные мысли по стратегии прямо голосом, не печатая. visual-explainer
раскладывает их в структурированную презентацию. Handy — бесплатный, open-source, локально,
push-to-talk, вставляет в любое поле. Можно показать вживую: наговорил → получил структуру.
-->

---

# Что уже можно — без строчки кода

<div class="ex-list mt-10">
  <div>презентации и визуальные объяснения в HTML</div>
  <div>интерактивные панели из скриншотов дашбордов</div>
  <div>наглядная визуализация таблиц и помощь в решениях</div>
  <div>лендинги и кликабельные мокапы без дизайнера</div>
</div>

<div class="concl mt-10">→ это всё — <strong>скиллы</strong>: готовые сценарии под задачу</div>

<!--
Закрываем демо-часть: даже не написав кода, вы закрываете большой пласт задач.
Скилл — это сценарий под задачу. Дальше — что стоит обернуть в скилл.
-->

---

# Примеры скиллов

<div class="muted -mt-2 mb-6">какую-то свою экспертизу · что-то, что вы часто делаете</div>

<div class="ex-list">
  <div>решение конфликтов при синканье кодовых баз</div>
  <div>снятие фича-флага</div>
  <div>анализ замечаний из PR и план по фиксу</div>
  <div>хитрая работа с личным таск-менеджером</div>
  <div>формирователь QR-кодов</div>
  <div>поиск встреч без повестки и подготовка драфта сообщений <span class="muted">(heartbeat)</span></div>
  <div>написание release-notes</div>
</div>

<!--
Что стоит обернуть в скилл — своя экспертиза или то, что делаете часто. От технических
до бытовых. Дальше — вторая половина: статическая память проекта (agents.md).
-->

---

# agents.md — статическая память проекта

<div class="muted -mt-2 mb-3">скилл — это сценарий под задачу; agents.md — постоянная инфа о вашем контексте</div>

<div class="grid grid-cols-2 gap-10 mt-4">
<div>

Файл с <strong class="accent">постоянными правилами</strong>, который агент читает каждый раз:

- кто вы и чем занимается команда
- где брать факты — вики, трекер, данные
- как оформлять результат — формат и тон
- чего делать <b>не</b> нужно

<div class="concl mt-6">→ <strong>не нужно</strong> каждый раз повторять одно и то же</div>

</div>
<div>

```md
# Контекст
- команда: продукт X, аналитика
- факты беру из: вики команды
```

</div>
</div>

<!--
Контраст для зала: скилл — динамический сценарий (включается под задачу), agents.md —
статическая память проекта (агент читает её всегда). Без него каждый раз объясняешь
контекст заново. Дальше — вайбкодинг.
-->
