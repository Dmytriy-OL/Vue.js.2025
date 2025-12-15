import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    totalCount: (s) => s.items.reduce((a, i) => a + i.qty, 0),
    totalPrice: (s) => s.items.reduce((a, i) => a + i.qty * i.price, 0)
  },
  actions: {
    add(product) {
      const found = this.items.find(i => i.id === product.id);
      if (found) found.qty++;
      else this.items.push({ ...product, qty: 1 });
    },
    remove(id) {
      this.items = this.items.filter(i => i.id !== id);
    },
    clear() {
      this.items = [];
    }
  }
});
