<script setup>
import { computed } from 'vue'
const props = defineProps({
  href: { type: String, default: '' },
  label: { type: String, default: 'Открыть' },
})
// внешние ссылки — как есть; относительные резолвим через --base (dev и GitHub Pages)
const resolved = computed(() => {
  if (!props.href) return ''
  if (/^https?:\/\//.test(props.href)) return props.href
  return import.meta.env.BASE_URL + props.href.replace(/^\//, '')
})
</script>

<template>
  <a v-if="resolved" :href="resolved" target="_blank" class="demo-link">▶ {{ label }}</a>
  <span v-else class="demo-link demo-link--empty">🔗 вставить ссылку — {{ label }}</span>
</template>

<style scoped>
.demo-link {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-mono); font-size: 14px; font-weight: 600;
  padding: 9px 16px; border-radius: 10px; text-decoration: none;
  color: #fff;
  background: var(--coral);
  border: 1px solid var(--coral);
  transition: all .15s;
}
.demo-link:hover { filter: brightness(1.08); }
.demo-link--empty {
  color: var(--text-dim);
  background: transparent;
  border: 1.5px dashed color-mix(in srgb, var(--border) 45%, var(--coral) 55%);
}
</style>
