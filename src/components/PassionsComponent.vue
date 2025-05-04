<template>
    <div class="flex justify-center items-start min-h-screen bg-gray-100">
        <div class="w-4/5">
            <div v-for="(passion, index) in   passions  " :key="index"
                class="bg-white shadow-md rounded-lg mb-6 p-6 transition-all duration-300 flex flex-col md:flex-row"
                :class="{ 'h-auto': passion.showDetails, 'h-[300px]': !passion.showDetails }">

                <!-- Left Section: Text Content -->
                <div class="flex-1">
                    <!-- Title -->
                    <h2 class="text-2xl font-bold mb-4">{{ passion.title }}</h2>
                    <p class="text-gray-700 mb-4">{{ passion.shortDescription }}</p>

                    <!-- Toggle Details Button -->
                    <button @click="toggleDetails(index)" class="text-blue-500 hover:underline">
                        {{ passion.showDetails ? "Hide Details" : "Show Details" }}
                    </button>

                    <!-- Details Section -->
                    <div v-show="passion.showDetails" class="mt-4">
                        <p class="text-gray-800">{{ passion.details }}</p>
                        <div v-if="passion.extraContent" class="mt-4">
                            <!-- Example of extra content -->
                            <img v-if="passion.extraContent.image" :src="passion.extraContent.image" alt="Extra Content"
                                class="rounded-lg shadow-md" />
                            <video v-if="passion.extraContent.video" controls class="rounded-lg shadow-md mt-4">
                                <source :src="passion.extraContent.video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex justify-center items-center mt-6 md:mt-0 md:ml-6">
                    <Card3DComponent :image="passion.card.image" :description="passion.card.description" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Card3DComponent from "@/widgets/Card3DComponent.vue";

export default {
    name: "PassionsComponent",
    components: {
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
                    },
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    title: "Synthétiseur",
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
                    title: "Autres",
                    details: "Reel zoomer, Metronome, eq, ping pong delay",
                    card: {
                        image: "/images/projets/guitarApp.png",
                        description: "This is a short description.",
                    }
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
.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
</style>