<script setup>
import styles from "./AdModal.module.css";

defineProps({
  open: { type: Boolean, default: false },
  headline: { type: String, default: "Реклама" },
  text: {
    type: String,
    default: "Це демонстраційна реклама. Закрий модалку кнопкою або кліком на фон.",
  },
  image: {
    type: String,
    default: "https://picsum.photos/seed/admodal/900/420",
  },
});

const emit = defineEmits(["close"]);

function onBackdrop(e) {
  if (e.target === e.currentTarget) emit("close");
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" :class="styles.backdrop" @click="onBackdrop">
        <div :class="styles.modal" role="dialog" aria-modal="true">
          <div :class="styles.top">
            <div>
              <div :class="styles.h">{{ headline }}</div>
              <div :class="styles.p">{{ text }}</div>
            </div>

            <button class="btn ghost" type="button" @click="emit('close')">
              Закрити
            </button>
          </div>

          <img :src="image" :class="styles.img" alt="Ad image" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ✅ анімація модалки через Transition */
.modal-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.modal-enter-active {
  transition: all 220ms ease;
}
.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-leave-active {
  transition: all 160ms ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
