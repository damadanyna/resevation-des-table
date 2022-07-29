<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex w-full flex-col bg-white shadowing z-30">
      <div class=" py-4"></div>
      <div class=" px-3 flex flex-row py-3 justify-between">
        <div class=" text-2xl text-gray-600 font-medium">Réservation</div>
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
              <div class=" mb-4 flex flex-col" v-for="item,i in liste_input2" :key="i">
                  <span class="  text-stone-600">{{item.label}}</span>
                  <input v-model="item.value" class=" rounded-lg px-5 py-1 border border-stone-400 text-gray-800 outline-none  focus:border-green-500" :type="item.type">
              </div>
          </div>
      </div>
      <div class=" flex justify-center mt-6 w-full">
        <button @click="safe_data([liste_input,liste_input2])" class="  py-3 px-11 rounded-full flex bg-green-500" type="">
          <svg class=" w-7" viewBox="0 0 24 24"><path class=" text-white fill-current" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
          <span class="text-white uppercase font-bold"> Réserver la Table</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {

  components: {
  },
  data(){
    return{
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
      liste_input2:[

        {
          label:"Date de réservation",
          type:"Date",
          value:""
        },
        {
          label:"Heure de réservation",
          type:"time",
          value:""
        },
        {
          label:"Type de Client",
          type:"text",
          value:""
        },
        {
          label:"Nombre de personne",
          type:"number",
          value:""
        },
        {
          label:"Prix",
          type:"number",
          value:""
        },
      ],
      temp:[]
    }
  },
  methods:{
    safe_data(arrays){
      for (let i = 0; i < arrays[0].length; i++) {
        this.temp.push(arrays[0][i]);
      }
      for (let i = 0; i < arrays[1].length; i++) {
        this.temp.push(arrays[1][i]);
      }
      var model={
            nom:this.temp[0].value,
            prenom:this.temp[1].value,
            sexe:this.temp[2].value,
            addresse :this.temp[3].value,
            numTel :this.temp[4].value,
            date_res:this.temp[5].value,
            heure_res:this.temp[6].value,
            type:this.temp[7].value,
            nombre:this.temp[8].value,
            prix:this.temp[9].value,
            etat:true,
      }
       this.$store.state.data.clients.push(model)
       window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
    }
  }
}
</script>
<style scoped>

</style>
