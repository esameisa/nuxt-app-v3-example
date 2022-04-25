<template>
  <NuxtLayout name="frontend">

    <Title>{{ post.title }}</Title>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="my-4">
            <h1>{{ post.title }}</h1>
            <p class="lead">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();

const { data: post } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts/" + route.params.id
);
</script>
