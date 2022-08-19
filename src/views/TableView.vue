<template>
  <div class=" w-full h-full bg-white item px-2 py-16 flex flex-col justify-between">
    <div class=" absolute top-3 right-60">
        <svg class=" w-9" viewBox="0 0 24 24"><path class=" fill-current text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </div>
    <div class="flex flex-row">
        <div v-for=" item,i in 6" :key="i" class=" mx-4 my-4 flex flex-row">
            <div class=" flex flex-row">
                <div class=" bg-stone-300 w-2 rounded-r-md   mt-3 h-28 shadow-md" style=" margin-right:1px"></div>
                <div class=" bg-stone-300 w-4 rounded-r-md   mt-3 mr-1 h-28 shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                <div class=" bg-stone-300 w-24 border border-white h-40 -m-3 rounded-full z-30 flex items-center text-gray-700 justify-center" style=" box-shadow: 0px 7px 26px gray"> table {{i+1}}</div>
                <div class=" bg-stone-300 w-4  rounded-l-lg  mt-3 shadow-md ml-1 h-28 z-10 " style=" box-shadow: 0px 10px 19px gray"></div> 
                <div class=" bg-stone-300 w-2 rounded-l-md   mt-3 h-28 shadow-md" style=" margin-left:1px"></div>
            </div>
        </div>
    </div>
    <div class=" w-full  flex flex-row">
        <div class=" flex flex-row w-4/5 justify-center ">    
            <div v-for="item,i in 4" :key="i" class=" flex flex-row m-5  transform rotate-4 ">
                <div class=" flex h-full flex-col ">
                    <div class=" flex flex-row"  v-for=" it,r in 2" :key="r" >
                        <div class=" bg-stone-300 w-2 rounded-r-md h-10   mt-3  shadow-md" style=" margin-right:1px"></div>
                        <div class=" bg-stone-300 w-4 rounded-r-md  h-10 mt-3 mr-1  shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                    </div>
                </div>
                <div class="text-gray-700 flex items-center justify-center bg-stone-300 z-50 border-white  w-28 h-28 border " style=" box-shadow: 0px 7px 26px gray">
                    table {{7+i}}
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
        <div v-for=" item,i in 6" :key="i" class=" mx-4 my-4 flex flex-row">
            <div class=" flex flex-row">
                <div class=" bg-stone-300 w-2 rounded-r-md   mt-3 h-28 shadow-md" style=" margin-right:1px"></div>
                <div class=" bg-stone-300 w-4 rounded-r-md   mt-3 mr-1 h-28 shadow-md" style=" box-shadow: 0px 10px 19px gray"></div>
                <div class=" bg-stone-300 w-24 border border-white h-40 -m-3 rounded-full z-30 flex items-center text-gray-700 justify-center" style=" box-shadow: 0px 7px 26px gray"> table {{i+11}}</div>
                <div class=" bg-stone-300 w-4  rounded-l-lg  mt-3 shadow-md ml-1 h-28 z-10 " style=" box-shadow: 0px 10px 19px gray"></div> 
                <div class=" bg-stone-300 w-2 rounded-l-md   mt-3 h-28 shadow-md" style=" margin-left:1px"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>