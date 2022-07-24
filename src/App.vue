<template>
  <div class="flex flex-row h-full">
    <nav_bar class=" z-40 w-64"/>
    
    <div class=" z-20 w-full flex flex-col">  
      <div class="flex w-full bg-white shadow-lg py-8">
        <span class="px-4 text-3xl text-gray-500"> Tableau de bord</span>
      </div>
      <router-view class=" bg-gray-200 w-full"/>
      <div class="footer items-center  bg-white flex justify-center py-5">
        <div class=" mx-3 flex justify-center items-center rounded-full border h-5 w-5 border-gray-600 ">  
          <span class=" -mt-2 text-2xl ">c</span> 
        </div> 
        <span class=" text-2xl">all right served 2022</span>  
      </div>
    </div>
  </div>
</template>

<script>
import nav_bar from "./components/nav_bar.vue";
export default {
  components:{nav_bar},
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.footer{
  color: gray;
}
</style>
