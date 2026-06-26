---
layout: section
class: text-center
---

# Часть 2. Вайбкодинг

<div class="muted mt-4">когда всё-таки кодим</div>

---

# Когда это применять

<div class="mt-8 flex flex-col gap-4">

  <div style="border-left:3px solid var(--coral); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Быстрое прототипирование фич и идей</strong></div>
    <div class="muted mt-1">проверить, как будет выглядеть и работать новая функциональность, до того как ставить задачу команде</div>
  </div>

  <div style="border-left:3px solid var(--coral); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Проверка гипотез через работающий прототип</strong></div>
    <div class="muted mt-1">вместо презентации с мокапами — живое приложение, которое можно показать клиенту, инвестору или совету директоров за день-два</div>
  </div>

  <div style="border-left:3px solid var(--coral); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Персональные инструменты под свой процесс</strong></div>
    <div class="muted mt-1">дашборды, скрипты для рутины, внутренние утилиты — всё, что классно было бы иметь, но всегда откладывается</div>
  </div>

</div>

<div class="muted mt-6" style="font-size:13px">мои примеры: личное приложение для инвестиций · тренажёр английских слов · парсер телеграм-каналов с топом постов</div>

---

# Кейс · ресурсный план без Excel

<div class="muted -mt-2 mb-6">распределение людей по проектам — знакомая боль; жило в общей Excel-таблице</div>

<div class="ex-list">
  <div>план всегда неактуальный — решения по неверной картине</div>
  <div>один файл правят десятки человек, всё «разъезжается»</div>
  <div>должность и ФИО рассинхронены, человек загружен на 200%</div>
  <div>план расходится с фактом — по естественным причинам</div>
</div>

<div class="concl mt-10">→ та самая рутина, до которой <strong>не доходят руки</strong> — повод попробовать вайбкодинг</div>

---

# Тот самый Excel

<script setup>
import { ref } from 'vue'
const base = import.meta.env.BASE_URL
const hover = ref('')
</script>

<div class="muted -mt-2" style="font-size:13px">наведи на фото — увеличится</div>

<div class="excel-pile" @mouseleave="hover=''">
  <div class="ph ph1" @mouseenter="hover='excel-1.png'"><img :src="`${base}excel-1.png`" alt="Excel — ресурсный план" /></div>
  <div class="ph ph2" @mouseenter="hover='excel-2.png'"><img :src="`${base}excel-2.png`" alt="Excel — ресурсный план" /></div>
  <div class="ph ph3" @mouseenter="hover='excel-3.png'"><img :src="`${base}excel-3.png`" alt="Excel — ресурсный план" /></div>
</div>

<div v-if="hover" class="excel-preview"><img :src="`${base}${hover}`" alt="Excel — крупно" /></div>

---

# Что изменилось

<div class="ba mt-8" style="grid-template-columns:1fr 1fr">
  <div class="col before">
    <h4>Было в Excel</h4>
    <ol>
      <li>один файл одновременно правят десятки человек</li>
      <li>должность и ФИО разъезжаются, перегруз 200%</li>
      <li>роль и человека пишут в одну ячейку</li>
      <li>неясно, актуален ли план прямо сейчас</li>
      <li>сводку и план/факт сводят руками</li>
      <li>нет истории и версий плана</li>
    </ol>
  </div>
  <div class="col after" style="justify-content:flex-start">
    <h4>Стало в инструменте</h4>
    <ul class="aft">
      <li>у каждой из <b>5 ролей</b> своя зона — чужое не задеть</li>
      <li>ФИО только из справочника, перегруз подсвечен</li>
      <li>РП заявляет потребность, РМ назначает — <b>2 шага</b></li>
      <li><b>подтверждение раз в месяц</b> + автосигналы</li>
      <li>живой дашборд загрузки и дефицита, сверка с фактом</li>
      <li><b>версии и снапшоты</b>: сравнение и откат</li>
    </ul>
  </div>
</div>

<div class="mt-8 flex justify-center">
  <DemoLink href="http://localhost:8000" label="открыть инструмент · localhost:8000" />
</div>

---

# Что это даёт

<div class="mt-6 text-2xl leading-relaxed">

– возможность <strong class="accent">с нуля собрать рабочий сервис</strong> под свою задачу

</div>

<div class="muted mt-3 mb-4" style="font-size:14px">пара мыслей:</div>

<div class="flex flex-col gap-2">
  <div style="border-left:3px solid var(--plum); padding:4px 0 4px 16px">
    <div class="text-xl">«а нельзя взять <strong>готовое решение?</strong>»</div>
    <div class="muted mt-1">можно — но не всегда есть готовое под твой процесс; живой пример (resplan) показывает: проблема часто реальна, и её надо решать</div>
  </div>
  <div style="border-left:3px solid var(--red); padding:4px 0 4px 16px">
    <div class="text-xl">не про <strong>массовый продакшен</strong></div>
    <div class="muted mt-1">это не замена продуктовой разработке под нагрузку и масштаб</div>
  </div>
  <div style="border-left:3px solid var(--coral); padding:4px 0 4px 16px">
    <div class="text-xl">но точно — <strong>закрыть локальные боли</strong></div>
    <div class="muted mt-1">свой инструмент под свой процесс, как resplan вместо Excel</div>
  </div>
  <div style="border-left:3px solid var(--green); padding:4px 0 4px 16px">
    <div class="text-xl">в лучшем случае — <strong>масштабировать на компанию</strong></div>
    <div class="muted mt-1">локальная штука дорастает до инструмента для команды или всей компании</div>
  </div>
</div>

---

# Общий подход

<div class="flow mt-12">
  <div class="fstep"><div class="fn">1</div><p><b>Хотелка</b> — что хочу получить, своими словами.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">2</div><p><b>План</b> — агент предлагает, как это сделать по шагам.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">3</div><p><b>Правки плана</b> — правим до старта, пока это дёшево.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">4</div><p><b>Разработка</b> — агент реализует, вы сверяете результат.</p></div>
</div>

<div class="concl mt-12">→ ключ — <strong>править план до кода</strong>, а не переделывать после</div>

---

# Зачем фреймворки

<div class="tiers mt-10">
  <div class="tier tier--1"><div class="lv">L1</div><div class="what"><b>Как пойдёт</b><span>сразу прошу «сделай» — и надеюсь на лучшее</span></div><div class="cost">риск продолбаться:<br>высокий</div></div>
  <div class="tier tier--2"><div class="lv">L2</div><div class="what"><b>Свой чек-лист</b><span>держу порядок в голове и заметках</span></div><div class="cost">риск продолбаться:<br>средний</div></div>
  <div class="tier tier--3"><div class="lv">L3</div><div class="what"><b>Фреймворк</b><span>сценарий ведёт сам и не даёт пропустить шаг</span></div><div class="cost">риск продолбаться:<br>низкий</div></div>
</div>

<div class="concl mt-10">→ фреймворк <strong>ведёт по сценарию</strong> и не даёт пропустить шаг</div>

---

# Какие бывают фреймворки

<div class="muted -mt-2 mb-3" style="font-size:13px">база: во всех агентах уже есть классический <strong>режим планирования</strong> (plan mode) — фреймворки идут дальше</div>

<div class="grid grid-cols-3 gap-x-8 gap-y-5">

<div class="qrrow">
  <Qr src="spec-kit" sm />
  <div class="lbl"><strong>spec-kit</strong> · GitHub<br><span class="muted">spec → plan → tasks → implement</span><br><a href="https://github.com/github/spec-kit" target="_blank">github/spec-kit</a></div>
</div>

<div class="qrrow">
  <Qr src="gstack" sm />
  <div class="lbl"><strong>gstack</strong> · Garry Tan<br><span class="muted">скиллы-роли: «виртуальная команда»</span><br><a href="https://github.com/garrytan/gstack" target="_blank">garrytan/gstack</a></div>
</div>

<div class="qrrow">
  <Qr src="superpowers" sm />
  <div class="lbl"><strong class="accent">Superpowers</strong> · obra<br><span class="muted">обсудить → план → реализация</span><br><a href="https://github.com/obra/superpowers" target="_blank">obra/superpowers</a></div>
</div>

</div>

<div class="mt-6 pt-4" style="border-top:1px solid var(--border)">
<div class="muted mb-3" style="font-size:14px">особняком — не фреймворк, а утилита <strong>поверх</strong> агента:</div>
<div class="qrrow">
  <Qr src="ralphex" sm />
  <div class="lbl"><strong>ralphex</strong> · Ralph-loop<br><span class="muted">оркестратор: гоняет агента по плану до результата</span> · <a href="https://github.com/umputun/ralphex" target="_blank">umputun/ralphex</a></div>
</div>
</div>

<div class="concl mt-6">→ дальше разбираем <strong>Superpowers</strong> — его и предлагаю взять</div>

---

# Superpowers — разбор

<div class="flow mt-12">
  <div class="fstep"><div class="fn">1</div><p><b>brainstorming</b> — вопросами вытаскивает идею и фиксирует спеку.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">2</div><p><b>writing-plans</b> — превращает спеку в детальный план.</p></div>
  <div class="farr">→</div>
  <div class="fstep"><div class="fn">3</div><p><b>реализация</b> — агент идёт по плану, не теряя нить.</p></div>
</div>

<div class="concl mt-12">→ три стадии: <strong>обсудить → план → реализация</strong></div>

---

# Как агент понимает, что пора дальше

<div class="muted -mt-2 mb-5" style="font-size:14px">переход между шагами — три механизма вместе</div>

<div class="grid grid-cols-3 gap-6">
  <div style="border-left:3px solid var(--plum); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Триггер по описанию</strong></div>
    <div class="muted mt-1">у каждого скилла есть <code>description: «Use when…»</code> — агент сверяет ситуацию и сам активирует нужный скилл</div>
  </div>
  <div style="border-left:3px solid var(--coral); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Скилл зовёт следующий</strong></div>
    <div class="muted mt-1">каждый скилл в конце сам называет, какой запускать дальше (<b>REQUIRED SUB-SKILL</b>) — цепочка зашита в скилах</div>
  </div>
  <div style="border-left:3px solid var(--green); padding:4px 0 4px 16px">
    <div class="text-xl"><strong>Гейты пользователя</strong></div>
    <div class="muted mt-1">между фазами — твоё подтверждение; на блокере агент <b>останавливается и спрашивает</b></div>
  </div>
</div>

---

# Демо 6 · Superpowers — установка

<div class="muted -mt-2 mb-4">шаг 0 · дальше пройдём весь флоу на фиче resplan «экспорт плана в Excel»</div>

<div class="muted mb-2" style="font-size:12px">ПОСТАВИТЬ — дай агенту ссылку, он подскажет команду под твой агент</div>

```bash
# Claude Code:
/plugin install superpowers@claude-plugins-official
```

<div class="qrrow mt-5">
  <Qr src="superpowers" sm />
  <div class="lbl"><a href="https://github.com/obra/superpowers" target="_blank"><strong class="accent">obra/superpowers</strong></a><br><span class="muted">после установки скиллы активны с первого сообщения · для Codex / Cursor / Gemini — свои команды</span></div>
</div>

---

# Демо 6 · Обсудить

<div class="muted -mt-2 mb-3"><code>brainstorming</code> — агент вопросами собирает спеку, не кодит · <strong class="accent">нужен ты</strong></div>

<div class="grid grid-cols-2 gap-6">
<div>
<div class="muted mb-2" style="font-size:12px">ДИАЛОГ</div>
<div class="flex flex-col gap-1" style="font-size:14px">
  <div style="border-left:3px solid var(--plum); padding:2px 0 2px 12px"><strong class="accent-2">агент:</strong> все три листа (проекты/ресурсы/СВОД) или только сводную?</div>
  <div style="border-left:3px solid var(--coral); padding:2px 0 2px 12px" class="muted"><strong>ты:</strong> все три, как в шаблоне</div>
  <div style="border-left:3px solid var(--plum); padding:2px 0 2px 12px"><strong class="accent-2">агент:</strong> учитываем роль пользователя?</div>
  <div style="border-left:3px solid var(--coral); padding:2px 0 2px 12px" class="muted"><strong>ты:</strong> да, по роли</div>
  <div style="border-left:3px solid var(--plum); padding:2px 0 2px 12px"><strong class="accent-2">агент:</strong> значения или формулы?</div>
  <div style="border-left:3px solid var(--coral); padding:2px 0 2px 12px" class="muted"><strong>ты:</strong> значения</div>
</div>
</div>
<div>
<div class="muted mb-2" style="font-size:12px">РЕЗУЛЬТАТ ШАГА — спека в git</div>
<pre style="font-family:var(--font-mono); font-size:12px; line-height:1.55; background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:12px 14px; white-space:pre-wrap; color:var(--text); margin:0">docs/superpowers/specs/2026-06-24-export-resplan-design.md
──────────────────────────────
## Экспорт плана в Excel
Цель:   GET /export/resplan.xlsx
Подход: openpyxl, формат шаблона
Листы:  проекты · ресурсы · СВОД
Доступ: фильтр по роли (scope_for)
Формат: значения, не формулы
Тест:   в книге ровно 3 листа</pre>
</div>
</div>

<div class="concl mt-4">→ результат — <strong>спека-документ</strong>, закоммичена в <code>docs/superpowers/specs/…</code>; ты её ревьюишь → дальше план</div>

---

# Демо 6 · План

<div class="muted -mt-2 mb-3"><code>writing-plans</code> — план мелкими задачами · <strong class="accent">ты ревьюишь до кода</strong></div>

```md
### Task 1: эндпоинт /export/resplan.xlsx
Files:  Create export_resplan.py · Modify app.py (роут) · Test test_export_resplan.py

- [ ] написать падающий тест (3 листа: проекты / ресурсы / СВОД)
- [ ] запустить → FAIL
- [ ] минимальная реализация: openpyxl, фильтр по роли
- [ ] запустить → PASS
- [ ] коммит
```

<div class="concl mt-4">→ план человекочитаемый — ты даёшь добро, пока правки дёшевы</div>

---

# Демо 6 · Реализация

<div class="muted -mt-2 mb-3"><code>subagent-driven</code> — сначала тест, потом код; сам себя ревьюит · <strong style="color:var(--green)">агент сам</strong></div>

```python
# тест (RED)
def test_sheets(client):
    r = client.get("/export/resplan.xlsx")
    wb = load_workbook(BytesIO(r.content))
    assert wb.sheetnames == ["проекты", "ресурсы", "СВОД"]
```

```python
# код (GREEN) · app/resplan/web/app.py
@app.get("/export/resplan.xlsx")
def export_resplan(user=Depends(current_user)):
    wb = build_resplan_workbook(scope_for(user))   # фильтр по роли
    return xlsx_stream(wb, "resplan.xlsx")
```

<div class="concl mt-3">→ красный тест → зелёный код → ревью → коммит</div>

---

# Демо 6 · Влить

<div class="muted -mt-2 mb-4"><code>finishing-a-development-branch</code> — тесты зелёные → выбираешь, как влить · <strong class="accent">нужен ты</strong></div>

<div class="ex-list">
  <div>тесты прошли ✓</div>
  <div>4 варианта: <strong>merge · PR · keep · discard</strong></div>
  <div>resplan: <code>main</code> = прод → делаем <strong>PR</strong>, не merge</div>
</div>

---

# Демо 6 · так мы реализовали фичу

<div class="muted -mt-2 mb-4">весь путь Superpowers на одном экране — где нужен ты, где агент сам</div>

<div class="sp-flow">
  <div class="sp-step" style="--c:var(--plum)"><div class="sp-n">1</div><div class="sp-name">Обсудить</div><div class="sp-d">вопросы → спека</div><div class="sp-role sp-role--you">нужен ты</div></div>
  <div class="sp-step" style="--c:var(--coral)"><div class="sp-n">2</div><div class="sp-name">Ветка</div><div class="sp-d">изолированная ветка, чистый baseline</div><div class="sp-role sp-role--auto">агент сам</div></div>
  <div class="sp-step" style="--c:var(--plum)"><div class="sp-n">3</div><div class="sp-name">План</div><div class="sp-d">мелкие задачи — ты ревьюишь до кода</div><div class="sp-role sp-role--you">нужен ты</div></div>
  <div class="sp-step" style="--c:var(--green)"><div class="sp-n">4</div><div class="sp-name">Реализация</div><div class="sp-d">сначала тест, потом код; сам себя ревьюит</div><div class="sp-role sp-role--auto">агент сам</div></div>
  <div class="sp-step" style="--c:var(--coral)"><div class="sp-n">5</div><div class="sp-name">Влить</div><div class="sp-d">merge / PR / keep / discard</div><div class="sp-role sp-role--you">нужен ты</div></div>
</div>
