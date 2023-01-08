<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tutorials">Tutorials List</router-link> |
      <router-link to="/add">Add Tutorial</router-link>
    </nav>
  </header>

  <main>
    <router-view/>
  </main>

  <footer>

  </footer>
</template>

<script setup lang="ts">

</script>

<style>
@import './assets/base.css';

#app {

}

</style>
