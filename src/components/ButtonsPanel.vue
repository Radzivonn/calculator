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
		buttonPressed() {
			console.log(this);
		}
	}

	// props: {
	// 	buttons: {
	// 		type: Array,
	// 		required: true
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
	.buttons-panel {
		width: 100%;
		height: 60vh;
		display: grid;
		grid-template-columns: repeat(4, 70px);
		grid-template-rows: repeat(5, 70px);
		justify-content: space-between;
    align-content: space-evenly;
		padding: 20px;
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
			transition: all 0.3s ease 0s;
			&:hover {
				background-color: rgba($color: #d8d5d5, $alpha: 0.3);
			}
		}

</style>

			<!-- <div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
			<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
			<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
			<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
			<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div>
				<div><p>1</p></div> -->