<template>
	<div class="header">
{{title}}11111
	<v-navigation-drawer>
		<v-list>
		</v-list>
	</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'header',
	props : {
		title : String
	},
	data: () => {
		return {

		}
	}
}
</script>