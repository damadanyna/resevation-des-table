<template>
  <div v-if="!this.$store.state.table" class="flex flex-col z-10 w-full h-full">
    <div class="flex w-full flex-col bg-white z-30 shadow-lg ">
      <div class=" py-5"></div>
      <div class=" px-3 flex flex-row py-2 justify-between">
        <div class=" text-2xl text-stone-600 font-medium">Tableau de bord</div>
        <div class=" flex flex-row">
          <div @click=" show_popup=true" class=" z-30  px-2 flex ml-6 flex-col cursor-pointer items-center">
            <svg :class=" show_popup==true?'transform scale-150 ':''" class=" w-4" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" /></svg>
            <span :class=" show_popup==true?'transform scale-125 text-white ':''" class=" text-xs">Wahababdel</span>
          </div>
        </div>
      </div>
    </div>
    <div class=" flex w-full justify-end z-50">
      <span class=" bg-green-500 rounded-b-xl text-white py-1 text-3xl px-6" v-text="date_now"></span>
    </div>
    <div class="  justify-center flex w-full text-3xl pb-5 text-gray-500">
      <div class=" flex flex-row justify-between w-full px-11  mt-3 mr-5">
          <router-link :to="item.url" :class="item.border" @click="$store.state.params=item.value"  class=" bg-gray-100 cursor-pointer py-3 pb-4 w-56   shadowing rounded-md transform hover:scale-110" v-for="item,i in liste_boite" :key="i">
              <span :class="item.text_color" class=" mt-5 uppercase ml-4 font-medium text-base">{{item.text}}</span>
              <div class="flex justify-center">
                <div>
                  <span v-if="item.nombre" class=" text-5xl " v-text="this.set_number(item.value)"></span>
                </div>
                <div :class="item.round==true?'rounded-full bg-gray-300 ':''"  class=" relative h-6 mt-3  flex justify-center"> 
                  <svg :class=" item.width +' '+item.height"   viewBox="0 0 24 24"><path :class="item.round==true?'fill-current text-white ':'fill-current text-gray-300'" class="  " :d="item.icon" /></svg>
                </div>
              </div>
          </router-link>
        </div>
      </div>
      <div  v-if="index>0" @click="precedant()" class=" absolute top_left transform cursor-pointer hover:scale-150 my_hover">
          <svg class=" w-14" viewBox="0 0 24 24"><path  class=" fill-current bg-gray-900" d="m14 7-5 5 5 5V7z" /></svg>
      </div>
      <div class=" w-full flex justify-center px-5 h-fulls overflow-y-auto ">
      <table id="kinda">
        <tr>
          <th v-for="item,i in list_days" :key="i">
            <div :class="jour_now==item[1]?' font-bold text-xl py-0 bg-blue-200':' py-1 font-medium  bg-gray-100'" class="  w-36   px-2 ml-9 margining" >
              <div class="flex w-full justify-end ">
                <span :class="item[1]==0?'opacity-0':'opacity-100'" class="  text-green-600 ml-9 text-sm  rounded-full  " v-text="item[1]<10?'0'+item[1]:item[1]"></span>
              </div>
              <span :class="jour_now==item[1]?' text-3xl ':'text-xl '" class="text-blue-600   " v-text="item[0]"></span>
            </div>
          </th>
        </tr>
        <tr  v-for="items,l in 16" :key="l"  >
          <td  v-for="item,i in list_days" :key="i" class=" h-full"  @click="get_childs(item[1], this.id_mois)[0]==true?checked_date(item[1], this.id_mois,id_annee):''" :class="get_childs(item[1], this.id_mois)[0]==true?'cursor-pointer':''" >
            <div  :class="jour_now==item[1]?' bg-blue-200 ':'bg-gray-100 '" class="     flex w-full flex-col bg-gray-100 ml-2 margining py-1" >
              <span class=" flex justify-end text-gray-700 text-xs px-4" v-text="item[1]==0?'00 h':l+6+' h'" ></span>
              
              <div v-if="get_child(item[1],l-6, this.id_mois)[0]==true" class=" px-2 py-1 text-white rounded-l-md flex bg-orange-600  text-xs">
                <div class="-mt-4  ">
                  <span  class="  relative  -ml-4 px-1 rounded-full bg-red-500 border border-white" >{{get_child(item[1],l-6,this.id_mois)[1]}}   </span>
                    </div>
                  <span >Reservé   </span>
              </div>
              <span v-else :class="jour_now==item[1]?' px-3 text-white ':'bg-gray-100 text-stone-300'" v-text="item[1]==0?'Expiré':'Libre'" ></span>
            </div>
          </td>
        </tr>
      </table>
        <div @click="suivant()"  class=" absolute top_right transform cursor-pointer hover:scale-150 my_hover">
          <svg class=" w-14" viewBox="0 0 24 24"><path  class=" fill-current bg-gray-900" d="m10 17 5-5-5-5v10z" /></svg>
        </div>
      </div>
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
  <tableview v-if="this.$store.state.table" class=" top-0 absolute z-50 bg-white h-full w-full"  />
</template>

<script>
// @ is an alias to /sr
import tableview from '../views/TableView.vue'

const date = new Date()

export default {
  components: {
    tableview
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
          icon:"M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z",
          value:false,
          url:"/client"
        },
        {
          text:"reservation annuler",
          text_color:"text-red-500",
          border:"border-l-4 border-red-500",
          nombre:5,
          round:true,
          width:"w-6",
          height:"h-6",
          icon:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
          value:true,
          url:"/client"
        },
        {
          text:"total des reservations",
          text_color:"text-blue-300",
          border:"border-l-4 border-blue-300",
          nombre:17,
          round:false,
          width:"w-6",
          height:"h-6",
          icon:"m3 22 1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2m15 7H6V7h12m0 6H6v-2h12m0 6H6v-2h12v2z",
          value:null,
          url:"/client"
        },
        {
          text:"Reserver une Table",
          text_color:"text-blue-700",
          border:"border-l-4 border-blue-700",
          round:false,
          width:"w-12",
          height:"h-12",
          url:"/reservation",
          icon:"M18 11h-3v3h-2v-3h-3V9h3V6h2v3h3m2-5v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6z"
        },
      ],
      i:0,
      list_days:[],
      now_day:0,
      existes:[],
      show_popup: false,
      mois:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aôut','Septembre','Octobre','Novembre','Décembre'],
      liste_mois:[],
      date_now:0,
      id_annee:0,
      id_mois:0,
      jour_now:0,
      index:0,
      temp:0,
    }
  },
  methods:{
    set_moi_list(annee){
      var  moi=[]
        if(annee==date.getFullYear()){
          for (let i = date.getMonth(); i < this.mois.length; i++) {
            const element = this.mois[i];
            moi.push(element)
          }
        }else{
          return this.mois
        }
        return moi;
    },

    arrager_jours(position){
      var days_array=[['Lun',0],['Mar',0],['Mer',0],['Jeu',0],['Vend',0],['Sam',0],['Dim',0]];
      var nj=0;

      new Date(date.getFullYear(),date.getMonth(),date.getDate()).getDay()==0?nj=7:''
      days_array=this.set_day(days_array,nj,position)
      
      var global_date=new Date(date.getFullYear(),date.getMonth(),date.getDate()+position-(this.temp)) 
      this.date_now=global_date.getDate()+' '+ this.mois[global_date.getMonth()]+' ' + global_date.getFullYear()
      this.id_mois=global_date.getMonth()
      this.id_annee=global_date.getFullYear()
      
      return days_array;
    },
    set_day(array,a,pos){
      var j=0
      if(pos==0){
        for (let i = 0; i < array.length; i++) {
          if(i<a-1){
          array[i][1]=0 
          }else{
            this.temp=i;
            array[i][1]=new Date(date.getFullYear(),date.getMonth(),date.getDate()+j).getDate()
            j++
          }
        }
      }else{
        for (let i = 0; i < array.length; i++) {
            array[i][1]=new Date(date.getFullYear(),date.getMonth(),date.getDate()+j+pos-(this.temp)).getDate()
            j++
        }

      }
      return array
    }
    ,
    suivant(){
      document.getElementById('kinda').classList.add('animer_')
      setTimeout(() => {
        document.getElementById('kinda').classList.remove('animer_')
        this.index+=7
        this.list_days=this.arrager_jours(this.index)
      }, 300);

    },
    precedant(){
      document.getElementById('kinda').classList.add('animer_')
      setTimeout(() => {
        document.getElementById('kinda').classList.remove('animer_')
        this.index-=7
        this.list_days=this.arrager_jours(this.index)
      }, 300);
    },
    get_child(day,hours,month){
      var k=0;
      var l=false
      for (let i = 0; i < this.existes.length; i++) {
        const element = this.existes[i];
        var temp=element[1]-6;
        if((element[0]==day) && (this.mois.indexOf(element[2])==month) && temp==hours){
          l=true
          k++
          }
        }
        return [l,k] 
      },
      get_childs(day,month){
        var k=0;
        var l=false
        for (let i = 0; i < this.existes.length; i++) {
          const element = this.existes[i];
          if((element[0]==day) && (this.mois.indexOf(element[2])==month)){
            l=true
            k++
          }
        }
        return [l,k] 
      },
    set_number(value){
      var res= this.$store.state.data.clients;
      var temp=[];
      var k=0;
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        if(element.etat!=value){
          temp[k]=element;
          k++
        }
      }
      return temp.length
    },
    log_out(){
      this.$store.state.data.user.logged=false
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
      this.show_popup=false
    },
    checked_date(a,b,c){
      this.$store.state.liste_table=[
            ['','','','','','','',''],
            ['','','','','','','','','','']
          ]
      this.$store.state.table=true
      this.$store.state.date_g=[a,this.mois[b],c]
      this.$store.state.data.clients.forEach(element => {
        if(element.jours==a && this.mois.indexOf(element.moi)==b && c ==element.anne){
          var i=element.type_reservation
            this.$store.state.liste_table[i][element.nombre-1]=element
        }
      });
    },
    
  }, 
  mounted(){
   /* this.mois= this.set_moi_list(2022) */
   this.id_annee=date.getFullYear()
   this.id_mois=date.getMonth()
/* 
   this.date_now=  this.mois[date.getMonth()]+' ' +this.id_annee */
   this.jour_now=date.getDate()

   this.list_days=this.arrager_jours(this.index)
    var array_temps=this.$store.state.data.clients; 
    for (let i = 0; i < array_temps.length; i++) {
      const element = array_temps[i];
      this.existes.push([element.jours,element.heure-1,element.moi])

    }
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
.animer_{
  animation:anims .4s backwards ;
}
@keyframes anims {
  0%{
    opacity:1;
  }
  50%{
    opacity:0;
  }
  60%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
}

.blures {
  transition: 0.4ms;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.24);
}
</style>
