<template>
<flex class="flex-col w-full h-full">
  <div class=" w-full h-full bg-white item px-2 py-16 flex flex-col ">
    <div class=" absolute top-3 right-64 cursor-pointer" @click="this.$store.state.table=false">
        <svg class=" w-9" viewBox="0 0 24 24"><path class=" fill-current text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </div>   
    <div class=" absolute top-3 right-80">
      <span class=" bg-green-500 rounded-b-xl text-white py-1 text-3xl px-6" v-text="this.$store.state.date_g[0] +' '+this.$store.state.date_g[1]+' '+this.$store.state.date_g[2]"></span>
    </div>
    <div class="flex flex-row h-full w-full  ">
        <div class=" h-full justify-center   flex flex-col"> 
                    <div v-for="item,i in 4" :key="i" class=" flex flex-row m-5 mt-7 transform rotate-4 ">
                        <div class=" flex h-full flex-col -mr-3 justify-center ">
                            <div class=" flex flex-row"  >
                                <div class=" bg-stone-300 w-2 rounded-r-md h-10    shadow-md" style=" margin-right:1px"></div>
                                <div class=" bg-stone-300 w-4 rounded-r-md  h-10 mr-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                            </div>
                        </div>
                        <div @click="table_unique[i]===''?'':set_user(table_unique[i])" :class="table_unique[i]===''?'bg-stone-300':'bg-orange-600 cursor-pointer'"  class="text-gray-700 flex items-center justify-center   z-50 border-2  border-white rounded-full w-24 h-24  " style=" box-shadow: 0px 7px 26px gray">
                            <span class=" px-3 rounded-full border-2  border-white text-xs font-bold py-1  text-white"> table {{i+1}}</span>
                            <div v-if="table_unique[i]!=''" class=" absolute px-3 border-2 border-white py-1 bg-green-400 rounded-full -mt-14 ml-10">
                                <span class=" text-white " v-text="table_unique[i]?table_unique[i].type_client:'no'"></span>
                            </div>
                        </div>
                        <div class=" flex h-full flex-col -ml-3 justify-center ">
                            <div class=" flex z-10 flex-row"  >
                                <div class=" bg-stone-300 w-4 rounded-l-md  h-10 ml-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                                <div class=" bg-stone-300 w-2 rounded-l-md h-10    shadow-md" style=" margin-right:1px"></div> </div>
                        </div>
                    </div>
        </div>
        <div class=" ml-16 flex flex-col justify-between  h-full">
            <div class="flex flex-row">
                <div v-for=" item,i in 4" :key="i" class=" mx-4 my-4 flex flex-row">
                    <div class=" flex flex-row">
                        <div class=" bg-stone-300 w-2 rounded-r-md   mt-3 h-28 shadow-md" style=" margin-right:1px"></div>
                        <div class=" bg-stone-300 w-4 rounded-r-md   mt-3 mr-1 h-28 shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                        <div @click="table_famille[i]===''?'':set_user(table_famille[i])" :class="table_famille[i]===''?'bg-stone-300':'bg-orange-600 cursor-pointer'" class="   w-24 border-2 border-white h-40 -m-3 rounded-full z-30 flex items-center text-gray-700 justify-center" style=" box-shadow: 0px 7px 26px gray">
                            <span class="  px-3 rounded-full border-2  border-white text-xs font-bold py-1  text-white"> table {{i+1}}</span>
                            <div v-if="table_famille[i]!=''" class=" absolute px-3 border-2 border-white py-1 bg-green-400 rounded-full -mt-14 ml-10">
                                 <span class=" text-white " v-text="table_famille[i]?table_famille[i].type_client:'no'"></span>
                            </div>
                        </div>
                        <div class=" bg-stone-300 w-4  rounded-l-lg  mt-3 shadow-md ml-1 h-28 z-10 " style=" box-shadow: 0px 10px 19px gray"></div> 
                        <div class=" bg-stone-300 w-2 rounded-l-md   mt-3 h-28 shadow-md" style=" margin-left:1px"></div>
                    </div>
                </div>
            </div>
            <div class=" w-full  flex flex-row">
                <div class=" flex flex-row w-full  justify-center ">    
                    <div v-for="item,i in 2" :key="i" class=" flex flex-row m-5  transform rotate-4 ">
                        <div class=" flex h-full flex-col ">
                            <div class=" flex flex-row"  v-for=" it,r in 2" :key="r" >
                                <div class=" bg-stone-300 w-2 rounded-r-md h-10   mt-3  shadow-md" style=" margin-right:1px"></div>
                                <div class=" bg-stone-300 w-4 rounded-r-md  h-10 mt-3 mr-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                            </div>
                        </div>
                        <div @click="table_famille[i+4]===''?'':set_user(table_famille[i+4])" :class="table_famille[i+4]===''?'bg-stone-300':'bg-orange-600 cursor-pointer'" class="text-gray-700 flex items-center justify-center  z-50 border-2  border-white  w-28 h-28  " style=" box-shadow: 0px 7px 26px gray">
                             <span class=" px-3 rounded-full border-2  border-white text-xs font-bold py-1  text-white"> table {{i+5}}</span>
                             <div v-if="table_famille[i+4]!=''" class=" absolute px-3 border-2 border-white py-1 bg-green-400 rounded-full -mt-14 ml-10">
                                 <span class=" text-white " v-text="table_famille[i+4]?table_famille[i+4].type_client:'no'"></span>
                             </div>
                        </div>
                        <div class=" flex h-full flex-col ">
                            <div class=" flex z-10 flex-row"  v-for=" it,r in 2" :key="r" >
                                <div class=" bg-stone-300 w-4 rounded-l-md  h-10 mt-3 ml-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                                <div class=" bg-stone-300 w-2 rounded-l-md h-10   mt-3  shadow-md" style=" margin-right:1px"></div> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div v-for=" item,i in 4" :key="i" class=" mx-4 my-4 flex flex-row">
                    <div class=" flex flex-row">
                        <div class=" bg-stone-300 w-2 rounded-r-md   mt-3 h-28 shadow-md" style=" margin-right:1px"></div>
                        <div class=" bg-stone-300 w-4 rounded-r-md   mt-3 mr-1 h-28 shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                        <div @click="table_famille[i+6]===''?'':set_user(table_famille[i+6])" :class="table_famille[i+6]===''?'bg-stone-300':'bg-orange-600 cursor-pointer'" class="  w-24 border-2 border-white h-40 -m-3 rounded-full z-30 flex items-center text-gray-700 justify-center" style=" box-shadow: 0px 7px 26px gray"> 
                             <span class=" px-3 rounded-full border-2  border-white text-xs font-bold py-1  text-white"> table {{i+7}}</span>
                             <div v-if="table_famille[i+6]!=''" class=" absolute px-3 border-2 border-white py-1 bg-green-400 rounded-full -mt-14 ml-10">
                                 <span class=" text-white " v-text="table_famille[i+6]?table_famille[i+6].type_client:'no'"></span>
                             </div>
                        </div>
                        <div class=" bg-stone-300 w-4  rounded-l-lg  mt-3 shadow-md ml-1 h-28 z-10 " style=" box-shadow: 0px 10px 19px gray"></div> 
                        <div class=" bg-stone-300 w-2 rounded-l-md   mt-3 h-28 shadow-md" style=" margin-left:1px"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" ml-16  h-full justify-center   flex flex-col"> 
                    <div v-for="item,i in 4" :key="i" class=" flex flex-row m-5 mt-7 transform rotate-4 ">
                        <div class=" flex h-full flex-col -mr-3 justify-center ">
                            <div class=" flex flex-row"  >
                                <div class=" bg-stone-300 w-2 rounded-r-md h-10    shadow-md" style=" margin-right:1px"></div>
                                <div class=" bg-stone-300 w-4 rounded-r-md  h-10 mr-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                            </div>
                        </div>
                        <div @click="table_unique[i+4]===''?'':set_user(table_unique[i+4])" :class="table_unique[i+4]===''?'bg-stone-300':'bg-orange-600 cursor-pointer '" class="text-gray-700 flex items-center justify-center  z-50 border-2  border-white rounded-full w-24 h-24  " style=" box-shadow: 0px 7px 26px gray">
                            <span class="  px-3 rounded-full border-2  border-white text-xs font-bold py-1  text-white"> table {{i+5}}</span>
                            <div v-if="table_unique[i+4]!=''" class=" absolute px-3 border-2 border-white py-1 bg-green-400 rounded-full -mt-14 ml-10">
                                <span 
                                class=" text-white " 
                                v-text="table_unique[i+4]?
                                table_unique[i+4].type_client>=3?2:table_unique[i+4].type_client
                                :'no'"
                                ></span>
                            </div>
                        </div>
                        <div class=" flex h-full flex-col -ml-3 justify-center ">
                            <div class=" flex z-10 flex-row"  >
                                <div class=" bg-stone-300 w-4 rounded-l-md  h-10 ml-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                                <div class=" bg-stone-300 w-2 rounded-l-md h-10    shadow-md" style=" margin-right:1px"></div> </div>
                        </div>
                    </div>
        </div>
        
    </div>

        
    <div @click=" shown=false" v-if="shown==true" class=" absolute top-0 -ml-3  flex flex-row w-full h-full blures justify-center items-center " style=" z-index: 51;">
        <div class=" bg-white flex flex-col rounded-lg py-4 px-16"> 
            <div class=" mb-5">
                <span class=" text-3xl text-stone-600">Propriété</span>
            </div>
            <div class="  flex flex-row">
                <span>Nom et prénom:</span>
                <span class=" ml-5">{{description.nom +' '+ description.prenom}}</span>
            </div>
            <div class="  flex flex-row">
                <span>Reserver le:</span>
                <span class=" ml-5">{{description.jours +' '+description.moi+' '+description.anne}}</span>
            </div>
            <div class="  flex flex-row">
                <span>Reservation de type</span>
                <span class=" ml-1">{{description.type_reservation==0?'Unique':'Famille'}}</span>
            </div>
            <div class="  flex flex-row">
                <span>Table n° </span>
                <span class=" ml-1">{{description.nombre+1}}</span>
            </div>
            <div class="  flex flex-row">
                <span>Nombre de personne:</span>
                <span v-if="description.type_reservation==0" class=" ml-2">{{description.type_client>=3?2:description.type_client}}</span>
                <span v-else class=" ml-2">{{description.type_client}}</span>
            </div>
            <div class="  flex flex-row">
                <span>Contacte:</span>
                <span class=" ml-2">{{description.numTel}}</span>
            </div>
        </div>
    </div>
  </div>
</flex>
</template>

<script>
export default {
    data(){
        return{
            table_famille:[],
            table_unique:[],
            shown:true,
            description:{}
        }
    },
    methods:{
        get_vis(u){
            console.log('sd: ',u)
        },
        set_user(u){
            this.description=u
            this.shown=true
        }
    },
    mounted(){
        this.table_famille=this.$store.state.liste_table[1]
        this.table_unique=this.$store.state.liste_table[0]
    }
}
</script>

<style>

.blures {
  transition: 0.4ms;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.24);
}
</style>