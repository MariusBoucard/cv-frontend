<template>
    <div class="flex justify-center items-start min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-lg p-6 transition-all duration-300 listItems"
            :class="activeIndex !== null ? 'w-4/5 md:w-3/4' : 'w-3/5 md:w-2/3 lg:w-1/2'">
            <h1 class="text-2xl font-bold mb-4 text-center">Mes experiences professionnelles</h1>
            <p>
                quick descriptive

            </p>
            <ul>
                <li v-for="(experience, index) in experiences" :key="index" class="mb-4 border-b pb-4">
                    <!-- Collapsed Section -->
                    <div class="flex justify-between items-center cursor-pointer" @click="toggleDetails(index)">
                        <div class="flex items-center gap-4">
                            <img :src="experience.technologyImage" alt="Technology" class="w-10 h-10 rounded-full" />
                            <h2 class="text-lg font-semibold">{{ experience.title }}</h2>
                        </div>
                        <span class="text-gray-500" :class="{ 'rotate-180': activeIndex === index }">
                            ▼
                        </span>
                    </div>

                    <!-- Date Section -->
                    <div class="text-sm text-gray-600 mt-2">
                        <span>{{ experience.yearBegin }} - {{ experience.yearEnd }}</span>
                    </div>

                    <!-- Expanded Section -->
                    <div v-show="activeIndex === index" class="mt-2 text-gray-700">
                        <p>{{ experience.details }}</p>
                        <div class="mt-4 flex gap-4">
                            <img v-for="(image, imgIndex) in experience.detailImages" :key="imgIndex" :src="image"
                                alt="Detail" class="w-20 h-20 rounded-lg shadow-md" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    title: "Slate digital",
                    details: "",
                    technologyImage: "/images/cv/slate_logo.png",
                    detailImages: [
                        "/images/techno/Cpp.png",
                        "/images/techno/Cmake.png",
                        "/images/techno/JUCE.png",
                        "/images/techno/Skia.svg",
                        "/images/techno/ObjectiveC.png",
                    ],
                    yearBegin: "2024",
                },
                {
                    title: "Coexya",
                    details: "Vue JS app Compote",
                    technologyImage: "/images/cv/Coexya.png",
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Electron.png",
                        "/images/techno/Playwright.png",
                    ],
                    yearBegin: "2023",
                },
                {
                    title: "Newcastle University",
                    details: "",
                    technologyImage: "/images/cv/newcastle.png",
                    detailImages: [
                        "/images/techno/Python.png",
                        "/images/techno/Figma.png",
                        "/images/techno/Research.png",
                    ],
                },
                {
                    title: "Insa Rennes",
                    details: " Profil data scientist",
                    technologyImage: "images/cv/insa_logo.png",
                    detailImages: [
                        "/images/techno/Docker.png",
                        "/images/techno/Kubernetes.png",
                        "/images/techno/Spring.png",
                        "/images/techno/Java.png",
                        "/images/techno/Cpp.png",
                        "/images/techno/Maven.png",
                        "/images/techno/Mysql.png",
                        "/images/techno/Python.png",
                        "/images/techno/Angular.png",
                    ],
                    yearBegin: "2019",
                    yearEnd: "2024",
                },
                {
                    title: "L'agraphe journal",
                    details: "Worked on a project to develo",
                    technologyImage: "images/cv/lagrafe.png",
                    detailImages: [
                        "/images/techno/Vuejs.png",
                        "/images/techno/Express.png",
                        "/images/techno/Flask.png",
                        "/images/techno/nginx.png",
                    ],
                    yearBegin: "2022",

                },
                {
                    title: "Lycée Bourdonnières",
                    details: "",
                    technologyImage: "images/cv/bourdonnieres.jpg",
                    detailImages: [],
                    yearBegin: "2016",
                    yearEnd: "2019",
                },
            ],
            activeIndex: null,
        };
    },
    methods: {
        toggleDetails(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },
};
</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.listItems {
    width: 80%;
}
</style>