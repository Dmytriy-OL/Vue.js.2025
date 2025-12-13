<script setup>
const reports = [
  { id: 1, title: "Звіт по продажах" },
  { id: 2, title: "Звіт по користувачах" },
];
</script>

<template>
  <h2>Reports</h2>

  <table border="1">
    <tr v-for="r in reports" :key="r.id">
      <slot name="row" :item="r">
        <td>{{ r.title }}</td>
      </slot>
    </tr>
  </table>
</template>
