<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { inject, ref } from "vue";
import { useToast } from "primevue/usetoast";

const copyToClipboard = inject("copyToClipboard");
const toast = useToast();

const demoEmail = ref("demo@taskflow.app");

async function copyEmail() {
  const ok = await copyToClipboard(demoEmail.value);
  if (ok) toast.add({ severity: "success", summary: "Готово", detail: "Скопійовано в буфер обміну", life: 2000 });
}
</script>

<template>
  <section id="home" class="section hero">
    <div class="container">
      <div class="badge"><i class="pi pi-bolt"></i> Міні-лендінг SaaS: TaskFlow — менеджер задач</div>

      <div class="grid-2" style="margin-top: 18px">
        <div>
          <h1 class="title">
            Керуйте задачами команди швидко, без хаосу і “де це записано?”
          </h1>
          <p class="subtitle">
            TaskFlow допомагає планувати, контролювати дедлайни і бачити прогрес в одному місці.
            Підійде для навчання, фрілансу, маленьких команд.
          </p>

          <div class="hero-actions">
            <Button icon="pi pi-play" label="Подивитись як працює" severity="contrast" @click="$el.querySelector('a')?.click()" />
            <a href="#pricing" class="fake-link">Перейти до тарифів →</a>
          </div>

          <div class="copy-row">
            <span class="hint">Швидкий контакт:</span>
            <InputText v-model="demoEmail" />
            <Button icon="pi pi-copy" label="Copy" size="small" @click="copyEmail" />
          </div>
        </div>

        <Card>
          <template #title>Що отримаєш</template>
          <template #content>
            <ul class="list">
              <li><i class="pi pi-check"></i> Списки задач + статуси</li>
              <li><i class="pi pi-check"></i> Аналітика прогресу</li>
              <li><i class="pi pi-check"></i> Плани для команди</li>
              <li><i class="pi pi-check"></i> Підтримка та демо</li>
            </ul>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-top: 34px; }
.title {
  margin: 10px 0 10px;
  font-size: 42px;
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.04em;
}
.subtitle {
  margin: 0 0 18px;
  color: var(--text-color-secondary);
  line-height: 1.6;
  font-size: 16px;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.fake-link { color: var(--primary-color); text-decoration: none; }
.copy-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.hint { color: var(--text-color-secondary); font-size: 13px; }
.list { margin: 0; padding-left: 0; list-style: none; display: grid; gap: 10px; }
.list i { margin-right: 8px; }
@media (max-width: 900px) {
  .title { font-size: 34px; }
}
</style>
