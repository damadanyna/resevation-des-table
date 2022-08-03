<template>
  <div class="flex flex-col w-full h-full overflow-x-hidden">
    <div class="flex w-full flex-col bg-white z-30 shadow-lg">
      <div class="py-5"></div>
      <div class="px-3 flex flex-row py-2 justify-between">
        <div class="text-2xl text-gray-600 font-medium"> Mahajanga,401 Madagascar </div>
        <div class="flex flex-row">
          <div class="flex flex-row border border-gray-500 px-3 rounded-lg">
            <input type="text" @change="search(searching_value.toUpperCase())" v-model="searching_value" class="outline-none" />
            <svg class="w-6" viewBox="0 0 24 24">
              <path d="M11.9 10.9a6.505 6.505 0 0 1 9.1-.08V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.06c-.41-.26-.8-.55-1.16-.9a6.525 6.525 0 0 1 0-9.2M12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m8.31 14.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S12 13 12 15.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L22 22.39 23.39 21l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
          </div>
          <div @click="show_popup = true" class="z-50 px-2 flex ml-6 flex-col cursor-pointer items-center" >
            <svg :class="show_popup == true ? 'transform scale-150 ' : ''" class="w-4" viewBox="0 0 24 24" >
              <path d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" />
            </svg>
            <span :class=" show_popup == true ? 'transform scale-125 text-white ' : ''" class="text-xs" >Wahababdely</span >
          </div>
        </div>
      </div>
    </div> 
    <div class="flex h-full w-full bg-gray-200">
      <div class="flex w-full py-4 px-12 justify-end flex-col-reverse max_defined">
        <div v-for="(user, i) in this.$store.state.data.clients"  :key="i" >
          <div  v-if="user.etat!=this.$store.state.params" class="hover:bg-white duration-150 group flex flex-row my-2 items-center transform hover:scale-105 justify-between bg-gray-100 rounded-full px-5 py-2" >
              <div class="flex flex-row">
                <div  v-if="user.etat==true" class="border border-green-500 bg-green-500 group-hover:bg-red-500 group-hover:border-white rounded-full" >
                  <svg class="m-1 w-8" viewBox="0 0 24 24">
                    <path class="fill-current text-white" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                  </svg>
                </div>
                <div  v-if="user.etat==false" class=" opacity-40 border border-green-800 bg-green-800 group-hover:bg-red-500 group-hover:border-white rounded-full" >
                  <svg class="m-1 w-8" viewBox="0 0 24 24">
                    <path class="fill-current text-white" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <span class="group-hover:text-green-600 text-black text-lg font-semibold ml-2" >{{ user.nom + " " + user.prenom }}</span>
                  <span class="group-hover:text-gray-600 text-gray-400 text-xs font-semibold ml-2">{{ "Le "+user.jours+' '+this.mois[user.anne][user.moi]+" "+this.annee[user.anne]+" à " +heure[user.heure-1]+'H:00, '+" Tél: "+user.numTel }}</span>
                </div>
              </div>
              <div  class=" flex">
                <div @click="set_cancel(i)" v-if="user.etat==true">
                  <button   class="group-hover:bg-red-500 cursor-pointer py-1 flex flex-row items-center bg-gray-500 text-white px-4 uppercase rounded-full">
                    <svg class="w-4" viewBox="0 0 24 24">
                      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" />
                    </svg>
                    <svg viewBox="0 0 24 24"><path d="m15.46 15.88 1.42-1.42L19 16.59l2.12-2.12 1.42 1.41L20.41 18l2.13 2.12-1.42 1.42L19 19.41l-2.12 2.13-1.42-1.42L17.59 18l-2.12-2.12M12 3c5.5 0 10 3.58 10 8 0 .58-.08 1.14-.22 1.68A6.005 6.005 0 0 0 13 18l.08.95L12 19c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.14 2 11c0-4.42 4.5-8 10-8z" /></svg>
                    <span class="text-xs"> Annuler</span>
                  </button>
                </div>
                <div @click="set_remove(i)" v-if="user.etat==true">
                  <button   class=" transform hover:scale-150 cursor-pointer flex flex-row items-center mx-4 uppercase rounded-full">
                    <svg class="w-4" viewBox="0 0 24 24">
                      <path class=" fill-current text-stone-600 group-hover:text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"  />
                    </svg> 
                  </button>
                </div>
                <div @click="set_cancel_(i)" v-if="user.etat==false">
                  <button   class="opacity-60 hover:opacity-100 group-hover:bg-indigo-600 cursor-pointer py-1 flex flex-row items-center bg-gray-500 text-white px-4 uppercase rounded-full">
                    <svg class="w-4" viewBox="0 0 24 24">
                      <path d="M12.63 2c5.53 0 10.01 4.5 10.01 10s-4.48 10-10.01 10c-3.51 0-6.58-1.82-8.37-4.57l1.58-1.25C7.25 18.47 9.76 20 12.64 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8C8.56 4 5.2 7.06 4.71 11h2.76l-3.74 3.73L0 11h2.69c.5-5.05 4.76-9 9.94-9m2.96 8.24c.5.01.91.41.91.92v4.61c0 .5-.41.92-.92.92h-5.53c-.51 0-.92-.42-.92-.92v-4.61c0-.51.41-.91.91-.92V9.23c0-1.53 1.25-2.77 2.77-2.77 1.53 0 2.78 1.24 2.78 2.77v1.01m-2.78-2.38c-.75 0-1.37.61-1.37 1.37v1.01h2.75V9.23c0-.76-.62-1.37-1.38-1.37z" />
                    </svg>
                    <span class="text-xs">reserver</span>
                  </button>                               
                </div>
                <div @click="set_remove(i)" v-if="user.etat==false">
                  <button   class=" transform hover:scale-150 cursor-pointer flex flex-row items-center mx-4 uppercase rounded-full">
                    <svg class="w-4" viewBox="0 0 24 24">
                      <path class=" fill-current text-stone-600 group-hover:text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"  />
                    </svg>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-20 right-20">
    <router-link class="" to="/reservation">
      <svg viewBox="0 0 24 24" class="w-11 p-2 transform scale-150 bg-green-500 rounded-full shadowing cursor-pointer" >
        <path class="fill-current text-white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </router-link>
  </div>
  <div v-if="show_popup == true" @click="show_popup = false" class="duration-300 z-50 w-full h-full blures absolute top-0 left-0">
    <div class="flex flex-col absolute px-4 py-6 right-3 top-24 justify-between rounded-xl bg-white w-56">
      <span class="cursor-pointer py-1 text-blue-600 border-b border-gray-400"> wahababdel748@gmail.com</span>
      <router-link class="cursor-pointer py-1 flex flex-row" to="/">
        <svg class="w-7" viewBox="0 0 24 24">
          <path class="fill-current text-slate-500" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>
        </svg>
        <span class="text-slate-500">Page de bienvenue</span>
      </router-link>
      <div class="flex flex-row cursor-pointer">
        <svg class="w-7" viewBox="0 0 24 24">
          <path class="fill-current text-red-600" d="m16.56 5.44-1.45 1.45A5.969 5.969 0 0 1 18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.961 7.961 0 0 0 4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"/>
        </svg>
        <span class="py-1 text-slate-500"  @click="log_out()"> Se Deconnecter ?</span >
      </div>
    </div>
  </div>
  
  <div id="btn_del" class=" opacity-0 bg-green-500 px-12 py-4  flex absolute top-40 -right-80">
    <svg class=" w-7" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
    <span class="text-white">Supprimé</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      liste_boite: [],
      show_popup: false,
      nom_client:[],
      searching_value:'',
      client_temp:this.$store.state.data.clients,
      annee:[2022,2023],
      mois:[['Aôut','Septembre','Octobre','Novembre','Décembre'],['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aôut','Septembre','Octobre','Novembre','Décembre']],
      heure:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    };
  },
  methods:{
    set_cancel(i){
      this.$store.state.data.clients[i].etat=false
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
    },
    set_cancel_(i){
      this.$store.state.data.clients[i].etat=true
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
    },
    set_remove(i){
      this.$store.state.data.clients[i]=""
      var k=[]
      for (let i = 0; i < this.$store.state.data.clients.length; i++) {
        const element = this.$store.state.data.clients[i];
        if(element!=""){
          k.push(element)
        }
      }
      this.$store.state.data.clients=k
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
      document.getElementById('btn_del').classList.add('anime_delete')
      setTimeout(() => {
          document.getElementById('btn_del').classList.remove('anime_delete')
      }, 3000); 
    },
    log_out(){
      this.$store.state.data.user.logged=false
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
      this.show_popup=false
    },
    search(value){ 
      if(value!=''){
        var temp=[] 
        for (let i = 0; i < this.$store.state.data.clients.length; i++) {
          const element = this.$store.state.data.clients[i];
            if(element.nom.toUpperCase().includes(value) || element.prenom.toUpperCase().includes(value)){
              temp.push(element)
              console.log(element)
            }
        }
        this.$store.state.data.clients=temp
      }else{
        this.$store.state.data.clients=this.client_temp
      }
    }
  },
  mounted() {
    //this.search('DANY')
  },
};
</script>
<!-- 0340387982 -->
<style scoped>
#btn_del {
  z-index: 0;
}
.anime_delete{
  animation: anim_ 3s forwards   ;
}
@keyframes anim_ {
  0%{
    right: -320px;
    opacity: 0;
  }
  30%{
    opacity: 1;
    right: 50px;
    transform:rotateX(360deg)
  }
  70%{
    opacity: 1;
    right: 50px;
    transform:rotateX(360deg)
  }
  100%{
    opacity:0;
    right: -320px;
    display: none;
  }
}


.shadowing {
  box-shadow: 0px 0px 34px rgb(83, 83, 83);
}
.blures {
  transition: 0.4ms;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.24);
}
.max_defined{
  max-height: 75vh;
  overflow-y: auto;
}
</style>
