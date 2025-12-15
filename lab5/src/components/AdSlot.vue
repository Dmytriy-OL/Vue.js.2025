<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import { inject } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

defineProps({
  title: { type: String, default: "Реклама" },
  text: { type: String, default: "Спробуй демо безкоштовно" },
  promo: { type: String, default: "PROMO-2025" },
});

async function copyPromo(promo) {
  const ok = await copyToClipboard(promo);
  if (ok) toast.add({ severity: "success", summary: "Скопійовано", detail: "Скопійовано в буфер обміну", life: 2000 });
}
</script>

<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content>
      <p style="margin:0 0 10px; color: var(--text-color-secondary)">{{ text }}</p>
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap">
        <span class="badge"><i class="pi pi-ticket"></i> {{ promo }}</span>
        <Button size="small" icon="pi pi-copy" label="Copy промокод" severity="secondary" @click="copyPromo(promo)" />
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
