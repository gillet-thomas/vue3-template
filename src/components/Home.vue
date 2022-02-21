<template>
  <div>
    <h1>Hello from home {{ store.name }}</h1>
    <p>Counter {{ counter }}</p>
    <button type="button" class="btn btn-primary" @click="increment()">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import mainStore from '../store/index'

const store = mainStore();
let counter = ref(5);

onMounted(() => {
  store.setName("Thomas");
  counter.value = 7;
});

function increment(){
    counter.value++;
}

</script>

<style scoped lang="scss"></style>
