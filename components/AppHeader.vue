<template>
    <header>
        <div class="container sm:mx-auto flex justify-between flex-wrap bg-midnight text-tahiti gap-5 py-10 px-5 md:px-0 lg:py-4">
            <div class="flex items-center gap-7">
                <router-link to="/" class="cursor-pointer" aria-label="Logo sim consult">
                    <img src="/influencing.png" alt="Logo influencing" width="150px">
                <!-- <SvgLogo name="logo-sim-consult" class="w-[100%] max-w-[152px] sm:max-w-[220px] fill-light" /> -->
                </router-link>
                <div class="flex justifly-center center-items gap-1">
                    <img src="/australian.png" alt="Logo influencing" class="w-[16px] h-[16px]">
                    <select name="pais" id="pais">
                        <option value="australis">Australia</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-5 items-center">
                <div>
                    +65 2 9894 6277
                </div>
                <button class="bg-slate-200 py-2 px-4 rounded-xl">Sign in</button>
                <button class="bg-blue-600 text-white py-2 px-4 rounded-xl">Join for free</button>
            </div>
        </div>
    </header>
</template>