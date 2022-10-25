<template>
  <div class="topbar">
    <div class = "topbar__left">
      <img src="../assets/ic_topbar_menu.svg" alt="icon"/>
      <div class="topbar__left__title">Erin-ToDo </div>
    </div>

    <div class = "topbar__right">
      {{date}}
    </div>

  </div>

</template>

<script>
export default {

  name: 'TopBar',
  data(){return{date: this.makeDate()}},
  methods:{
    makeDate(){

      const today = new Date();
      const weeks = ['Son', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const month = today.getMonth() +1;
      const todayDate = today.getDate();
      const day = weeks[today.getDay()];
      const dateFormat = `${month  }/${  todayDate  }  ${  day}` ;
      return dateFormat ;
    }
  }

};
</script>

<style scoped lang="scss">
$font-family : 'Roboto';
.topbar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #6C77A7;
  height: 50px;
  &__left{
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 200px;
    height: 28px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-left : 10px;
    &__title{
      width: 150px;
      height: 28px;
      font-family: $font-family;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #FFFFFF;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
  &__right{
    width: 100px;
    height: 19px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
}
</style>
