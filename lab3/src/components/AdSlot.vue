<script setup>
defineProps({
  title: { type: String, default: "Реклама" },
  subtitle: { type: String, default: "Натисни, щоб відкрити" },
  bannerText: { type: String, default: "🔥 Special Offer" },
});

const emit = defineEmits(["open"]);
</script>

<template>
  <section class="slot" @click="emit('open')">
    <div class="left">
      <div class="t">{{ title }}</div>
      <div class="s">{{ subtitle }}</div>
    </div>
    <div class="badge">{{ bannerText }}</div>
  </section>
</template>

<style scoped>
.slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  border-radius: var(--radius);
  border: 1px dashed color-mix(in oklab, var(--accent), var(--border) 60%);
  background: color-mix(in oklab, var(--card), transparent 18%);
  cursor: pointer;
  transition: transform 160ms ease, border-color 160ms ease;
}
.slot:hover {
  transform: translateY(-2px);
  border-color: color-mix(in oklab, var(--accent), white 10%);
}

.t {
  font-weight: 900;
}
.s {
  color: var(--muted);
  font-size: 13px;
}

.badge {
  background: var(--accent);
  color: white;
  padding: 8px 10px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 13px;
}
</style>
