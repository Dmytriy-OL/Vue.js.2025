<script setup>
import Button from "primevue/button";
import { inject } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

async function copyLink() {
  const ok = await copyToClipboard("https://taskflow.app/demo");
  if (ok) toast.add({ severity: "success", summary: "Скопійовано", detail: "Скопійовано в буфер обміну", life: 2000 });
}
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div>
        <div class="b">TaskFlow</div>
        <div class="muted">© 2025. Навчальний проєкт (PrimeVue + Plugin).</div>
      </div>

      <div class="links">
        <a href="#home">Home</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <Button size="small" icon="pi pi-copy" label="Copy demo link" severity="secondary" @click="copyLink" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--surface-border);
  padding: 24px 0;
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}
.b { font-weight: 900; }
.muted { color: var(--text-color-secondary); font-size: 12px; margin-top: 4px; }
.links { display: flex; gap: 12px; }
.links a { color: var(--text-color-secondary); text-decoration: none; }
.links a:hover { color: var(--text-color); }
@media (max-width: 900px) { .links { display: none; } }
</style>
