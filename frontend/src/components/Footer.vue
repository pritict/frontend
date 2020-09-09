<template>
	<v-row align="center">
		<v-col align="center">
			{{ getnowDate() | moment('YYYY-MM-DD') }}
		</v-col>
	</v-row>
</template>
<script>
export default {
	methods : {
		getnowDate () {
			var now = new Date();
			return now;
		}
	}
}
</script>