<template>
  <div class="home">
    <div class="home__welcome">
      <div>Welcome Newbie!!</div>
      <div> MyTodo makes it easy to stay organized and manage your life.</div>
    </div>
    <div class="home__ask">What is your name?</div>
    <TextField placeholder="input your name" :type="'border'" />
  </div>

</template>
<script>
import TextField from '@/components/TextField.vue';

export default {
  components: {
    TextField,
  }
};
</script>
<style scoped lang="scss">
$font-family : 'Roboto';
.home{
  &__welcome{
    position: absolute;
    width: 1000px;
    height: 84px;
    left: 120px;
    top: 108px;
    font-family: &font-family;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 42px;
    /* or 150% */
    color: #2C3E50;
  }
  &__ask{
    position: absolute;
    width: 800px;
    height: 72px;
    left: 120px;
    top: 216px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #2C3E50;
  }
}
</style>
