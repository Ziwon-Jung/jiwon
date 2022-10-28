<template>
  <div class="textfield">
    <div class="textfield__left">
      <input
        ref="textInput"
        v-model="text"
        :class="['textfield__left__input', type === 'none' ? 'none' : 'border']"
        type="text"
        aria-label="text-input"
        :placeholder="placeholder"
        @keydown.enter="onClickSend"
        @focus="onFocus"
        @blur="onBlur"
      />
      <img
        v-show="correctText"
        class="textfield__left__delete"
        src="../assets/ic_delete.svg"
        alt="icon"
        @mousedown="onClickRemove"
      />
    </div>
    <img v-if="correctText" class="textfield__send" src="../assets/ic_send_hov.svg" alt="icon" @mousedown="onClickSend" />
    <img v-else class="textfield__send" src="../assets/ic_send_nor.svg" alt="icon" />
  </div>
</template>

<script>
import store from "@/store";
import { mapMutations } from 'vuex';

export default {
  name: 'TextField',
  props: {
    placeholder: {
      required: false,
      type: String,
      default: '',
    },
    disable: {
      required: false,
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'none',
    },
  },
  data() {
    return { text: '' };
  },
  computed: {
    correctText() {
      return this.text.length > 0;
    },
  },
  mounted() {
    this.$refs.textInput.focus();
  },
  methods: {
    ...mapMutations(['setUserName', 'getUserName']),
    onFocus(e) {
      e.target.style.borderWidth = '0px 0px 1px 0px';
      e.target.style.borderBottomColor = 'blue';
      e.target.style.outline = 'none';
      e.target.placeholder = '';
    },
    onBlur(e) {
      e.target.style.borderWidth = '0px 0px 1px 0px';
      e.target.style.borderBottomColor = '#CCCCCC';
      e.target.style.outline = 'none';
      e.target.placeholder = 'input your name';
    },
    onClickRemove(e) {
      e.preventDefault();
      this.text = '';
      this.$refs.textInput.focus();
    },
    onClickSend(e) {
      e.preventDefault();
      // this.$router.push('/todo');
      const userName = this.text;
      this.setUserName(userName);
      console.log("name :", userName, this.getUserName())
    },
  },
};
</script>

<style scoped lang="scss">
.none {
  border-width: 0px 0px 1px 0px;
}

.none-width {
  width: 628px;
  height: 24px;
}

.border {
  border-width: 1px;
  border-radius: 4px;
}

.border-width {
  width: 1128px;
  height: 48px;
}

.textfield {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 680px;
  height: 32px;
  left: 120px;
  top: 304px;

  &__left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;

    &__input {
      width: 100%;
      height: 100%;
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-bottom-color: #cccccc;
      outline: none;
    }

    &__delete {
      position: absolute;
    }
  }

  &__send {
    width: 24px;
    height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
}
</style>
