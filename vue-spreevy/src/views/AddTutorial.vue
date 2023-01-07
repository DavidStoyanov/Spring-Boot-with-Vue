<template>
    <form action="" method="post">
        <label>
            <p>Title:</p>
            <input v-model="tutorial.title" type="text">
        </label>
        <label>
            <p>Description:</p>
            <textarea v-model="tutorial.description" name="" id="" cols="30" rows="10"></textarea>
        </label>

        <br>

        <button @click.prevent="saveTutorial" type="submit">Add tutorial</button>
    </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import TutorialDataService from "@/services/TutorialDataService";
import type Tutorial from '@/types/Tutorial';
import axios from 'axios';

export default defineComponent({
  name: 'AddTutorial',
  data() {
    return {
        tutorial: {
            id: null,
            title: '',
            description: ''
        } as Tutorial
    }
  },
  methods: {
    saveTutorial() {
        TutorialDataService.create(this.tutorial)
            .then((response) => console.log(response))
            /* .then((response: ResponseData) => {
            this.tutorial.id = response.data.id;
            console.log(response.data);
            }) */
            .catch((e: Error) => {
            console.log(e);
            });
    }
  },
  components: {
  }
});
</script>
  
<style>

</style>
  