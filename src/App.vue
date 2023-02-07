<template>
	<div class="wrapper" :class="theme === 'light' ? themeClasses[0] : themeClasses[1]">
		
		<headerBlock :theme="theme" @switchTheme="getTheme"/>

		<result-screen/>

		<buttons-panel/>
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
		}
	},

	methods: {
		getTheme(theme) {
			this.theme = theme;
		}
	}

}
</script>

<style lang="scss">

@import './assets/nullstyle.css';

$defaultTransitionsConfig: all 0.3s ease 0s;
$LightThemeFontColor: rgb(110, 110, 110);
$LightThemeBGColor: white;
$DarkThemeBGColor: #0d0e0e;
$DarkThemeFontColor: whitesmoke;
// $LightThemeButtonBGcolor: #d8d5d5

.wrapper {
	width: 100%;
	height: 100vh;
	transition: $defaultTransitionsConfig;
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