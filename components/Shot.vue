<template>
  <div class="shot">
    <div class="shot__ic">📸</div>
    <div class="shot__lab">скрин-фолбэк сюда</div>
    <div class="shot__t"><slot /></div>
  </div>
</template>

<style scoped>
.shot {
  margin: 12px 0; padding: 18px 16px; text-align: center;
  border-radius: 12px;
  border: 2px dashed color-mix(in srgb, var(--border) 45%, var(--plum) 55%);
  background: var(--plum-dim);
}
.shot__ic { font-size: 26px; margin-bottom: 4px; }
.shot__lab {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px;
  text-transform: uppercase; color: var(--text-dim); margin-bottom: 4px;
}
.shot__t { font-size: 14px; color: var(--plum); }
</style>
