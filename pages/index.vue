<template>
  <NuxtLayout name="frontend">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 text-center align-self-center h3">
          <Counter></Counter>
        </div>
        <div class="col-sm-4 text-center align-self-center h3">
          <p>Mouse: x: {{ x }} y: {{ y }}</p>
        </div>
        <div class="col-sm-4 text-center align-self-center h3">
          <p>
            The weather in {{ weather.sys.country }} is:
            {{ weather.weather[0].main }}
          </p>
        </div>
      </div>
    </div>

    <hr> <!-- horizontal line -->

    <Posts></Posts>
  </NuxtLayout>
</template>

<script setup>
const { x, y } = useMouse();

const { data: weather } = await useFetch("/api/weather");
</script>
