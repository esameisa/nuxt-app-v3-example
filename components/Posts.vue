<template>
  <div class="container my-5">
    <div class="row">
      <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});

const { data: posts } = await useFetch("posts", {
  baseURL: "https://jsonplaceholder.typicode.com/",
});
</script>
