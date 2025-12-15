export const articles = [
  {
    id: 1,
    title: "Vue 3: що нового та чому це зручно",
    excerpt:
      "Коротко про Composition API, реактивність та підхід до компонентів у Vue 3.",
    date: "2025-12-01",
    image: "https://picsum.photos/seed/vue3/900/420",
    content: `
Vue 3 став швидшим і гнучкішим. Найчастіше використовують Composition API,
бо логіка компонентів стає простішою для підтримки.

У цій новині: як працює setup(), що таке ref/reactive, і чому це зручно.
    `.trim(),
  },
  {
    id: 2,
    title: "Vue Router 4: маршрути, сторінки, анімації",
    excerpt:
      "Як зробити Home/Article/About, додати NotFound і підключити Transition між сторінками.",
    date: "2025-12-05",
    image: "https://picsum.photos/seed/router/900/420",
    content: `
Vue Router 4 — стандарт для Vue 3. Тут важливо: createWebHistory, вкладені сторінки,
scrollBehavior і guard'и (якщо потрібно).

Додатково: можна робити плавні переходи між сторінками через Transition + RouterView slot.
    `.trim(),
  },
  {
    id: 3,
    title: "Teleport у Vue: модалки без болю",
    excerpt:
      "Teleport дозволяє рендерити модалку в body, навіть якщо компонент глибоко в дереві.",
    date: "2025-12-10",
    image: "https://picsum.photos/seed/teleport/900/420",
    content: `
Teleport — корисна штука для модалок, дропдаунів і підказок.
Модалка рендериться в <body>, тому немає проблем із z-index та overflow.

У роботі модалка також має Transition (анімація появи/закриття).
    `.trim(),
  },
];
