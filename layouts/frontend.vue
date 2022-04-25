<template>
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Title>Nuxt 3 Frontend Layout</Title>
      <Meta name="description" content="My app description" />
      <Link rel="icon" type="image/png" href="/logo.png"></Link>
    </Head>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="/logo.png" alt="esam eisa" height="70" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<style>
.router-link-active {
  font-weight: 700;
}
</style>
