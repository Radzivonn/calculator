<template>
	<div class="wrapper" :class="theme === 'light' ? themeClasses[0] : themeClasses[1]">
		
		<headerBlock :theme="theme" @switchTheme="getTheme"/>

		<result-screen :value="value"/>

		<buttons-panel @buttonPressed="displayComputing"/>
	</div>
</template>
 
<script>
import headerBlock from './components/Header';
import resultScreen from './components/ResultScreen';
import buttonsPanel from './components/ButtonsPanel';

export default {
	components: {
		headerBlock,
		resultScreen,
		buttonsPanel
	},

	data() {
		return {
			themeClasses: ['light-theme', 'dark-theme'],
			theme: '',
			value: '',
			operands: [],
			operation: ''
		}
	},

	methods: {
		getTheme(theme) {
			this.theme = theme;
		},

		displayComputing(inputValue) {
			if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(inputValue)) this.value += inputValue;
			else if(['%', '/', '*', '-', '+', '='].includes(inputValue)) {
				this.operands.push(Number(this.value));
				this.operation = inputValue; 
				inputValue, this.value = '';
			}
			else {
				switch(inputValue) {
					case 'AC': 
						inputValue = '';
						this.value = '';
						break;
					case 'X': 
						inputValue = '';
						this.value = (this.value).slice(0, -1);
						break;	
				}
			}
		}
	}
}
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

// single file component