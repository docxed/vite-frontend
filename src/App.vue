<template>
  <div id="Main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/"><b>Vite Crud</b></router-link>
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/create">Create</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/retrieve"
                >Retrieve</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/update">Update</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/delete">Delete</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-5 container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap");
#Main {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>
