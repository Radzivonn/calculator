<template>
  <div class="wrapper" :class="themeClasses[theme]">
    <headerBlock :theme="theme" @switchTheme="getTheme" />

    <result-screen :value="value" />

    <buttons-panel @buttonPressed="buttonHandler" />
  </div>
</template>

<script>
import headerBlock from './components/Header';
import resultScreen from './components/ResultScreen';
import buttonsPanel from './components/ButtonsPanel';
import calculatorHandler from './utils/calculatorHandler';
import { DEFAULT_COLOR_THEME } from './utils/const';

export default {
  components: {
    headerBlock,
    resultScreen,
    buttonsPanel,
  },

  data() {
    return {
      themeClasses: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      theme: DEFAULT_COLOR_THEME,
      value: '',
      operands: [],
      operations: [],
    };
  },

  methods: {
    getTheme(theme) {
      this.theme = theme;
    },

    /**
     * Handling calculator's button click
     * @param {string} inputValue - button meaning
     * @description This function processes clicks and, depending on the button, returns the result to the value variable
     */
    buttonHandler(inputValue) {
      const calculatingResult = calculatorHandler(
        inputValue,
        this.value,
        this.operands,
        this.operations,
      );
      this.value = calculatingResult.value;
      this.operands = calculatingResult.operands;
      this.operations = calculatingResult.operations;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/nullstyle.css';
@import './styles/main.scss';

.wrapper {
  width: 100%;
  height: 100vh;
  transition: $defaultTransitionsConfig;
  overflow: hidden;
  padding: 0 0 70px;
  &.light-theme {
    background-color: $LightThemeBGColor;
    color: $LightThemeFontColor;
  }

  &.wrapper.dark-theme {
    background-color: $DarkThemeBGColor;
    color: $DarkThemeFontColor;
  }
}
</style>
