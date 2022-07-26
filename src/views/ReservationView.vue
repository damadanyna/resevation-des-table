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
                  <span class=" text-gray-400">{{item.label}}</span>
                  <input class=" round px-5 py-1 text-gray-800 outline-none border focus:border-green-500" :type="item.type">
              </div>
          </div>
          <div class="flex w-72  flex-col ml-10">
              <div class=" mb-4 flex flex-col" v-for="item,i in liste_input2" :key="i">
                  <span class=" text-gray-400">{{item.label}}</span>
                  <input class=" roundpx-5 py-1 text-gray-800 outline-none border focus:border-green-500" :type="item.type">
              </div>
          </div>
      </div>
      <div class=" flex justify-center mt-6 w-full">
        <button class=" py-3 px-11 rounded-full flex bg-green-500" type="">
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
          type:"text"
        },
        {
          label:"Prénom",
          type:"text"
        },
        {
          label:"Sexe",
          type:"text"
        },
        {
          label:"Adresse",
          type:"text"
        },
        {
          label:"Téléphone",
          type:"text"
        },
      ],
      liste_input2:[

        {
          label:"Date de réservation",
          type:"Date"
        },
        {
          label:"Heure de réservation",
          type:"time"
        },
        {
          label:"Type de Client",
          type:"text"
        },
        {
          label:"Nombre de personne",
          type:"number"
        },
        {
          label:"Prix",
          type:"number"
        },
      ],
    }
  }
}
</script>
<style scoped>

</style>
