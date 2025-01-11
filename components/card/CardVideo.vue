<template>
    <article 
    :class="[
            'w-full md:w-[300px] max-w-[300px] rounded-lg border-2 bg-white border-softBlueGray p-1 space-y-5 shadow-card',
            shadowClass,
        ]">
        <div class="bg-softWhite rounded-md flex justify-center items-center h-[200px]">
            <div>
                <font-awesome-icon icon="play" class="fa-2x" />
            </div>
        </div>
        <div class="pb-4 pl-4 pr-4 space-y-5">
            <div class="space-y-2 px-4">
                <h2 class="text-lg font-semibold leading-relaxed text-left">
                    {{title}}
                </h2>
                <p class="text-sm leading-relaxed text-left">
                    {{description}}
                </p>
            </div>
            <div>
                <button :class="[bgClass,'text-white text-sm py-2 px-4 rounded-xl w-full']">{{btnText}}</button>
            </div>
        </div>
    </article>
</template>
<script setup>
const props = defineProps(['title', 'description', 'btnText', 'color']);
const shadowClass = computed(()=> props.color ? 'shadow-' + props.color : '');
const bgClass = computed(() => props.color ? 'bg-' + props.color : '');
</script>