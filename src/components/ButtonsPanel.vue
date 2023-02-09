<template>
		<div class="buttons-panel">
			<button 
			class="button" 
			@click="buttonPressed"
			v-for="button in buttons"
			:key="button.id"
			:id="button.id"
			>
				<p :style="{color: button.color}">
					{{button.content}}
				</p>
			</button>
		</div>
</template>

<script>
export default {
	data() {
		return {
			buttons: [
				{id: 1, content: 'AC', color: 'rgb(224, 133, 28)'},
				{id: 2, content: 'X', color: 'rgb(224, 133, 28)'},
				{id: 3, content: '%', color: 'rgb(224, 133, 28)'},
				{id: 4, content: '/', color: 'rgb(224, 133, 28)'},
				{id: 5, content: '7'},
				{id: 6, content: '8'},
				{id: 7, content: '9'},
				{id: 8, content: '*', color: 'rgb(224, 133, 28)'},
				{id: 9, content: '4'},
				{id: 10, content: '5'},
				{id: 11, content: '6'},
				{id: 12, content: '-', color: 'rgb(224, 133, 28)'},
				{id: 13, content: '1'},
				{id: 14, content: '2'},
				{id: 15, content: '3'},
				{id: 16, content: '+', color: 'rgb(224, 133, 28)'},
				{id: 17, content: ''},
				{id: 18, content: '0'},
				{id: 19, content: '.'},
				{id: 20, content: '=', color: 'rgb(224, 133, 28)'},
			]
		}
	},

	methods: {
		buttonPressed(e) {
			this.$emit('buttonPressed', e.target.textContent);
		}
	}

}
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

	@media(min-width: 530px) {
		.buttons-panel {
			max-width: 700px;
			grid-template-columns: repeat(4, 100px);
			grid-template-rows: repeat(5, 100px);
		}

		.button {
			font-size: 2.5em;
		}
	}

	@media(max-width: 391px) {
		.buttons-panel {
			min-width: 320px;
			grid-template-columns: repeat(4, 40px);
			grid-template-rows: repeat(5, 40px);
		}
	}

</style>