<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Divider from "primevue/divider";
import { computed, inject, ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

const users = ref(3);

const plans = [
  {
    name: "Basic",
    who: "Для навчання / одного користувача",
    price: 99,
    features: ["1 проєкт", "До 50 задач", "Базові статуси", "Експорт .csv"],
  },
  {
    name: "Team",
    who: "Для маленької команди",
    price: 199,
    features: ["До 5 проєктів", "До 500 задач", "Ролі в команді", "Пріоритети задач"],
  },
  {
    name: "Pro",
    who: "Для активної команди",
    price: 349,
    features: ["Безліміт проєктів", "Безліміт задач", "Аналітика", "Пріоритетна підтримка"],
  },
];

const selected = ref(plans[1].name);
const basePrice = computed(() => plans.find((p) => p.name === selected.value)?.price ?? 0);
const total = computed(() => users.value * basePrice.value);

async function choosePlan(name) {
  selected.value = name;

  const ok = await copyToClipboard(`План: ${name}. Користувачів: ${users.value}. Орієнтовно: ${total.value} грн/міс.`);
  if (ok) toast.add({ severity: "success", summary: "Скопійовано", detail: "Скопійовано в буфер обміну", life: 2000 });

  toast.add({ severity: "info", summary: "Обрано план", detail: `Ти обрав: ${name}`, life: 2000 });
}
</script>

<template>
  <section class="section" id="pricing">
    <div class="container">
      <h2 class="section-title">Тарифи / Плани</h2>
      <p class="section-subtitle">Мінімум 3 плани + міні-калькулятор вартості.</p>

      <div class="grid-3">
        <Card v-for="p in plans" :key="p.name" class="plan" :class="{ picked: p.name === selected }">
          <template #title>
            <div class="plan-title">
              <span>{{ p.name }}</span>
              <span class="price">{{ p.price }} грн/міс</span>
            </div>
          </template>

          <template #subtitle>{{ p.who }}</template>

          <template #content>
            <ul class="f">
              <li v-for="x in p.features" :key="x"><i class="pi pi-check"></i> {{ x }}</li>
            </ul>

            <Button
              class="w"
              :severity="p.name === selected ? 'contrast' : 'secondary'"
              icon="pi pi-check"
              label="Обрати план"
              @click="choosePlan(p.name)"
            />
          </template>
        </Card>
      </div>

      <Divider />

      <div class="calc">
        <div class="left">
          <div class="badge"><i class="pi pi-calculator"></i> Міні-калькулятор</div>
          <p class="muted">Обери план і кількість користувачів — отримаєш орієнтовну суму.</p>
        </div>

        <div class="right">
          <label class="lbl">Кількість користувачів</label>
          <InputNumber v-model="users" :min="1" :max="50" showButtons />

          <p class="sum">
            Орієнтовна вартість:
            <strong>{{ total }}</strong> грн/міс.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plan { transition: transform .15s ease, box-shadow .15s ease; }
.plan:hover { transform: translateY(-2px); }
.picked { outline: 2px solid color-mix(in srgb, var(--primary-color) 55%, transparent); }

.plan-title { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
.price { color: var(--primary-color); font-weight: 900; }

.f { margin: 0 0 14px; padding-left: 0; list-style: none; display: grid; gap: 8px; }
.f i { margin-right: 8px; }
.w { width: 100%; }

.calc { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: center; }
.muted { margin: 10px 0 0; color: var(--text-color-secondary); line-height: 1.6; }
.lbl { display: block; font-size: 12px; color: var(--text-color-secondary); margin-bottom: 6px; }
.sum { margin: 10px 0 0; }
@media (max-width: 900px) { .calc { grid-template-columns: 1fr; } }
</style>
