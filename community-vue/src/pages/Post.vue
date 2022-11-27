<template>
    <!-- post section -->
  <div class="flex flex-col bg-white mt-5 rounded-md space-y-2 p-3 hover:bg-gray-100 hover:cursor-pointer">
    <!-- profile  -->
    <div class="flex space-x-1 text-darkGrayColor text-sm">
      <span class="hover:underline">username</span>
      <span>·</span>
      <span>14 hours ago</span>
    </div>
    <!-- post title -->
    <div class="font-semibold text-xl">i am a liar living a double life destroying my own soul</div>
    <div>who am i on the surface? <br/>

i'm a professional, lots of responsibility, people working under my leadership, give public presentations, etc family man, multilple kids ... religous person ... but i am not true to any one those in private... living a double life... i am a liar ...porn addict for 20+ years, massage parlors, escort services, sugar dating sites, recently have even done gay things against my own attractions and beliefs ........even when i have gotten help, i've behaved for a while, hen fell back into it, and lied to my therapist and support group and put the veneer back on ..... i've put my family at risk sharing pic of my wife online... i am so good at lying, i'm a professional liar .... my wife does not know the details of my problems AT ALL.... but she knows i'm 'just off'.... and she does not have sex with me anymore, which makes it worse... this is not the life i want</div>
    <!-- reaction section -->
    <div class="flex items-center space-x-3 text-darkGrayColor">
      <!-- arrow section -->
      <div class="flex rounded-full items-center ">
        <div class="space-x-1 hover:bg-gray-200 bg-gray-100 rounded-l-full p-2">
          <i class="fa-solid fa-arrow-up"></i>
          <span>1.5K</span>
        </div>
        <div class="border-l hover:bg-gray-200 bg-gray-100 rounded-r-full p-2">
          <i class="fa-solid fa-arrow-down "></i>
        </div>
      </div>
      <!-- comment section -->
      <div class="space-x-1 hover:bg-gray-200 rounded-full p-2">
        <i class="fa-regular fa-comment"></i>
        <span>99</span>
      </div>
      <!-- share section -->
    </div>


    <!-- write comment section -->
    <div class="border border-gray-200 p-1 space-y-1 rounded-md">
      <div>username</div>
      <textarea placeholder="답글 내용을 적어주세요" class="w-full focus:outline-none resize-none border-b border-gray-200"></textarea>
      <div class="flex">
        <i class="fa-regular fa-image"></i>
        <div class="flex-1"></div>
        <button>취소</button>
        <button>댓글</button>
      </div>
    </div>

    <!-- list of comment -->
    <div class="flex flex-col" v-for="comment in 3" :key="comment">
      <div>
        <span>username</span>
        <span class="text-darkGrayColor text-sm">·</span>
        <span class="text-darkGrayColor text-sm">14 hours ago</span>
      </div>
      <!-- post title 복붙임 -->
    <div class="font-semibold text-xl">i am a liar living a double life destroying my own soul</div>
    <div>who am i on the surface? <br/>

i'm a professional, lots of responsibility, people working under my leadership, give public presentations, etc family man, multilple kids ... religous person ... but i am not true to any one those in private... living a double life... i am a liar ...porn addict for 20+ years, massage parlors, escort services, sugar dating sites, recently have even done gay things against my own attractions and beliefs ........even when i have gotten help, i've behaved for a while, hen fell back into it, and lied to my therapist and support group and put the veneer back on ..... i've put my family at risk sharing pic of my wife online... i am so good at lying, i'm a professional liar .... my wife does not know the details of my problems AT ALL.... but she knows i'm 'just off'.... and she does not have sex with me anymore, which makes it worse... this is not the life i want</div>
    <!-- reaction section -->
    <div class="flex items-center space-x-3 text-darkGrayColor border-b border-gray-200">
      <!-- arrow section -->
      <div class="flex rounded-full items-center ">
        <div class="space-x-1 hover:bg-gray-200 bg-gray-100 rounded-l-full p-2">
          <i class="fa-solid fa-arrow-up"></i>
          <span>1.5K</span>
        </div>
        <div class="border-l hover:bg-gray-200 bg-gray-100 rounded-r-full p-2">
          <i class="fa-solid fa-arrow-down "></i>
        </div>
      </div>
      <!-- comment section -->
      <div class="space-x-1 hover:bg-gray-200 rounded-full p-2">
        답글달기
      </div>
      <!-- share section -->
    <div>
      <i class="fa-solid fa-angle-down"></i>
      <span>답글 50개</span> <!-- span 3개로 나눠야하나 -->
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