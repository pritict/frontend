<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ count }}</p>
		<v-btn color="info" @click="count++">
			add
		</v-btn>

		<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>J</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
	</div>	
</template>
<script>
export default {
	name : 'mainPage',
	props : {
		drawer : Boolean,
  },
	data () {
		return {
			title : "MainTitle",
			count : 0,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ]
		}
  },
  mounted () {
    this.$axios.get('/api/getdata', {
      headers: {
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Headers' : 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
           },
      withCredentials: true
    })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
  }
}
</script>