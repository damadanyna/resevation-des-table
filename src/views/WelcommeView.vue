<template>
  <div class="flex flex-col w-full h-full">
    
    <div class="flex w-full flex-col bg-white z-30 shadow-lg ">
      <div class=" py-5"></div>
      <div class=" px-3 flex flex-row py-2 justify-between">
        <div class=" text-2xl text-stone-600 font-medium">Mahajanga, 401 Madagascar</div>
        <div class=" flex flex-row">
          <div @click=" show_popup=true" class=" z-30  px-2 flex ml-6 flex-col cursor-pointer items-center">
            <svg :class=" show_popup==true?'transform scale-150 ':''" class=" w-4" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" /></svg>
            <span :class=" show_popup==true?'transform scale-125 text-white ':''" class=" text-xs">Wahababdel</span>
          </div>
        </div>
      </div>
    </div>

    <div class=" w-full ">
      <div class=" flex justify-center flex-col w-full">
        <div class=" w-full justify-center  h-full  flex">    
          <div class="absolute  flex items-center bg_opacity py-5 px-14 background_white flex-col z-50 mt_center">
            <span class=" text-6xl mb-4 text-amber-500 font-medium">Bienvenue à vous Chère utilisateur</span>
            <span class=" text-xl text-gray-400 font-bold">Rerseravation du table 1.0.0</span>
            
            <router-link class=" mt-5 font-bold text-xl py-2 mb-4 bg-green-500 px-14 uppercase rounded-full text-white" to="/home">Commeçons</router-link>
          </div>
        </div>
        <div class="flex justify-center">
          <div class=" grid grid-cols-4 mt-7">
            <div v-for="item,i in liste_img" :key="i" class=" mx-3 my-3 py-2 "> 
                <img  class=" opacity-60 w-48 rounded-full" :src="require(`@/assets/${item.img}`)" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div v-if="show_popup==true" @click=" show_popup=false" class="  duration-300 z-50 w-full h-full blures absolute top-0 left-0">
    <div class="flex flex-col absolute px-4 py-6 right-3 top-24 justify-between rounded-xl bg-white w-56 ">
      <span class="  cursor-pointer py-1  text-blue-600 border-b border-gray-400"> wahababdel748@gmail.com</span>
      <div class=" flex flex-row cursor-pointer">
        <svg class=" w-7" viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="m16.56 5.44-1.45 1.45A5.969 5.969 0 0 1 18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.961 7.961 0 0 0 4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2" /></svg>
        <span class="  py-1 text-slate-500" @click="log_out()"> Se Deconnecter ?</span> 
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
      liste_img:[
        {
          img:"img1.jpg"
        },
        {
          img:"img2.jpg"
        },
        {
          img:"img3.jpg"
        },
        {
          img:"img5.jpg"
        },
        {
          img:"img6.jpg"
        },
        {
          img:"img7.jpg"
        },
        {
          img:"img8.jpg"
        },
        {
          img:"img9.jpg"
        },
      ],
      show_popup:false,
    }
  },
  methods:{
    log_out(){
      this.$store.state.data.user.logged=false
      window.localStorage.setItem('mi',JSON.stringify(this.$store.state.data))
      this.show_popup=false
    }
  }
}
</script>
<style scoped>
.mt_center{
  margin-top:26vh;
}
.bg_opacity{
  background: rgba(255, 255, 255, 0.397);
  width: 83%;
}
.blures{
    transition: .4ms;
   backdrop-filter: blur(3px);
   background: rgba(0, 0, 0, 0.24);
}
</style>
