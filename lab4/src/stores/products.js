import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    list: [
      { id: 1, title: "Vue Book", price: 500 },
      { id: 2, title: "Pinia Guide", price: 300 },
      { id: 3, title: "VeeValidate Course", price: 700 }
    ]
  })
});
