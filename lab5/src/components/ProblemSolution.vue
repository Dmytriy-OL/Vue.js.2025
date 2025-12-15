<script setup>
import Card from "primevue/card";
</script>

<template>
  <section class="section" id="problem">
    <div class="container">
      <h2 class="section-title">Проблема → Рішення</h2>
      <p class="section-subtitle">Коротко і по суті: що болить і як ми це закриваємо.</p>

      <div class="grid-2">
        <Card>
          <template #title>Проблема</template>
          <template #content>
            <ul>
              <li>Задачі в месенджерах губляться</li>
              <li>Ніхто не розуміє “що зараз головне”</li>
              <li>Дедлайни злітають</li>
              <li>Немає прозорого прогресу</li>
            </ul>
          </template>
        </Card>

        <Card>
          <template #title>Рішення</template>
          <template #content>
            <ul>
              <li>Єдиний список задач</li>
              <li>Статуси + пріоритети</li>
              <li>Швидкий контроль дедлайнів</li>
              <li>Зрозумілий dashboard</li>
            </ul>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul { margin: 0; padding-left: 18px; line-height: 1.7; }
</style>
