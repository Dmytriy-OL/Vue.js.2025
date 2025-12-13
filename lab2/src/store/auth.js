import { ref } from "vue";

export const auth = {
  isAuth: ref(false),
  login(username, password) {
    if (username === "admin" && password === "1234") {
      this.isAuth.value = true;
      return true;
    }
    return false;
  },
  logout() {
    this.isAuth.value = false;
  },
};
