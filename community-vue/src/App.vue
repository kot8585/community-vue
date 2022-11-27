<template>
  <div class="bg-slate-300">
    <!-- header section -->
    <div class="flex h-10 bg-yellow-300">
      <i class="fa-solid fa-bars"></i>
      <span>질문해</span>
      <!--tweet search  input -->
      <div class="relative mb-5">
        <input
          placeholder="트위터 검색"
          type="text"
          class="
            pl-10
            rounded-full
            w-full
            p-2
            bg-gray-100
            text-sm
            focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none
          "
        />
        <i class="fas fa-search absolute left-0 mt-2 ml-3 text-sm text-light"></i>
      </div>
      <button>로그인</button>
    </div>
    
    <!-- body section -->
    <div class="flex container mx-auto h-screen">
      <div class="w-1/3 bg-purple-200">side</div>

      <!-- main section -->
      <div class="w-2/3 flex flex-col mx-8">
        <!-- create post section-->
        <div class="flex bg-white h-14 items-center pl-3 rounded-md">
            <!-- 이미지를 넣을 필요가 있을까 싶네.. -->
            <img src="http://picsum.photos/200" class="w-12 h-12 rounded-full hover:opacity-80 cursor-pointer" />
            <input type="text" placeholder="Create Post" class="rounded-full bg-postColor px-5 mx-3 py-2 flex-1 hover:bg-white hover:ring-blue-500 hover:ring-1">
        </div>

        <!-- Order Section -->
        <div class="flex bg-white h-14 items-center rounded-md mt-5">
            <div class="rounded-full hover:bg-postColor p-3 text-xl">
              <i class="fa-solid fa-rocket fa-rotate-by pr-2" style="--fa-rotate-angle: -45deg;"></i>
              <span>Best</span>
            </div>
            <div class="rounded-full hover:bg-postColor p-2 text-lg ml-7">
              <i class="fa-solid fa-fire pr-2"></i>
              <span>Hot</span>
            </div>
            <div class="rounded-full hover:bg-postColor p-2 text-lg ml-7">
              <i class="fa-solid fa-sun pr-2"></i>
              <span>New</span>
            </div>
        </div>

        <!-- Post Section -->
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
          <div class="flex items-center space-x-3 text-darkGrayColor ">
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
        </div>

        <Post />
      </div>
    </div>
  </div>
</template>

<script>
import Post from './pages/Post.vue'

export default {
  components: { Post }
}
</script>
