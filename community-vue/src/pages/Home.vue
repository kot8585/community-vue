<template>
    <!-- create post section-->
    <div class="flex bg-white h-14 items-center pl-3 rounded-md py-2">
        <!-- 이미지를 넣을 필요가 있을까 싶네.. -->
        <img src="http://picsum.photos/200" class="w-12 h-12 rounded-full hover:opacity-80 cursor-pointer" />
        <input type="text" placeholder="Create Post" class="rounded-full bg-gray-100 px-5 mx-2 py-2 flex-1 hover:bg-white hover:ring-blue-500 hover:ring-1">
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
    <router-link to="/posts" class="flex flex-col bg-white mt-5 rounded-md space-y-2 p-3 hover:bg-gray-100 hover:cursor-pointer" v-for="post in 5" :key="post">
        <Post />
    </router-link>
    <!-- <Posts /> -->
</template>

<script>
import Post from '../components/Post.vue'


export default {
  components: { Post }
}
</script>

<style>

</style>