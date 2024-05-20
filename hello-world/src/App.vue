<template>
  <div id="HelloWorld">
    <header>
      <h1>{{ message }}</h1>
    </header>
  </div>
</template>

<script>
import api from './api';

export default {
  name: 'App',
  data() {
    return {
      message: '',
    };
  },
  created() {
    this.fetchMessage();
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await api.getMessage();
        this.message = response.data.message;
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
