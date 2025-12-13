<script setup>
import { ref } from "vue";
import DashboardOverview from "../components/DashboardOverview.vue";
import DashboardActivity from "../components/DashboardActivity.vue";

const tab = ref("overview");
</script>

<template>
  <h2>Dashboard</h2>

  <button @click="tab = 'overview'">Overview</button>
  <button @click="tab = 'activity'">Activity</button>

  <KeepAlive include="DashboardOverview" max="1">
    <component
      :is="tab === 'overview' ? DashboardOverview : DashboardActivity"
    />
  </KeepAlive>
</template>
