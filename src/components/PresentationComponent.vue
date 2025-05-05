<template>
    <div class="flex justify-center items-start min-h-screen bg-gray-100">
        <div class="bg-white shadow-md rounded-lg p-6 transition-all duration-300 listItems"
            :class="activeIndex !== null ? 'w-4/5 md:w-3/4' : 'w-3/5 md:w-2/3 lg:w-1/2'">
            <!-- Title -->
            <h1 class="text-4xl font-extrabold mb-6 text-center text-gray-800">
                {{ title }}
            </h1>

            <!-- Description -->
            <p class="text-lg text-center text-gray-600 mb-6">
                {{ description }}
            </p>

            <!-- Video -->
            <div class="flex justify-center mb-6">
                <video v-if="videoLink" controls class="rounded-lg shadow-md w-3/5">
                    <source :src="videoLink" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2 class="text-2xl font-semibold text-gray-700 mb-4 text-center">
                {{ titleInfo }}
            </h2>
            <p class="text-base text-center text-gray-600">
                {{ additionnalInformations }}
            </p>
            <ul class="cvList">
                <li v-for="(experience, index) in experiences" :key="index" class="mb-6 border-b pb-6">
                    <div class="flex items-center gap-6 cursor-pointer" @click="toggleDetails(index)">
                        <!-- Image Section -->
                        <div
                            class="flex-shrink-0 h-15 w-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <img :src="experience.technologyImage" alt="Technology" class="h-4/5 object-cover" />
                        </div>

                        <!-- Content Section -->
                        <div class="flex items-center flex-grow">
                            <!-- Title and Job Section -->
                            <div class="flex flex-col flex-grow">
                                <h2 class="text-lg font-bold text-gray-800 truncate">
                                    {{ experience.title }}
                                </h2>
                                <p class="text-sm text-gray-600 mt-2 text-center mx-auto">
                                    {{ experience.job }}
                                </p>
                            </div>

                            <!-- Year and Arrow Section -->
                            <div class="flex flex-col items-end text-sm text-gray-500 w-32">
                                <span class="text-gray-500 transform transition-transform"
                                    :class="{ 'rotate-180': activeIndex === index }">
                                    ▼
                                </span>
                                <span class="mt-1">{{ experience.yearBegin }} - {{ experience.yearEnd }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-show="activeIndex === index" class="mt-4 p-6 bg-gray-100 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-textPrimary text-center mb-4">
                            {{ experience.detailsTitle }}
                        </h2>

                        <p class="text-textSecondary text-center mb-6">
                            {{ experience.details }}
                        </p>

                        <div class="flex items-center gap-6">
                            <Card3DComponent v-if="experience.image" :image="experience.image"
                                :description="experience.description" />

                            <p class="text-textSecondary text-lg">
                                {{ experience.pictureDescription || 'Additional information about the experience.' }}
                            </p>
                        </div>

                        <div class="mt-6 flex gap-4 justify-center">
                            <img v-for="(image, imgIndex) in experience.detailImages" :key="imgIndex" :src="image"
                                alt="Detail" class="w-20 h-20 rounded-lg shadow-md object-cover" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Cv from "@/data/CvData.json";
import Card3DComponent from "@/widgets/Card3DComponent.vue";
export default {
    name: "PresentationComponent",
    components: {
        Card3DComponent,
    },
    data() {
        return {
            experiences: Cv.Cv,
            description: Cv.description,
            videoLink: String(Cv.videoLink),
            title: Cv.title,
            activeIndex: null,
            additionnalInformations: Cv.additionnalInformations,
            titleInfo: Cv.titleInfo,

        }
    },
    methods: {

        toggleDetails(index) {
            this.activeIndex = this.activeIndex === index ? null : index;

        },
    },
};
</script>

<style scoped>
.cvList {
    margin-top: 20px;
}

.cvList li {
    padding: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.listItems {
    width: 80%;
}
</style>