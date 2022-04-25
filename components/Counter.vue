<template>
  <div>
    <h1>Counter: {{ counter || 0 }}</h1>
    <button type="button" class="btn btn-info rounded-0 mx-2" @click="counter = null">Reset</button>
    <button type="button" class="btn btn-danger rounded-0" @click="counter--">-</button>
    <button type="button" class="btn btn-primary rounded-0" @click="counter++">+</button>
  </div>
</template>

<script setup>
const counter = useCookie("counter");
counter.value = counter.value || Math.round(Math.random() * 1000);
</script>
