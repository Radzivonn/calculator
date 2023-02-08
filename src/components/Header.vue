<template>
	<header class="header">
		<img 
		:src="require(`@/assets/svg/${theme === 'light' ? pathToThemeIcons[1] : pathToThemeIcons[0]}.svg`)" 
		@click="toggleTheme" id="theme-icon">
	</header>
</template>

<script>
export default {

	data() {
		return {
			pathToThemeIcons: ['sun', 'moon'],
			theme: 'dark'
		}
	},

	methods: {
		toggleTheme() {
			this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
			this.$emit('switchTheme', this.theme)
		}
	},

}
</script>

<style lang="scss" scoped>

	@import '../styles/main.scss';

	.header {
		width: 100%;
		height: 10vh;
	}

	#theme-icon {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		transition: $defaultTransitionsConfig;
		&:hover {
			opacity: 0.8;
		}
		&:active {
			transform: scale(0.9);
		}
	}

</style>