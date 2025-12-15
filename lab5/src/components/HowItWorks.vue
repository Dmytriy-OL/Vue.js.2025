<script setup>
import Timeline from "primevue/timeline";

const steps = [
  { status: "Створи простір", date: "Крок 1", icon: "pi pi-plus", color: "var(--primary-color)" },
  { status: "Додай задачі", date: "Крок 2", icon: "pi pi-list", color: "var(--primary-color)" },
  { status: "Роздай виконавців", date: "Крок 3", icon: "pi pi-user", color: "var(--primary-color)" },
  { status: "Відмічай прогрес", date: "Крок 4", icon: "pi pi-check", color: "var(--primary-color)" },
];
</script>

<template>
  <section class="section" id="how">
    <div class="container">
      <h2 class="section-title">Як це працює</h2>
      <p class="section-subtitle">4 простих кроки, щоб навести порядок у задачах.</p>

      <Timeline :value="steps" align="alternate">
        <template #content="slotProps">
          <div class="box">
            <div class="step">{{ slotProps.item.date }}</div>
            <div class="name">{{ slotProps.item.status }}</div>
          </div>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<style scoped>
.box {
  padding: 12px 14px;
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  background: var(--surface-card);
}
.step { font-size: 12px; color: var(--text-color-secondary); }
.name { font-weight: 800; margin-top: 4px; }
</style>
