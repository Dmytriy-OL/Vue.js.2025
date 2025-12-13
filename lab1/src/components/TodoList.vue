<script setup>
import { ref, computed, watch } from "vue";
import { createTodo } from "../models/TodoModel";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

/* ---------------------------
    LOCAL STORAGE INIT
-----------------------------*/

const stored = localStorage.getItem("todos");
const todos = ref(stored ? JSON.parse(stored) : []);

/* ---------------------------
    FORM FIELDS
-----------------------------*/

const title = ref("");
const description = ref("");
const priority = ref("medium");
const dateFrom = ref(null);
const dateTo = ref(null);
const filterStatus = ref("all");

const editId = ref(null);

/* ---------------------------
      ADD TASK
-----------------------------*/

function addTodo() {
  if (!title.value.trim()) return alert("Введіть назву");
  if (!description.value.trim()) return alert("Введіть опис");

  todos.value.push(
    createTodo({
      title: title.value,
      description: description.value,
      priority: priority.value,
    })
  );

  resetForm();
}

function resetForm() {
  title.value = "";
  description.value = "";
  priority.value = "medium";
  editId.value = null;
}

/* ---------------------------
      EDIT TASK
-----------------------------*/

function startEdit(task) {
  editId.value = task.id;
  title.value = task.title;
  description.value = task.description;
  priority.value = task.priority;
}

function saveEdit() {
  const t = todos.value.find((x) => x.id === editId.value);
  if (!t) return;

  t.title = title.value;
  t.description = description.value;
  t.priority = priority.value;

  resetForm();
}

/* ---------------------------
      DELETE TASK
-----------------------------*/

function removeTask(id) {
  todos.value = todos.value.filter((t) => t.id !== id);
}

/* ---------------------------
  TOGGLE active/done
-----------------------------*/

function toggleStatus(id) {
  const t = todos.value.find((t) => t.id === id);
  t.status = t.status === "active" ? "done" : "active";
}

/* ---------------------------
   WATCH — SAVE TO LOCALSTORAGE
-----------------------------*/

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

/* ---------------------------
         FILTERING
-----------------------------*/

const filteredTodos = computed(() => {
  return todos.value.filter((t) => {
    const matchTitle = t.title
      .toLowerCase()
      .includes(titleFilter.value.toLowerCase());
    const matchDescription = t.description
      .toLowerCase()
      .includes(descFilter.value.toLowerCase());
    const matchPriority =
      priorityFilter.value === "all" || t.priority === priorityFilter.value;
    const matchStatus =
      filterStatus.value === "all" || t.status === filterStatus.value;

    const created = new Date(t.createdAt);

    const matchDateFrom = !dateFrom.value || created >= dateFrom.value;
    const matchDateTo = !dateTo.value || created <= dateTo.value;

    return (
      matchTitle &&
      matchDescription &&
      matchPriority &&
      matchStatus &&
      matchDateFrom &&
      matchDateTo
    );
  });
});

/* FILTER INPUTS */
const titleFilter = ref("");
const descFilter = ref("");
const priorityFilter = ref("all");

/* CLEAR FILTERS */

function clearFilters() {
  titleFilter.value = "";
  descFilter.value = "";
  priorityFilter.value = "all";
  filterStatus.value = "all";
  dateFrom.value = null;
  dateTo.value = null;
}

/* ---------------------------
   COUNTERS (computed)
-----------------------------*/

const total = computed(() => todos.value.length);
const active = computed(() =>
  todos.value.filter((t) => t.status === "active").length
);
const completed = computed(() =>
  todos.value.filter((t) => t.status === "done").length
);
</script>

<template>
  <div class="todo-container">
    <h2>To-Do (Завдання 4)</h2>

    <!-- FORM -->
    <input v-model="title" class="todo-input" placeholder="Назва" />
    <textarea
      v-model="description"
      class="todo-input"
      placeholder="Опис"
    ></textarea>

    <select v-model="priority" class="todo-input">
      <option value="low">Низький</option>
      <option value="medium">Середній</option>
      <option value="high">Високий</option>
    </select>

    <button @click="editId ? saveEdit() : addTodo()" class="btn primary">
      {{ editId ? "Зберегти" : "Додати" }}
    </button>

    <button v-if="editId" @click="resetForm" class="btn secondary">
      Скасувати
    </button>

    <hr />

    <!-- FILTERS -->
    <h3>Фільтри</h3>

    <input
      v-model="titleFilter"
      class="todo-input"
      placeholder="Фільтр за назвою"
    />

    <input
      v-model="descFilter"
      class="todo-input"
      placeholder="Фільтр за описом"
    />

    <select v-model="priorityFilter" class="todo-input">
      <option value="all">Всі пріоритети</option>
      <option value="low">Низький</option>
      <option value="medium">Середній</option>
      <option value="high">Високий</option>
    </select>

    <select v-model="filterStatus" class="todo-input">
      <option value="all">Всі статуси</option>
      <option value="active">Активні</option>
      <option value="done">Виконані</option>
    </select>

    <!-- DATE PICKERS -->
    <VueDatePicker v-model="dateFrom" placeholder="Дата від" />
    <VueDatePicker v-model="dateTo" placeholder="Дата до" />


    <button @click="clearFilters" class="btn small">Очистити фільтри</button>

    <hr />

    <!-- LIST -->
    <ul class="todo-list">
      <li v-for="t in filteredTodos" :key="t.id">
        <div>
          <strong>{{ t.title }}</strong> — {{ t.description }} <br />
          <small>
            Статус: {{ t.status }} |
            Пріоритет: {{ t.priority }} |
            {{ new Date(t.createdAt).toLocaleString() }}
          </small>
        </div>

        <div class="actions">
          <button class="btn small" @click="toggleStatus(t.id)">✔</button>
          <button class="btn small" @click="startEdit(t)">✏</button>
          <button class="btn small danger" @click="removeTask(t.id)">🗑</button>
        </div>
      </li>
    </ul>

    <!-- COUNTERS -->
    <p>Всього: {{ total }} | Активні: {{ active }} | Виконані: {{ completed }}</p>
  </div>
</template>

<style scoped>
.todo-container {
  width: 650px;
  margin: 20px auto;
  padding: 20px;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 6px #0002;
}

.todo-input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.primary {
  background: #3b82f6;
  color: #fff;
}
.secondary {
  background: #777;
  color: #fff;
}
.small {
  padding: 4px 6px;
  font-size: 14px;
}
.danger {
  background: #ef4444;
  color: white;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
