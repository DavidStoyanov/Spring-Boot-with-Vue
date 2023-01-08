<template>
    <br/>
    <h2>Tutorials</h2>
    <br/>

    <Transition>
    <div v-if="tutorials">
        <ul class="tutorials">
            <li class="tutorial" v-for="tutorial in tutorials" :key="tutorial.id">
                <h3 class="tutorial-title">{{ tutorial.title }}</h3>
                <p>{{ tutorial.description }}</p>
            </li>
        </ul>
    </div>

    <div v-else>
        <h4>There are no tutorials a t the moment.</h4>
    </div>
    </Transition>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TutorialDataService from "@/services/TutorialDataService";
import type ResponseData from '@/types/ResponseData';
import type { TutorialView } from '@/types/Tutorial';

export default defineComponent({
  name: 'TutorialsList',
  data() {
    return {
        tutorials: [] as TutorialView[]
    }
  },
  methods: {
    retrieveTutorials() {
        TutorialDataService.getAll()
            .then((response: ResponseData) => {
                this.tutorials = response.data;
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
});
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }

    li {
        margin: 1.5rem 0.5rem;
    }

    .tutorial {
        padding: 0.3rem 0.3rem 0.3rem 1rem;
        cursor: pointer;
    }

    .tutorial:hover {
        border-radius: 15px;
        background: #EEE;
    }

    .tutorial:hover .tutorial-title {
        text-decoration: underline;
    }
</style>