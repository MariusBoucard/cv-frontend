<template>
    <div class="flex flex-col items-center min-h-screen bg-gray-100 p-4">

        <!-- Filter Section -->
        <div class="bg-white shadow-md rounded-lg p-4 mb-6 w-4/5">
            <h3 class="text-lg font-bold mb-4">Trier par technologies :</h3>
            <div class="flex gap-4 flex-wrap">
                <button v-for="(tech, index) in uniqueTechnologies" :key="index" @click="filterByTechnology(tech)"
                    :class="{
                    'bg-blue-500 text-white': selectedTechnology === tech,
                    'bg-gray-200 text-gray-700': selectedTechnology !== tech
                }" class="px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition">
                    {{ tech }}
                </button>
                <button @click="clearFilter"
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition">
                    Toutes
                </button>
            </div>
        </div>




        <div class="w-4/5">
            <div v-for="(project, index) in   filteredProjects  " :key="index"
                class="bg-white shadow-md rounded-lg mb-6 p-6 transition-all duration-300 flex flex-col md:flex-row"
                :class="{ 'h-auto': project.showDetails, 'h-auto': !project.showDetails }">

                <div class="flex-[2]">
                    <h2 class="text-2xl font-bold mb-4 text-center">{{ project.title }}</h2>
                    <p class="text-gray-700 mb-4 text-center">{{ project.shortDescription }}</p>
                    <div class="mt-4 flex gap-4 justify-center items-center">
                        <img v-for="(image, imgIndex) in project.detailImages" :key="imgIndex" :src="image" alt="Detail"
                            class="w-20 h-20 rounded-lg shadow-md" />
                    </div>
                    <div class="flex justify-center mt-4">
                        <button @click="toggleDetails(index)" class="text-blue-500 hover:underline">
                            {{ project.showDetails ? "Cacher les détails" : "Afficher les détails" }}
                        </button>
                    </div>
                    <div v-show="project.showDetails"
                        class="mt-4 flex justify-center items-center flex-col text-center">
                        <p class="text-gray-800">{{ project.details }}</p>

                        <div v-if="project.extraContent" class="mt-4">
                            <img v-if="project.extraContent.image" :src="project.extraContent.image" alt="Extra Content"
                                class="rounded-lg shadow-md" />


                            <video v-if="project.extraContent.video" controls class="rounded-lg shadow-md mt-4">
                                <source :src="project.extraContent.video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div v-if="project.extraContent.links" class="mt-4">
                                <p class="text-gray-800 font-semibold">Links:</p>
                                <ul>
                                    <li v-for="(link, index) in project.extraContent.links" :key="index">
                                        <a :href="link" target="_blank" class="text-blue-500 hover:underline">{{ link
                                            }}</a>
                                    </li>
                                </ul>
                            </div>

                            <SoundPlayer v-if="project.extraContent.soundDry" :src="project.extraContent.soundDry"
                                :inputDry="project.extraContent.soundDry" :inputWet="project.extraContent.soundWet"
                                label="Sound Dry" />

                        </div>
                    </div>
                </div>
                <div class="flex-[1] flex flex-col justify-center items-center mt-6 md:mt-0 md:ml-6">
                    <!-- Card Component -->
                    <Card3DComponent :image="project.card.image" :description="project.card.description" />

                    <!-- Button Container -->
                    <div class="flex justify-center mt-4">
                        <a v-if="typeof project.github === 'string'" :href="project.github" target="_blank"
                            class="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
                            <img src="/images/projets/github.png" alt="GitHub" class="w-5 h-5 mr-2" />
                            <span>View on GitHub</span>
                        </a>

                        <div v-else-if="Array.isArray(project.github)" class="flex flex-col space-y-2">
                            <a v-for="(link, index) in project.github" :key="index" :href="link" target="_blank"
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
    name: "ProjectsComponent",
    components: {
        SoundPlayer,
        Card3DComponent,
    },
    data() {
        return {
            selectedTechnology: null,
            projects: [
                {
                    title: "Ce site internet",
                    shortDescription: "Capturing moments through the lens.",
                    details:
                        "Mobiliser les connaissances et comprendre les bases de la création d'une architecture Spring et Vuejs",
                    showDetails: false,
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Spring.png",
                        "/images/techno/Docker.png",
                        "/images/techno/Kubernetes.png",
                        "/images/techno/nginx.png",
                    ],
                    technologies: [
                        "Vuejs",
                        "Spring",
                        "Docker",
                        "Kubernetes",
                        "Nginx",
                    ],
                    extraContent: {
                        image: "path-to-photography-image.jpg",
                        video: "path-to-video.mp4",
                        soundDry: "http://localhost:8080/api/audio",
                        soundWet: "http://localhost:8080/api/audio",
                        links: [
                            "https://www.example.com/link1",
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
                    technologies: [
                        "JUCE",
                        "C++",
                        "CMake",
                        "Blender",
                    ],
                    detailImages: [
                        "/images/techno/Cpp.png",
                        "/images/techno/JUCE.png",
                        "/images/techno/Cmake.png",
                        "/images/techno/blender.png",
                    ],
                    extraContent: {
                        video: null,
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
                    detailImages: [
                        "/images/techno/Cpp.png",
                        "/images/techno/JUCE.png",
                        "/images/techno/Cmake.png",
                        "/images/techno/blender.png",
                    ],
                    technologies: [
                        "JUCE",
                        "C++",
                        "CMake",
                        "Blender",
                    ],
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
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Docker.png",
                        "/images/techno/Express.png",
                        "/images/techno/nginx.png",
                    ],
                    technologies: [
                        "Vuejs",
                        "Docker",
                        "Express",
                        "Nginx",
                    ],
                    extraContent: {
                        image: "/images/projets/agrafe.png",
                        links: [
                            "https://lagrafejournal.com",
                        ],
                    },

                    card: {
                        image: "/images/projets/agrafesite.png",
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
                    extraContent: {
                        links: [
                            "https://ourjourney.fr",
                        ],
                    },
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Docker.png",
                        "/images/techno/Express.png",
                        "/images/techno/nginx.png",
                    ],
                    technologies: [
                        "Vuejs",
                        "Docker",
                        "Express",
                        "Nginx",
                    ],
                    card: {
                        image: "/images/projets/ourjourney.png",
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
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Electron.png",
                    ],
                    technologies: [
                        "Vuejs",
                        "Electron",
                    ],
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
                    technologies: [
                        "Vuejs",
                        "Electron",
                    ],
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Electron.png",
                    ],
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
                    detailImages: [
                        "/images/techno/Docker.png",
                        "/images/techno/Nextcloud.png",
                        "/images/techno/nginx.png",
                        "/images/techno/Reseau.png",
                    ],
                    technologies: [
                        "Docker",
                        "Nextcloud",
                        "Nginx",
                        "Reseau",
                    ],
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
                    technologies: [
                        "Python",
                        "HuggingFace",
                    ],
                    detailImages: [
                        "/images/techno/HuggingFace.jpeg",
                        "/images/techno/lm-studio.png",
                        "/images/techno/Python.png",
                    ],
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
                    technologies: [
                        "Flask",
                        "C++",
                        "JUCE",
                        "CMake",
                        "Java",
                        "Python",
                    ],
                    detailImages: [
                        "/images/techno/Flask.png",
                        "/images/techno/Cpp.png",
                        "/images/techno/JUCE.png",
                        "/images/techno/Cmake.png",
                        "/images/techno/Java.png",
                        "/images/techno/Python.png",
                    ],
                    github: ["https://github.com/MariusBoucard/pingPongDelay", "https://github.com/MariusBoucard/bfWebsite"]
                }
            ],
        };
    },
    computed: {
        uniqueTechnologies() {
            // Extract unique technologies from all projects
            const techSet = new Set();
            this.projects.forEach((project) => {
                project.technologies.forEach((tech) => techSet.add(tech));
            });
            return Array.from(techSet);
        },
        filteredProjects() {
            // Filter projects based on the selected technology
            if (!this.selectedTechnology) {
                return this.projects;
            }
            return this.projects.filter((project) =>
                project.technologies.includes(this.selectedTechnology)
            );
        },
    },
    methods: {
        filterByTechnology(tech) {
            this.selectedTechnology = tech;
        },
        clearFilter() {
            this.selectedTechnology = null;
        },
        toggleDetails(index) {
            this.projects[index].showDetails = !this.projects[index].showDetails;
        },
        toggleDetails(index) {
            this.projects[index].showDetails = !this.projects[index].showDetails;
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