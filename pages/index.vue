<template>
    <div class="flex flex-col">
        <div class="bg-softLavenderMist">
            <div class="container mx-auto space-y-28 my-32">
                <div class="flex-row w-full grid gap-4 md:grid-cols-2">
                    <div class="items-center basis-2/4 grid text-primary px-5 md:px-0 ">
                        <div class="space-y-5 my-10">
                            <div class="text-coralFlame font-medium">
                                Exclusive to Media, PR, Brands and Experts
                            </div>
                            <h1 class="text-5xl 2xl:text-5xl font-bold">
                                Make the news in video
                            </h1>
                            <div class="font-medium">
                                Influencing is a connected plataform that makes it simple and fast to create multi-channel news and content.
                            </div>
                            <div class="flex">
                                <div class="text-center">
                                    <button class="bg-coralFlame text-white py-2 px-4 rounded-xl w-[180px]">Join for free</button>
                                    <div class="text-xs">
                                        Yes, really, it's free forever
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items-center basis-2/4 grid text-primary px-5 md:px-0">
                        <div class="bg-white h-full rounded-md flex justify-center items-center">
                            <div>
                                <font-awesome-icon icon="play" class="fa-2x" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-12">
                    <div class="text-center text-deepLavender font-medium text-xl">
                        More than 26,000 users in Australia and around the globe connect via Influencing
                    </div>
                    <div class="grid md:grid-flow-col md:auto-cols-max md:justify-between gap-y-8">
                        <div class="flex justify-center">
                            <img src="/nine.png" class="h-[30px]" alt="nine.com.au">
                        </div>
                        <div class="flex justify-center">
                            <img src="/the-australian.png" class="h-[30px]" alt="The Australian">
                        </div>
                        <div class="flex justify-center">
                            <img src="/telegraph.png" class="h-[30px]" alt="Telegraph">
                        </div>
                        <div class="flex justify-center">
                            <img src="/the-sudney.png" class="h-[30px]" alt="The Sudney">
                        </div>
                        <div class="flex justify-center">
                            <img src="/business.png" class="h-[30px]" alt="Business Insiders">
                        </div>
                        <div class="flex justify-center">
                            <img src="/samsung.png" class="h-[30px]" alt="Samsung">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container mx-auto my-32 grid grid-cols-1 md:grid-cols-2 space-x-10">
                <div class="space-y-5">
                    <h2 class="text-4xl font-semibold">What is Influencing?</h2>
                    <p class="text-xl leading-relaxed">
                        Influencing is a networking platform just for journalists & creators, PRs, and communications professionals and spokespeople.<br>
                        It's a little bit like LinkedIn but just for your peers and the people you work with.<br>
                        And instead of self-congratulatory business posts, your feed is full of news, announcements, and media opportunities.<br>
                        That's not all, though. Integrated into the network are a set of tools for creating or sharing multi-channel news.<br>
                        All of the videos created in Influencing sit on our video cloud, making it effortless to share, edit, and create video news content.<br>
                        <span class="font-medium">
                            Influencing is transforming the way that journalists, PRs, and experts collaborate using video to create more impactful news.
                        </span>
                    </p>
                </div>
                <div class="flex items-center">
                    <img src="/img-example.png" alt="Influencing">
                </div>
            </div>
        </div>
        <div class="bg-softWhite">
            <div class="container mx-auto my-32 space-y-10">
                <div class="space-y-5">
                    <h3 class="text-4xl font-semibold">Keep up with your peers with Influencing's stream of news and mover</h3>
                </div>
                <carousel v-bind="config" class="w-full h-full py-1" :autoplay="3000" :wrap-around="true">
                    <slide v-for="card in midiaCards" :key="card.id">
                        <div>
                            <CardMedia :img="card.img" :date="card.date" :title="card.title" :description="card.description"/>
                        </div>
                    </slide>
                    <!-- <template #addons>
                        <navigation/>
                        <pagination />
                    </template> -->
                </carousel>
                <div class="flex gap-2 px-5">
                    <button class="rounded-full bg-white border-2 border-softBlueGray w-11 h-11">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" class="fa-xs text-mediumGray" />
                    </button>
                    <button class="rounded-full bg-brightBlue text-white border-2border-softBlueGray w-11 h-11">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                    
                    <button></button>
                </div>
            </div>
        </div>
        <div class="bg-softWhite">
            <div class="container mx-auto my-32 space-y-10">
                <div class="space-y-5 text-center">
                    <h3 class="text-4xl font-semibold">All of your tools re-imagined as video-first</h3>
                    <p>
                        The media nd PR tools that you see today cannot cut it when it comes to
                    </p>
                </div>
                <div class="grid grid-cols-4">
                    <div v-for="video in videos" :key="video.id">
                        <CardVideo :title="video.title" :description="video.description" :btnText="video.btnText" :color="video.color"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const config = {
  itemsToShow: 2,
  gap: 6,
  wrapAround: true,
  snapAlign: 'left',
  autoplay: 99999
};
const midiaCards = [
    {
        id: "1",
        img:"/yellow-hair.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    },
    {
        id: "2",
        img:"/woman4.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    },
    {
        id: "3",
        img:"/woman3.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    }
]

const videos = [
    {
        id: 1,
        title: 'A media database that you watch',
        description: "Our contact network helps PRs find media targets and journalists to find sources. But it' s not just contact data; we let you tell other users exactly how best to work you in video.",
        btnText: 'Join for share your knowledge',
        color: 'tealForest'
    },
    {
        id: 2,
        title: 'A newswire with built-in video editor',
        description: "Our contact network helps PRs find media targets and journalists to find sources. But it's not just contact data; we let you tell other users exactly how best to work you in video.",
        btnText: 'Learn more about announcements',
        color: 'electricIndigo'
    },
    {
        id: 3,
        title: 'Conduct asynchronous media interviews',
        description: "Our contact network helps PRs find media targets and journalists to find sources. But it's not just contact data; we let you tell other users exactly how best to work you in video.",
        btnText: 'Learn more about interviews',
        color: 'royalBlue'
    },
    {
        id: 4,
        title: 'Media call-outs with video responses',
        description: "Our contact network helps PRs find media targets and journalists to find sources. But it's not just contact data; we let you tell other users exactly how best to work you in video.",
        btnText: 'Learn more about opportunities',
        color: 'burntCoral'
    }
]
const publishers = [
    {
        id: "1",
        img:"/yellow-hair.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    },
    {
        id: "2",
        img:"/woman4.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    },
    {
        id: "3",
        img:"/woman3.png",
        date:"a day ago",
        title:"Lisa Muxworthy to spearhead growth content across Nine's metro newspapers",
        description:"Lisa Muxworthy, the former editor-in-chief of News.com.au, has been appointed head of growth content at Nine's metro mastheads The Sydney Morning Herald, The age,..."
    }
]
</script>
