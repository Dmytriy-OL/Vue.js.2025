<script setup>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import { computed, inject, reactive, ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});

const touched = reactive({
  name: false,
  email: false,
  message: false,
  agree: false,
});

const errors = computed(() => {
  const e = {};
  if (!form.name.trim()) e.name = "Вкажіть імʼя";
  if (!form.email.trim()) e.email = "Вкажіть email";
  if (!form.message.trim()) e.message = "Напишіть повідомлення";
  if (!form.agree) e.agree = "Потрібна згода";
  return e;
});

const hasErrors = computed(() => Object.keys(errors.value).length > 0);

function markAllTouched() {
  touched.name = true;
  touched.email = true;
  touched.message = true;
  touched.agree = true;
}

function reset() {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.message = "";
  form.agree = false;

  touched.name = false;
  touched.email = false;
  touched.message = false;
  touched.agree = false;
}

async function submit() {
  markAllTouched();
  if (hasErrors.value) return;

  // приклад: копіюємо email у буфер (2-й сценарій плагіна)
  const ok = await copyToClipboard(form.email);
  if (ok) toast.add({ severity: "success", summary: "Скопійовано", detail: "Скопійовано в буфер обміну", life: 1500 });

  toast.add({ severity: "success", summary: "Успіх", detail: "Заявку надіслано", life: 2500 });
  reset();
}
</script>

<template>
  <section class="section" id="contact">
    <div class="container">
      <h2 class="section-title">Отримати демо</h2>
      <p class="section-subtitle">Заповни форму — і ми звʼяжемось (імітація).</p>

      <Card>
        <template #content>
          <div class="grid">
            <div class="field">
              <label>Імʼя *</label>
              <InputText
                v-model="form.name"
                :invalid="touched.name && !!errors.name"
                @blur="touched.name = true"
              />
              <small v-if="touched.name && errors.name" class="err">{{ errors.name }}</small>
            </div>

            <div class="field">
              <label>Email *</label>
              <InputText
                v-model="form.email"
                :invalid="touched.email && !!errors.email"
                @blur="touched.email = true"
              />
              <small v-if="touched.email && errors.email" class="err">{{ errors.email }}</small>
            </div>

            <div class="field">
              <label>Телефон</label>
              <InputMask v-model="form.phone" mask="+38 (099) 999-99-99" placeholder="+38 (0__) ___-__-__" />
            </div>

            <div class="field" style="grid-column: 1 / -1">
              <label>Повідомлення *</label>
              <Textarea
                v-model="form.message"
                rows="4"
                autoResize
                :invalid="touched.message && !!errors.message"
                @blur="touched.message = true"
              />
              <small v-if="touched.message && errors.message" class="err">{{ errors.message }}</small>
            </div>

            <div class="field" style="grid-column: 1 / -1">
              <div class="check">
                <Checkbox v-model="form.agree" :binary="true" inputId="agree" />
                <label for="agree">Погоджуюсь з політикою конфіденційності *</label>
              </div>
              <small v-if="touched.agree && errors.agree" class="err">{{ errors.agree }}</small>
            </div>

            <div class="actions">
              <Button icon="pi pi-send" label="Надіслати" @click="submit" />
              <Button icon="pi pi-refresh" label="Очистити" severity="secondary" @click="reset" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.field label {
  display: block;
  font-size: 12px;
  color: var(--text-color-secondary);
  margin-bottom: 6px;
}
.err { color: #ef4444; }
.check { display: flex; align-items: center; gap: 10px; }
.actions { grid-column: 1 / -1; display: flex; gap: 10px; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
