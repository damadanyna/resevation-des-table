<template>
  <div v-if="this.$store.state.data.user.logged==true" class="flex flex-row h-screen w-screen  overflow-x-hidden">
    <nav_bar  class=" overflow-x-hidden z-40 w-2/4 md:w-2/6 lg:w-1/5 "/>
    <div class=" z-20 w-3/4 lg:w-4/5 xl:w-full md:w-4/5 h-full flex flex-col">  
      <router-view class=" bg-gray-200 w-full"/>
      <div class="shadowing footer items-center  bg-white flex justify-center py-5">
        <div class=" mx-3 flex justify-center items-center rounded-full border h-5 w-5 border-gray-600 ">  
          <span class=" -mt-2 text-2xl ">c</span> 
        </div> 
        <span class=" text-2xl">all right served 2022</span>  
      </div>
    </div>
  </div>
  <div v-else class="flex w-full  h-full flex-row justify-center items-center px-5">
    <div class=" flex flex-row">
      <div class="  hidden md:flex mx-6  flex-col justify-center text-center">
        <span class=" text-stone-700 text-7xl animate-bounce">Bienvénue </span>
        <span class=" text-gray-400">Gestion de table version 1.0.0</span>
        <span class=" text-green-600 text-2xl font-bold" >wahababdel748@gmail.com </span>
      </div>
      <div class=" flex flex-col mx-32">
            <span class=" text-5xl text-gray-400 mb-8 text-center py-3 font-semibold">Connexion</span>

            <div class="flex w-72  flex-col ml-10">
                <div class=" mb-4 flex flex-col"  >
                    <span class="  text-stone-600"> Nom d'utilisateur</span>
                    <input v-model="name" autocomplete="none"  class=" rounded-lg px-5 py-1 border border-stone-400 text-gray-800 outline-none  focus:border-green-500" >
                </div>
            </div>
            <div class="flex w-72  flex-col ml-10">
                <div class=" mb-4 flex flex-col"  >
                    <span class="  text-stone-600">Votre mots de passe</span>
                    <input  v-model="pwd" autocomplete="none"  type="password"  class=" rounded-lg px-5 py-1 border border-stone-400 text-gray-800 outline-none  focus:border-green-500" >
                </div>
            </div>
            <span v-if="errone==false" class=" ml-11 text-stone-400 ">Remplissez la formulaire</span>
            <span v-if="errone==true" class=" ml-11 text-red-500 ">Erreur de connexion</span>
            <div class="flex w-72  flex-col ml-10">
              <button @click="log_in(name,pwd)" class=" bg-green-500 flex flex-row justify-center py-2 rounded-full">
                <svg class=" w-7" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" /></svg>
                <span class="  text-white uppercase">valider</span>
              </button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav_bar from "./components/nav_bar.vue";

export default {
  components:{nav_bar},
  name: 'HelloWorld',
  data(){
    return{
      name:"",
      pwd:"",
      text:"",
      errone:false
    }
  },
  methods:{
    log_in(m,p){
      var principal=this.$store.state.data.user;
      if(m==principal.nom){
        if(p==principal.pwd){
          this.errone=false
          this.$store.state.data.user.logged=true
          window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
          console.log(JSON.stringify(this.$store.state.data))
          this.name=""
          this.pwd=""
        }else{
          this.errone=true
        }
      }else{
        this.errone=true
      }
    }
  },
  props: {
    msg: String
  },
  mounted(){
    /* if(this.$store.state.data.length<=window.localStorage.getItem('mi').length ){ */
      this.$store.state.data=JSON.parse(window.localStorage.getItem('mi'))
    /* }else if(window.localStorage.getItem('mi').length< this.$store.state.data.length){
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
    } */
  }
}
</script>

<style >
.footer{
  color: gray;
}

.shadowing{
  box-shadow: 0px 0px 15px rgb(175, 175, 175);
}
</style>
