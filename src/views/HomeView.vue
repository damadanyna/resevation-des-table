<template>
  <div class="flex flex-col w-full h-full">
    <div class=" px-4 text-3xl py-5 text-gray-500">
      <div class=" flex flex-row mt-7">
          <div :class="item.border"  class=" bg-gray-100 cursor-pointer py-3 pb-4 w-56 mr-10 shadowing rounded-md transform hover:scale-110" v-for="item,i in liste_boite" :key="i">
              <span :class="item.text_color" class=" mt-5 uppercase ml-4 font-medium text-base">{{item.text}}</span>
              <div class="flex justify-center">
                <div>
                  <span v-if="item.nombre" class=" text-5xl ">{{item.nombre}}</span>
                </div>
                <div :class="item.round==true?'rounded-full bg-gray-300 ':''"  class=" relative h-6 mt-3  flex justify-center"> 
                  <svg :class=" item.width +' '+item.height"   viewBox="0 0 24 24"><path :class="item.round==true?'fill-current text-white ':'fill-current text-gray-300'" class="  " :d="item.icon" /></svg>
                </div>
              </div>
          </div>
      </div>
    </div>
      <div class=" w-full flex  px-5 h-fulls overflow-y-auto ">
        <div class=" mt-5 grid grid-cols-7  ">
          <div class=" text-gray-900  " v-for="item,i in liste_days" :key="i">
            <div :class="now_day==item.day?'bg-blue-400':'bg-gray-100'" class=" w-36  font-medium  px-2 ml-9 margining py-1" >
              <div class="flex w-full justify-end ">
                <span class=" text-green-600 ml-9 text-sm  rounded-full  ">{{item.day<10?"0"+item.day:item.day}}</span>
              </div>
              <span class="text-blue-600  text-xl  ">{{get_text(item)}}</span>
            </div>
          </div>
          <div class=" marting_top text-gray-900 " v-for="item,i in 90" :key="i">
            <div class="  text-gray-500   bg-gray-100 ml-2 margining py-1" >
              <span class=" flex justify-end text-gray-400 text-xs px-4">{{i+1}}</span>
              <span class=" flex px-3 text-gray-800">Libre</span>
            </div>
          </div>
        </div>
        <div  @click="precedant()" class=" absolute top_left transform cursor-pointer hover:scale-150 my_hover">
          <svg class=" w-14" viewBox="0 0 24 24"><path  class=" fill-current bg-gray-900" d="m14 7-5 5 5 5V7z" /></svg>
        </div>
        <div  @click="suivant()"  class=" absolute top_right transform cursor-pointer hover:scale-150 my_hover">
          <svg class=" w-14" viewBox="0 0 24 24"><path  class=" fill-current bg-gray-900" d="m10 17 5-5-5-5v10z" /></svg>
        </div>
        
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
const {JsonCalendar}=require('json-calendar')
const calendar=new JsonCalendar()

export default {

  components: {
  },
  data(){
    return{
      liste_boite:[
        {
          text:"reservation confirmer",
          text_color:"text-green-500",
          border:"border-l-4 border-green-500",
          nombre:12,
          round:true,
          width:"w-6",
          height:"h-6",
          icon:"M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
        },
        {
          text:"reservation annuler",
          text_color:"text-red-500",
          border:"border-l-4 border-red-500",
          nombre:5,
          round:true,
          width:"w-6",
          height:"h-6",
          icon:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        },
        {
          text:"total des reservations",
          text_color:"text-blue-300",
          border:"border-l-4 border-blue-300",
          nombre:17,
          round:false,
          width:"w-6",
          height:"h-6",
          icon:"m3 22 1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2m15 7H6V7h12m0 6H6v-2h12m0 6H6v-2h12v2z"
        },
        {
          text:"Reserver une Table",
          text_color:"text-blue-700",
          border:"border-l-4 border-blue-700",
          round:false,
          width:"w-12",
          height:"h-12",
          icon:"M18 11h-3v3h-2v-3h-3V9h3V6h2v3h3m2-5v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6z"
        },
      ],
      i:0,
      liste_days:calendar.weeks[this.i],
      now_day:calendar.today.toString().split(" ")[2]
    }
  },
  methods:{
    get_text(item){
      console.log(item)
      return item.date.toString().split(" ")[0]
    },
    suivant(){
      this.i++
      this.liste_days=calendar.weeks[this.i]
    },
    precedant(){
      this.i--
      this.liste_days=calendar.weeks[this.i]
    }
  }, 
  mounted(){
    //console.log()
    
    //console.log( calendar.today)
    console.log( calendar.today.toString().split(" ")[2])
  }
}
</script>
<style scoped>
.margining{
  margin-left: 1px;
}
.h-fulls{
  height: 47vh;
}
.shadowing{
  box-shadow: 0px 0px 34px rgb(168, 168, 168);
}
.marting_top{
  margin-top: 1px;
}
.top_left{
  top: 60vh;
  margin-left: 7px;
}
.top_right{
  top: 60vh;
  right: 20px;
}
.my_hover:hover{
  background: rgba(128, 128, 128, 0.233);
}
</style>
