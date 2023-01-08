<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About'}">About</router-link> |
      <router-link :to="{ name: 'TutorialsList'}">Tutorials List</router-link> |
      <router-link :to="{ name: 'TutorialAdd'}">Add Tutorial</router-link>
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
