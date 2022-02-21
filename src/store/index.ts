import { defineStore } from "pinia";

const store = defineStore('main', {
  state: () => ({ name: "Jean" }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
  },
})

export default store;
