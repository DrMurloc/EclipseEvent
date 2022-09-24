<template>
    <v-app>
        <Home-Page/>
    </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage
    }
});
</script>