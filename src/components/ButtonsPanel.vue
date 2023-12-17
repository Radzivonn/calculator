<template>
  <div class="buttons-panel">
    <button
      class="button"
      @click="buttonPressed"
      v-for="button in buttons"
      :key="button.id"
      :id="button.id"
    >
      <p :style="{ color: button.color }">
        {{ button.content }}
      </p>
    </button>
  </div>
</template>

<script>
import BUTTONS from '../utils/buttons';

export default {
  data() {
    return {
      buttons: BUTTONS,
    };
  },

  methods: {
    buttonPressed(e) {
      this.$emit('buttonPressed', e.target.textContent);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.buttons-panel {
  max-width: 530px;
  min-width: 400px;
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-template-rows: repeat(5, 70px);
  justify-content: space-between;
  align-content: space-evenly;
  padding: 0 20px 40px;
  margin: 0 auto;
}

.button {
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  color: inherit;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  background-color: rgba($color: #d8d5d5, $alpha: 0);
  transition: $defaultTransitionsConfig;
  &:hover {
    background-color: rgba($color: #d8d5d5, $alpha: 0.3);
  }
}

@media (min-width: 530px) {
  .buttons-panel {
    max-width: 700px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(5, 100px);
  }

  .button {
    font-size: 2.5em;
  }
}

@media (max-width: 391px) {
  .buttons-panel {
    min-width: 320px;
    grid-template-columns: repeat(4, 40px);
    grid-template-rows: repeat(5, 40px);
  }
}
</style>
