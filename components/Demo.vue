<template>
  <div class="demo-badge">
    ▶ <slot />
  </div>
</template>

<style scoped>
.demo-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 14px; font-weight: 600;
  padding: 5px 14px; border-radius: 999px; margin-bottom: 14px;
  color: var(--coral);
  background: var(--coral-dim);
  border: 1px solid color-mix(in srgb, var(--border) 35%, var(--coral) 65%);
}
.demo-badge__t { opacity: .85; font-weight: 500; }
</style>
