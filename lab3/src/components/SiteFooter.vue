<template>
  <footer class="footer">
    <div class="container row">
      <div class="muted">© 2025 NewsMini. All rights reserved.</div>
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 18px 0;
  margin-top: 30px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}
.muted {
  color: var(--muted);
  font-size: 13px;
}
.links {
  display: flex;
  gap: 12px;
  color: var(--muted);
}
.links a:hover {
  color: var(--text);
}
</style>
