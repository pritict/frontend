<template>
  <v-sheet
    height="100"
    class="overflow-hidden"
    align="center"
    style="background-color:skyblue;"
  >
    <v-container class="fill-height" style="background-color:blue;margin:1px;padding:1px;">
      <v-row
        align="center"
        justify="center"
        style="background-color:skyblue;"
      >
      <label class="label" @click="goPage('/')"><b>Jeong's Page</b></label>
        <v-col>
          <v-btn v-bind:style="styleObject" dark @click="goPage('/todo')">
            Todo
          </v-btn>
        </v-col>
        <v-col>
         <v-btn
          v-bind:style="styleObject" dark @click="goPage('/calcul')">
          Calcul
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          v-bind:style="styleObject" dark @click="goPage('/kakaoapi')">
          KakaoApi
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          v-bind:style="styleObject" dark @click=showdrawer>
          Title4
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
	props : {
    title : String,
    drawer : Boolean
	},
    data () {
      return {
        styleObject: {
          color: 'white'
        }
      }
    },
  methods :{
    goPage(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    showdrawer() {
      this.$emit('showdrawer')
    }
  }

}
</script>
<style>
  .label {
    font-size: 20px;
    background-color: azure;
    padding: 10px;
    margin: 10px;
  }
</style>