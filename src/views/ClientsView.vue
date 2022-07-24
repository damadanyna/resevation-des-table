<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex w-full flex-col bg-white shadow-lg ">
      <div class=" py-5"></div>
      <div class=" px-3 flex flex-row py-3 justify-between">
        <div>Mahajanga, 401 Madagascar</div>
        <div class=" flex flex-row">
          <div class=" flex flex-row border border-gray-500 px-3 rounded-lg">
            <input type="text" class=" outline-none">
            <svg class=" w-6" viewBox="0 0 24 24"><path d="M11.9 10.9a6.505 6.505 0 0 1 9.1-.08V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.06c-.41-.26-.8-.55-1.16-.9a6.525 6.525 0 0 1 0-9.2M12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m8.31 14.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S12 13 12 15.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L22 22.39 23.39 21l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
          </div>
          <div @click=" show_popup=true" class=" z-30  px-2 flex ml-6 flex-col cursor-pointer items-center">
            <svg :class=" show_popup==true?'transform scale-150 ':''" class=" w-4" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5-5-5-1.42 1.41L12.67 11H3v2h9.67l-2.59 2.58z" /></svg>
            <span :class=" show_popup==true?'transform scale-125 text-white ':''" class=" text-xs">Dama Dany</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class=" absolute bottom-20 right-20">
    <div class=" p-4 bg-green-500 rounded-full shadowing cursor-pointer">
      <svg viewBox="0 0 24 24" class=" w-8"><path class=" fill-current text-white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>  
    </div>
  </div>
  <div v-if="show_popup==true" @click=" show_popup=false" class=" duration-300 w-full h-full blures absolute top-0 left-0">
    <div class="flex flex-col absolute px-4 py-6 right-3 top-24 justify-between bg-white w-56 ">
      <span class="  cursor-pointer py-1  text-blue-600 border-b border-gray-400"> damadanyna@gmail.com</span>
      <span class=" cursor-pointer py-1"> +261 349 459 128</span>
      <span class=" cursor-pointer py-1" @click=" show_popup=false"> Se Deconnecter ?</span> 
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
      liste_boite:[
        
        
      ],
      show_popup:false,
    }
  }
}
</script>
<style scoped>
.shadowing{
  box-shadow: 0px 0px 34px rgb(83, 83, 83);
}
.blures{
    transition: .4ms;
   backdrop-filter: blur(3px);
   background: rgba(0, 0, 0, 0.24);
}
</style >
