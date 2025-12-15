<script setup>
import { computed } from "vue";

const props = defineProps({
  theme: { type: String, required: true },
});

const emit = defineEmits(["toggle"]);

const isDark = computed(() => props.theme === "dark");
const knobX = computed(() => (isDark.value ? "2px" : "22px"));
</script>

<template>
  <button class="toggle" type="button" @click="emit('toggle')">
    <span class="label">{{ isDark ? "Dark" : "Light" }}</span>
    <span class="track">
      <span class="knob" />
    </span>
  </button>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  box-shadow: var(--shadow);
}
.label {
  font-weight: 800;
  font-size: 13px;
}

.track {
  width: 44px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid var(--border);
  position: relative;
  background: color-mix(in oklab, var(--bg), white 6%);
}

.knob {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: var(--accent);
  position: absolute;
  top: 1px;

  /* ✅ v-bind() у CSS: рухаємо кульку */
  left: v-bind(knobX);
  transition: left 180ms ease;
}
</style>
