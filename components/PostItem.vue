<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">{{ props.post.title }}</h5>
        <p class="card-text">{{ props.post.body }}</p>
        <nuxt-link :to="`/posts/${props.post.id}`" class="card-link">
          More Details
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});
</script>
