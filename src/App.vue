<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src

import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    TopBar,
  }
};
</script>
<style lang="scss">
body{
  margin : 0;
}
</style>


