<template>
    <div class="flex justify-center items-start min-h-screen bg-gray-100">
        <div class="w-4/5">
            <div v-for="(passion, index) in   passions  " :key="index"
                class="bg-white shadow-md rounded-lg mb-6 p-6 transition-all duration-300 flex flex-col md:flex-row"
                :class="{ 'h-auto': passion.showDetails, 'h-[300px]': !passion.showDetails }">

                <div class="flex-1">
                    <h2 class="text-2xl font-bold mb-4">{{ passion.title }}</h2>
                    <p class="text-gray-700 mb-4">{{ passion.shortDescription }}</p>

                    <button @click="toggleDetails(index)" class="text-blue-500 hover:underline">
                        {{ passion.showDetails ? "Hide Details" : "Show Details" }}
                    </button>

                    <div v-show="passion.showDetails" class="mt-4">
                        <p class="text-gray-800">{{ passion.details }}</p>
                        <div v-if="passion.extraContent" class="mt-4">
                            <img v-if="passion.extraContent.image" :src="passion.extraContent.image" alt="Extra Content"
                                class="rounded-lg shadow-md" />

                            <video v-if="passion.extraContent.video" controls class="rounded-lg shadow-md mt-4">
                                <source :src="passion.extraContent.video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div v-if="passion.extraContent.links" class="mt-4">
                                <p class="text-gray-800 font-semibold">Links:</p>
                                <ul>
                                    <li v-for="(link, index) in passion.extraContent.links" :key="index">
                                        <a :href="link" target="_blank" class="text-blue-500 hover:underline">{{ link
                                            }}</a>
                                    </li>
                                </ul>
                            </div>

                            <SoundPlayer v-if="passion.extraContent.soundDry" :src="passion.extraContent.soundDry"
                                :inputDry="passion.extraContent.soundDry" :inputWet="passion.extraContent.soundWet"
                                label="Sound Dry" />

                        </div>
                    </div>
                </div>
                <div class="flex-1 flex justify-center items-center mt-6 md:mt-0 md:ml-6">
                    <Card3DComponent :image="passion.card.image" :description="passion.card.description" />
                    <div class="flex justify-center mt-6">
                        <a v-if="typeof passion.github === 'string'" :href="passion.github" target="_blank"
                            class="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
                            <img src="/images/projets/github.png" alt="GitHub" class="w-5 h-5 mr-2" />
                            <span>View on GitHub</span>
                        </a>

                        <div v-else-if="Array.isArray(passion.github)" class="flex flex-col space-y-2">
                            <a v-for="(link, index) in passion.github" :key="index" :href="link" target="_blank"
                                class="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
                                <img src="/images/projets/github.png" alt="GitHub" class="w-5 h-5 mr-2" />
                                <span>View on GitHub {{ index + 1 }}</span>
                            </a>
                        </div>

                        <p v-else class="text-gray-500 italic">No GitHub link available</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Card3DComponent from "@/widgets/Card3DComponent.vue";
import SoundPlayer from "@/widgets/SoundPlayerComponent.vue";

export default {
    name: "PassionsComponent",
    components: {
        SoundPlayer,
        Card3DComponent,
    },
    data() {
        return {
            passions: [
                {
                    title: "Ce site internet",
                    shortDescription: "Capturing moments through the lens.",
                    details:
                        "Mobiliser les connaissances et comprendre les bases de la création d'une architecture Spring et Vuejs",
                    showDetails: false,
                    extraContent: {
                        image: "path-to-photography-image.jpg",
                        video: "path-to-video.mp4",
                        soundDry: "http://localhost:8080/api/audio",
                        soundWet: "http://localhost:8080/api/audio",
                        links: [
                            "https://www.example.com/link1",
                            "https://www.example.com/link2",
                        ],
                    },
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },

                    github: ["https://github.com/MariusBoucard/cv-frontend", "https://github.com/MariusBoucard/cv-backend"]
                },
                {
                    title: "Virtual Amplifier NAM (VST)",
                    shortDescription: "Creating and enjoying melodies.",
                    details:
                        "Music has always been a source of inspiration for me. I love playing instruments and exploring different genres.",
                    showDetails: false,
                    extraContent: {
                        video: "path-to-music-video.mp4",
                    },
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: "https://github.com/MariusBoucard/GainPlugin"
                },
                {
                    title: "Geiger Noise Generator (VST)",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: "https://github.com/MariusBoucard/BitCrusher"
                },
                {
                    title: "L'agrafe Journal",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: ["https://github.com/MariusBoucard/agrafeFrontend", "https://github.com/MariusBoucard/agrafeBackend"]
                },
                {
                    title: "Our Journey",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: "https://github.com/MariusBoucard/ourJourney"
                },
                {
                    title: "Guitar Course App",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    }
                    , github: "https://github.com/MariusBoucard/guitarapp"
                },
                {
                    title: "Script App",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: "https://github.com/MariusBoucard/scriptgenerator"

                },
                {
                    title: "Nextcloud",
                    shortDescription: "Exploring new places and cultures.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    }
                },
                {
                    title: "Locals LLM",
                    shortDescription: "Exploration d'une utilisation local de LLM dans le cadre de recherches autour du développement d'agents virtuels.",
                    details:
                        "Traveling broadens my horizons and helps me appreciate the diversity of the world. Each journey is a new adventure.",
                    showDetails: false,
                    extraContent: null,
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    }
                },


                {
                    title: "Autres",
                    details: "Reel zoomer, Metronome, eq, ping pong delay",
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    },
                    github: ["https://github.com/MariusBoucard/pingPongDelay", "https://github.com/MariusBoucard/bfWebsite"]
                }
            ],
        };
    },
    methods: {
        toggleDetails(index) {
            this.passions[index].showDetails = !this.passions[index].showDetails;
        },
    },
};
</script>

<style scoped>
.flex-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.flex-1 .flex.justify-center.mt-6 {
    margin-top: 16px;
    margin-bottom: auto;
}

button.text-blue-500 {
    display: block;
    margin: 12 auto;
    margin-top: 16px;
}

button.text-blue-500:hover {
    color: #2563eb;
    text-decoration: underline;
}

.bg-white {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bg-white .p-6 {
    padding: 24px;
}

@media (min-width: 768px) {
    .bg-white {
        flex-direction: row;
    }
}
</style>