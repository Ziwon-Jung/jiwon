<template>
  <div class="todo">
    <top-bar :name="'Erin'" />
    <welcome-name />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TaskView',
  mounted() {
  },
  methods: {
    ...mapMutations(['getUserName'])
  }
};
</script>

<style scoped></style>
