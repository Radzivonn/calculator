<template>
	<main class="mainScreen">
		<input type="number" class="mainScreenContent" :value="value" readonly> 
	</main>
</template>

<script>
export default {

	data() {
		return {
		}
	},
	
	props: {
		value: String,
		required: false
	}
}
</script>

<style lang="scss" scoped>
	@import '../styles/main.scss';

	.mainScreen {
		display: flex;
    align-items: end;
		max-width: 560px;
		width: 100%;
		height: 30vh;
		margin: 0 auto;
		padding: 40px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.mainScreenContent {
		width: 100%;
		display: block;
		background-color: inherit;
		font-family: 'Open Sans', sans-serif;
    font-size: 4.5em;
		color: inherit;
		cursor: default;
	}

	@media(min-width: 530px) {
		.mainScreen { 
			max-width: 700px;
		}
		.mainScreenContent {
			font-size: 5em;
		}
	}

	@media(max-width: 391px) {
		.mainScreen { 
			max-width: 390px;
		}

		.mainScreenContent {
			font-size: 4em;
		}
	}
</style>