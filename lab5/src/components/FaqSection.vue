<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>

<template>
  <section class="section" id="faq">
    <div class="container">
      <h2 class="section-title">FAQ</h2>
      <p class="section-subtitle">Найчастіші питання.</p>

      <Accordion :activeIndex="0">
        <AccordionTab header="Це реальний сервіс?">
          Це навчальний лендінг без бекенду. Дані — локальні.
        </AccordionTab>
        <AccordionTab header="Чи є безкоштовний план?">
          Так, можна використовувати Basic як “стартовий”.
        </AccordionTab>
        <AccordionTab header="Як працює копіювання?">
          Є власний плагін CopyToClipboardPlugin. Він копіює текст і показує Toast.
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<style scoped>
:deep(.p-accordion) { border-radius: 16px; overflow: hidden; }
</style>
