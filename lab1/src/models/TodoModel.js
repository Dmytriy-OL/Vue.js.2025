export function createTodo({
  id = Date.now(),
  title = "",
  description = "",
  status = "active", // active | done
  priority = "medium", // low | medium | high
  createdAt = new Date().toISOString(),
} = {}) {
  return {
    id,
    title,
    description,
    status,
    priority,
    createdAt,
  };
}
