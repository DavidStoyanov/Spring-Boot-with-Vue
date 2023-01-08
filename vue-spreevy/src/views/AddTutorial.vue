<template>
    <br/>
    
    <div v-if="!submitted">
        <h2>Add Tutorial</h2>
        <form action="" method="post">
        <label>
            <p>Title:</p>
            <input v-model="tutorial.title" type="text">
        </label>
        <label>
            <p>Description:</p>
            <textarea v-model="tutorial.description" name="" id="" cols="30" rows="10"></textarea>
        </label>

        <br/>

        <button @click.prevent="saveTutorial" type="submit">Add tutorial</button>
    </form>
    </div>

    <div v-else>
        <h4>Everything done. Thank you for submitting the tutorial!</h4>
        <button @click="newTutorial">Add another tutorial</button>
    </div>
    
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import TutorialDataService from "@/services/TutorialDataService";
import type ResponseData from '@/types/ResponseData';
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
        } as Tutorial,
        submitted: false
    }
  },
  methods: {
    saveTutorial() {
        TutorialDataService.create(this.tutorial)
            .then((response: ResponseData) => {
                this.tutorial.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
            })
            .catch((e: Error) => {
                console.log(e);
            });
    },
    newTutorial() {
        this.submitted = false;
        this.tutorial = {} as Tutorial;
    }
  },
  components: {
  }
});
</script>
  
<style>

</style>
  