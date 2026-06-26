<template>
  <div class="tbd">
    <div class="tbd__ic">✏️</div>
    <div class="tbd__lab">заполнить позже</div>
    <div class="tbd__t"><slot /></div>
  </div>
</template>

<style scoped>
.tbd {
  margin: 12px 0; padding: 18px 16px; text-align: center;
  border-radius: 12px;
  border: 2px dashed var(--border-bright);
  background: var(--surface);
}
.tbd__ic { font-size: 26px; margin-bottom: 4px; }
.tbd__lab {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px;
  text-transform: uppercase; color: var(--text-dim); margin-bottom: 4px;
}
.tbd__t { font-size: 14px; color: var(--text-dim); }
</style>
