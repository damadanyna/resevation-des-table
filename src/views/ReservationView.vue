<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex w-full flex-col bg-white z-30 shadow-lg ">
      <div class=" py-5"></div>
      <div class=" px-3 flex flex-row py-2 justify-between">
        <div class=" text-2xl text-stone-600 font-medium">Réservation</div>
        <div class=" flex flex-row">
          <div @click="show_popup=true" class=" z-30  px-2 flex ml-6 flex-col cursor-pointer items-center">
            <svg :class=" show_popup==true?'transform scale-150 ':''" class=" w-4" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" /></svg>
            <span :class=" show_popup==true?'transform scale-125 text-white ':''" class=" text-xs">Jaspy</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col h-full justify-center bg-gray-200">
      <div class="flex flex-row justify-center w-full items-center">
          <div class="flex w-72  flex-col mr-10">
              <div class=" mb-4 flex flex-col" v-for="item,i in liste_input" :key="i">
                  <span class="  text-stone-600">{{item.label}}</span>
                  <input v-model="item.value" class=" rounded-lg  px-5 py-1 border-stone-400 text-gray-800 outline-none border focus:border-green-500" :type="item.type">
              </div>
          </div>
          <div class="flex w-72  flex-col ml-10">
              <div class=" mb-4 flex flex-col" >
                  <span class="  text-stone-600"></span>
                      <span>Année</span>
                      <select v-model="id_annee" class=" px-3 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="item,i in annee" :key="i" v-text="item" :value="item"></option>
                      </select>
              </div>
              <div class=" mb-4 flex " >
                  <div  class=" justify-between w-full  flex flex-row">
                    <div class=" w-full flex flex-col" >
                      <span class="">Mois:</span>
                      <select v-model="id_mois" class=" px-3 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="item,i in set_moi_list(id_annee,this.mois) "  :value="item" v-text="item" :key="i"></option>
                      </select>
                    </div>
                    <div class=" w-full flex flex-col px-4" >
                      <span class="">Jour:</span>
                      <select v-model="ind_jour" class=" px-3 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="item,i in  set_jour_list(new Date(id_annee,index(id_mois,this.mois),1))" :key="i" v-text="item" :value="item"></option>
                      </select>
                    </div>
                    <div class=" w-full flex flex-col" >
                      <span class="">Heure:</span>
                      <select v-model="ind_heur" class=" px-1 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="i in 16" :key="i" :value="i" v-text="i+5 +'H'"></option>
                      </select>
                    </div>
                  </div>
              </div>
              <div class=" mb-4 flex flex-col" >
                  <span class="  text-stone-600">Type de reservation</span>
                      <select @change="ind_nbr=''" v-model="ind_res_type" class=" px-9 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option value=""></option>
                        <option value="1">Famille</option>
                        <option value="0">Unique</option>
                      </select>
              </div>
              <div class=" mb-4 flex flex-col" >
                  <span class="  text-stone-600">Type de table</span>
                      <select v-if="ind_res_type==0" v-model="ind_nbr" class=" px-9 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="i in 8" :value="i" :key="i" v-text="'Table N° '+i +' '"></option>
                      </select>
                      <select v-else v-model="ind_nbr" class=" px-9 outline-none focus:border-green-500 rounded-lg py-1 border border-stone-400 mx-1" name="" id="">
                        <option v-for="i in 10" :value="i" :key="i" v-text="'Table N° '+i +' '"></option>
                      </select>
             </div>
              <div class=" mb-4 flex flex-col" >
                  <span class="  text-stone-600">Nombre de personne</span>
                  <input v-model="type_clie" type="number"  class=" rounded-lg px-5 py-1 border border-stone-400 text-gray-800 outline-none  focus:border-green-500" >
              </div>
          </div>
      </div>
      <div class=" flex justify-center mt-6 w-full">
        <button @click="safe_data([liste_input])" class="  py-3 px-11 rounded-full flex bg-green-500" type="">
          <svg class=" w-7" viewBox="0 0 24 24"><path class=" text-white fill-current" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
          <span class="text-white uppercase font-bold"> Réserver la Table</span>
        </button>
      </div>
    </div>
  </div>

  <div id="btn_enre" class=" opacity-0  bg-blue-500 px-12 py-4  flex absolute top-40 right-5 z-50">
    <svg class=" w-7" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
    <span class="text-white">Enregistré</span>
  </div>

  <div v-if="show_popup == true" @click="show_popup = false" class="duration-300 z-50 w-full h-full blures absolute top-0 left-0">
    <div class="flex flex-col absolute px-4 py-6 right-3 top-24 justify-between rounded-xl bg-white w-56">
      <span class="cursor-pointer py-1 text-blue-600 border-b border-gray-400"> jaspyrakotoson@gmail.com</span>
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
</template>


<script>
// @ is an alias to /src
const date = new Date()
export default {

  components: {
  },
  data(){
    return{
      show_popup:false,
      liste_input:[
        {
          label:"Nom",
          type:"text",
          value:""
        },
        {
          label:"Prénom",
          type:"text",
          value:""
        },
        {
          label:"Sexe",
          type:"text",
          value:""
        },
        {
          label:"Adresse",
          type:"text",
          value:""
        },
        {
          label:"Téléphone",
          type:"text",
          value:""
        },
      ],
      temp:[],
      i:4,
      tableau_principale:[],
      calendrier:[],
      id_annee:date.getFullYear(),
      id_mois: 0,
      ind_jour: "",
      ind_heur: "",
      ind_nbr:"",
      type_clie:"",
      ind_res_type:"",
      mois:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aôut','Septembre','Octobre','Novembre','Décembre'],
      table:[
        [1,2,3,4,5,6,],
        []
      ],
      annee:[2022,2023],
      jours:[]
    }
  },
  methods:{
    safe_data(arrays){
      for (let i = 0; i < arrays[0].length; i++) {
        this.temp.push(arrays[0][i]);
      }
     var model={
            nom:this.temp[0].value,
            prenom:this.temp[1].value,
            sexe:this.temp[2].value,
            addresse :this.temp[3].value,
            numTel :this.temp[4].value,
            anne:this.id_annee,
            moi:this.id_mois,
            jours:this.ind_jour,
            heure:this.ind_heur,
            type_client:this.type_clie,
            nombre:this.ind_nbr,
            type_reservation:this.ind_res_type,
            etat:true,
      }
      var temp=false
      for(var item in model){

          if(model[item]!=""){
            temp=true
          }
          if(model[item]=="" && item!= 'anne' && item!= "moi"){
            temp=false
            console.log(item)
            break
          }
      }
      if(temp==true){
            this.temp[0].value=""
            this.temp[1].value=""
            this.temp[2].value=""
            this.temp[3].value=""
            this.temp[4].value=""
            this.ind_jour=""
            this.ind_heur=""
            this.type_clie=""
            this.ind_nbr=""
            this.$store.state.data.clients.push(model)
            window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))

            document.getElementById('btn_enre').classList.add('anime_success')
            setTimeout(() => {
                document.getElementById('btn_enre').classList.remove('anime_success')
            }, 3000); 
      }

    },
    log_out(){
      this.$store.state.data.user.logged=false
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
      this.show_popup=false
    },
    index(index,mois){
      for (let i = 0; i < mois.length; i++) {
        const element = mois[i];
        if(element==index){
          return i
        }
        
      }
    },
    set_moi_list(annee,mois){
      var  moi=[]
        if(annee==date.getFullYear()){
          for (let i = date.getMonth(); i < mois.length; i++) {
            const element = mois[i];
            moi.push(element)
          }
        }else{
          return mois
        }
        return moi;
    },
    set_jour_list(annee){
      var annees=new Date()
      if(date.getFullYear()==annee.getFullYear() && date.getMonth()==annee.getMonth()){
       annees=new Date(date.getFullYear(),date.getMonth(),date.getDate())
      }else{
       annees=new Date(annee.getFullYear(),annee.getMonth(),1)
      }
      var a=annees.getMonth()
      const dates=[]
      while( annees.getMonth()===a){
         dates.push(new Date(annees).getDate())
        annees.setDate(annees.getDate()+1)
      }
      return dates
    },
  },
  mounted(){
    
    //console.log(this.algorithme2(this.id_annee+'-'))
  },
  created(){
  }
}
</script>
<style scoped>
.anime_success{
  animation: anim_ 3s forwards   ;
}
@keyframes anim_ {
  0%{
    z-index: 0;
    opacity: 0;
  }
  30%{
    opacity: 1;
    z-index: 100;
    transform:rotateX(360deg)
  }
  70%{
    opacity: 1;
    z-index: 100;
    transform:rotateX(360deg)
  }
  100%{
    z-index: 0;
    opacity:0;
    display: none;
  }
}

.blures {
  transition: 0.4ms;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.24);
}
</style>
