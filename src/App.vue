<template>
	<div class="wrapper" :class="theme === 'light' ? themeClasses[0] : themeClasses[1]">
		
		<headerBlock :theme="theme" @switchTheme="getTheme"/>

		<result-screen :value="value"/>

		<buttons-panel @buttonPressed="displayCalculating"/>
	</div>
</template>
 
<script>
import headerBlock from './components/Header';
import resultScreen from './components/ResultScreen';
import buttonsPanel from './components/ButtonsPanel';

/**
 * calculation function
 * @param {String []} actions - array of operations
 * @param {number []} numbers - array of operands(numbers)
 * @returns {String} number in string format for easy display
 * @description Function that returns the result of calculations based on the operations and operands passed to it
 */
function calculate (actions, numbers) {
	let result = numbers[0];
	for(let i = 1; i < numbers.length; i++) {
		switch(actions[i - 1]) {
			case '+':
				result += numbers[i];
				break;
			case '-':
				result -= numbers[i];
				break;
			case '*':
				result *= numbers[i];
				break;
			case '/':
				result /= numbers[i];
				break;
			case '%':
				result /= 100;
				break;
		}
	}
	return result;
}

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
			operations: [],
		}
	},

	methods: {
		getTheme(theme) {
			this.theme = theme;
		},

	  /**
		 * Handling button clicks
		 * @param {string} inputValue - button meaning
		 * @description This function processes clicks and, depending on the button, returns the result to the value variable
		 */
		displayCalculating(inputValue) {
			if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(inputValue)) {
				if((this.value).slice(this.value.length - 2) === '.0') this.value = (this.value).slice(0, -1); // если была поставлена точка разделитель
				this.value += inputValue;
			}
			else if((['+', '-', '*', '/', '%'].includes(inputValue))) {
				this.operands.push(Number(this.value));
				this.operations.push(inputValue);
				inputValue, this.value = '';
			}
			else {
				switch(inputValue) {
					case 'AC': 
						inputValue = '';
						this.value = '';
						this.operations = []
						this.operands = [];
						break;
					case 'X':
						inputValue = '';
						Number(this.value) < 0 && this.value.length === 2 ? this.value = '' : this.value = (this.value).slice(0, -1);
						if((this.value).slice(-1) === '.') this.value = (this.value).slice(0, -1);
						this.operands[-1] = this.value;
						break;	
					case '=':
						this.operands.push(Number(this.value));
						this.value = calculate(this.operations, this.operands);
						this.operations = [];
						this.operands = [];
						this.value = String(this.value);
						break;
					case '.':
						if(!this.value.includes('.')) this.value += inputValue + '0';
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