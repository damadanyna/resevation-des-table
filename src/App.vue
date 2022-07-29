<template>
  <div class="flex flex-row h-screen w-screen  overflow-hidden">
    <nav_bar class=" overflow-hidden z-40 w-2/4 md:w-2/6 lg:w-1/5 "/>
    
    <div class=" z-20 w-3/4 lg:w-4/5 xl:w-full md:w-4/5 h-full flex flex-col">  
      <router-view class=" bg-gray-200 w-full"/>
      <div class="shadowing footer items-center  bg-white flex justify-center py-5">
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
  },
  mounted(){
    if(window.localStorage.getItem('mi')){
      this.$store.state.data=JSON.parse(window.localStorage.getItem('mi'))
    }
  }
}
</script>

<style >
.footer{
  color: gray;
}

.shadowing{
  box-shadow: 0px 0px 15px rgb(175, 175, 175);
}
</style>
