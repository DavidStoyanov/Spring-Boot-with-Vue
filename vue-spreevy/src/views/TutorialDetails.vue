<template>
  <br/>
  <h2>Tutorial #{{id}} - Details</h2>
  <br/>
  <div>
    <h3>{{ tutorial.title }}</h3>
    <p>{{ tutorial.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TutorialDataService from "@/services/TutorialDataService";
import type ResponseData from '@/types/ResponseData';
import type { TutorialView } from '@/types/Tutorial';

export default defineComponent({
  name: 'TutorialsList',
  props: {
    id: {
      type: [ String, Number ],
      required: true
    }
  },
  data() {
    return {
        tutorial: {} as TutorialView
    }
  },
  methods: {
    retrieveTutorial() {
        TutorialDataService.get(this.id)
            .then((response: ResponseData) => {
                this.tutorial = response.data;
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
  },
  mounted() {
    this.retrieveTutorial();
  }
})
</script>

<style>

</style>