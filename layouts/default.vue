<template>
    <div>
        <div class="relative flex flex-col md:h-screen">
            <AppHeader class="w-full flex-none" />
            <slot />
            <AppFooter />
        </div>
    </div>  
</template>