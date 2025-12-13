<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const users = [
  { id: 1, name: "Дмитро", email: "dima@mail.com" },
  { id: 2, name: "Анна", email: "anna@mail.com" },
];

function openUser(id) {
  router.push(`/admin/user/${id}`);
}
</script>

<template>
  <h2>Users</h2>

  <ul>
    <li v-for="u in users" :key="u.id">
      {{ u.name }} — {{ u.email }}
      <button @click="openUser(u.id)">Деталі</button>
    </li>
  </ul>
</template>
