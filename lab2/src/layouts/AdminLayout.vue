<script setup>
import { inject } from "vue";
import Sidebar from "../components/Sidebar.vue";
import AppTabs from "../components/AppTabs.vue";

const auth = inject("auth");
</script>

<template>
  <div style="display:flex">
    <Sidebar>
      <p><strong>Меню</strong></p>
      <router-link to="/admin/dashboard">Dashboard</router-link><br />
      <router-link to="/admin/users">Users</router-link><br />
      <router-link to="/admin/reports">Reports</router-link>
    </Sidebar>

    <div style="flex:1; padding:20px">
      <p v-if="auth.isAuth.value">Користувач авторизований</p>
      <AppTabs />

      <KeepAlive>
        <router-view />
      </KeepAlive>
    </div>
  </div>
</template>
