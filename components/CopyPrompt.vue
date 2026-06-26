<script setup>
import { ref } from 'vue'
const props = defineProps({ text: { type: String, required: true } })
const copied = ref(false)
function copy() {
  navigator.clipboard.writeText(props.text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}
</script>

<template>
  <div class="cp">
    <div class="cp__box">{{ text }}</div>
    <button class="cp__btn" :class="{ done: copied }" @click="copy">
      {{ copied ? '✓ скопировано' : '📋 скопировать промпт' }}
    </button>
  </div>
</template>

<style scoped>
.cp { margin-top: 12px; }
.cp__box {
  font-family: var(--font-mono); font-size: 13.5px; line-height: 1.55;
  white-space: pre-wrap; padding: 14px 16px; border-radius: 10px;
  background: var(--surface); border: 1px solid var(--border); color: var(--text);
}
.cp__btn {
  margin-top: 8px; cursor: pointer; user-select: none;
  font-family: var(--font-mono); font-size: 13px;
  padding: 7px 14px; border-radius: 9px;
  color: #fff; background: var(--coral); border: 1px solid var(--coral);
  transition: all .15s;
}
.cp__btn:hover { filter: brightness(1.08); }
.cp__btn.done { background: var(--green); border-color: var(--green); }
</style>
