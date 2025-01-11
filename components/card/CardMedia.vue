<template>
    <article class="w-full md:w-[600px] max-w-[600px] rounded-lg border-2 bg-white border-softBlueGray p-4 space-y-5">
        <div class="flex">
            <div>
                <img :src="img" alt="">
            </div>
            <div class="space-y-2 px-4">
                <time class="text-sm flex space-x-2">
                    <div>Media news</div><div class="text-graystone">{{date}}</div>
                </time>
                <h2 class="text-lg font-semibold leading-relaxed text-left">
                    {{title}}
                </h2>
                <p class="text-sm leading-relaxed text-left">
                    {{description}}
                </p>
            </div>
        </div>
        <div class="flex space-x-8">
            <div class="flex space-x-3">
                <div>
                    <font-awesome-icon icon="fa-regular fa-heart" class="fa-lg"/> 
                </div>
                <div>
                    Like
                </div>
            </div>
            <div class="flex space-x-3">
                <div>
                    <font-awesome-icon icon="fa-regular fa-comment" />
                </div>
                <div>
                    Comment
                </div>
            </div>
            <div class="flex space-x-3">
                <div>
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </div>
    </article>
</template>
<script setup>
defineProps(['img', 'date', 'title', 'description'])
</script>