<script setup>
import { ref, reactive, computed, watch } from "vue";
import TodoList from "./components/TodoList.vue";
import { createTodo } from "./models/TodoModel";


// =====================
//   ЗАВДАННЯ 1
// =====================

// ref — реактивне значення
const counter = ref(0);
const message = ref("Привіт, Vue 3!");

// reactive — реактивний об'єкт
const user = reactive({
  name: "Дмитро",
  age: 20,
});

// функції
function increment() {
  counter.value++;
}
function decrement() {
  counter.value--;
}

// computed
const doubleCounter = computed(() => counter.value * 2);

// watch
watch(counter, (newVal, oldVal) => {
  console.log(`Counter змінено: ${oldVal} → ${newVal}`);
});

// список для v-for
const items = ref(["Vue", "Vite", "Composition API"]);
function addItem() {
  items.value.push(`Елемент №${items.value.length + 1}`);
}

// =====================
//   ЗАВДАННЯ 3
// =====================

const taskExamples = [
  createTodo({
    title: "Приклад 1",
    description: "Опис першого завдання",
    priority: "high",
  }),
  createTodo({
    title: "Приклад 2",
    description: "Опис другого завдання",
    priority: "medium",
  }),
  createTodo({
    title: "Приклад 3",
    description: "Опис третього завдання",
    priority: "low",
  }),
];
</script>

<template>
  <div class="container">

    <!-- ===================== -->
    <!--    ЗАВДАННЯ 1         -->
    <!-- ===================== -->

    <h1>Лабораторна робота №1 — Завдання 1</h1>

    <!-- v-model -->
    <input v-model="message" placeholder="Введіть повідомлення" />
    <p>Ви написали: {{ message }}</p>

    <!-- ref -->
    <h2>Лічильник: {{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <!-- computed -->
    <p>Подвоєний лічильник: {{ doubleCounter }}</p>

    <!-- reactive -->
    <h3>Реактивний користувач</h3>
    <p>Імʼя: {{ user.name }}</p>
    <p>Вік: {{ user.age }}</p>

    <!-- v-for -->
    <h3>Список елементів</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }} — {{ item }}
      </li>
    </ul>
    <button @click="addItem">Додати елемент</button>

    <!-- v-if / v-show -->
    <div v-if="counter > 5" style="color: green">
      Лічильник більше за 5!
    </div>

    <p v-show="counter > 10" style="color: red">
      Секретне повідомлення при counter > 10
    </p>

    <hr />

    <!-- ===================== -->
    <!--    ЗАВДАННЯ 3         -->
    <!-- ===================== -->

    <h1>Лабораторна робота №1 — Завдання 3</h1>

    <ul>
      <li v-for="t in taskExamples" :key="t.id" style="margin-bottom: 10px">
        <strong>{{ t.title }}</strong> — {{ t.description }}<br />
        <small>
          ID: {{ t.id }} |
          Статус: {{ t.status }} |
          Пріоритет: {{ t.priority }} |
          Створено: {{ new Date(t.createdAt).toLocaleString() }}
        </small>
      </li>
    </ul>

    <hr />

    <!-- ===================== -->
    <!--    ЗАВДАННЯ 2 (TODO)  -->
    <!-- ===================== -->

    <h1>Лабораторна робота №1 — Завдання 2,3,4</h1>
    <TodoList />

  </div>
</template>

<style>
.container {
  width: 600px;
  margin: 20px auto;
  font-family: Arial;
}
button {
  margin-right: 10px;
  padding: 6px 12px;
}
input {
  padding: 6px 10px;
  margin-bottom: 12px;
}
hr {
  margin: 40px 0;
}
</style>
