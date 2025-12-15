<script setup>
import { useForm, useFieldArray } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";

/* i18n */
const { t } = useI18n();

/* validation schema */
const schema = yup.object({
  name: yup.string().required(t("errors.required")),
  email: yup.string().email().required(t("errors.required")),
  dateOfBirth: yup.string().required(t("errors.required")),
  address: yup.string().required(t("errors.required")),
  phones: yup.array().of(
    yup.object({
      phone: yup.string().required(t("errors.required")),
    })
  ),
});

/* form */
const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    dateOfBirth: "",
    address: "",
    phones: [{ phone: "" }],
  },
});

/* phones array */
const { fields, push, remove } = useFieldArray("phones");

/* submit */
const onSubmit = handleSubmit((values) => {
  console.log("FORM DATA:", values);
  alert("Збережено (імітація)");
});
</script>

<template>
  <div class="profile">
    <h1>{{ t("profile.title") }}</h1>

    <form @submit.prevent="onSubmit">
      <input name="name" placeholder="Імʼя" />
      <input name="email" placeholder="Email" />
      <input name="dateOfBirth" type="date" />
      <input name="address" placeholder="Адреса" />

      <h3>{{ t("profile.phones") }}</h3>

      <!-- 🔥 ВАЖЛИВО: field.value.phone -->
      <div
        v-for="(field, index) in fields"
        :key="field.key"
        class="phone-row"
      >
        <input
          v-model="field.value.phone"
          placeholder="Телефон"
        />
        <button type="button" @click="remove(index)">X</button>
      </div>

      <button type="button" @click="push({ phone: '' })">+</button>

      <div class="actions">
        <button type="submit">Save</button>
        <button type="button" @click="resetForm()">Reset</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.profile {
  max-width: 600px;
  margin: auto;
}
.phone-row {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
}
.actions {
  margin-top: 16px;
}
</style>
