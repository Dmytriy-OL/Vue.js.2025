<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

const auth = inject("auth");
const router = useRouter();

const username = ref("");
const password = ref("");
const error = ref("");

function submit() {
  if (auth.login(username.value, password.value)) {
    router.push("/admin/dashboard");
  } else {
    error.value = "Невірні дані";
  }
}
</script>

<template>
  <div>
    <h2>Логін</h2>

    <input v-model="username" placeholder="Логін" />
    <input v-model="password" type="password" placeholder="Пароль" />

    <button @click="submit">Увійти</button>

    <p style="color:red">{{ error }}</p>
  </div>
</template>
