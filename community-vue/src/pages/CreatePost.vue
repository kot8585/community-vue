<template>
  <!-- create post page -->
  <div class="flex flex-col  bg-white p-2 space-y-3">
    <!-- choose space -->
    <div class="flex items-center space-x-3">
        <img src="http://picsum.photos/200" class="w-8 h-8 rounded-full hover:opacity-80 cursor-pointer" />
        <i class="fa-solid fa-caret-right text-gray-500"></i>
        <div class="flex flex-col border border-gray-100 w-40">
            <div class="flex  p-2 rounded-full text-sm items-center justify-between space-x-1 text-gray-500 relative">
                <span class="">Choose a space</span>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <!-- list of spaces -->
             <div class="flex-col absolute top-28 w-40 bg-white">
                <div class="border border-gray-100 p-1">일상</div>
                <div class="border border-gray-100 p-1">연애</div>
                <div class="border border-gray-100 p-1">음식</div>
            </div>
        </div>
    </div>
   
    
    <!-- write title -->
    <input type="text" placeholder="Title" class="border border-gray-200 p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-black">
    <!-- write content -->
    <div class="flex flex-col border border-gray-200 p-1 rounded-md">
        <textarea placeholder="Text(Optional)" rows="10" class="focus:outline-none focus:ring-1 focus:ring-black resize-none"></textarea>
        <div class="flex justify-between p-1">
            <div class="flex space-x-2 text-gray-400">
                <i class="fa-regular fa-image text-xl"></i>
                <i class="fa-solid fa-video text-xl"></i>
            </div>
            <button class="rounded-full bg-gray-200">Post</button>
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