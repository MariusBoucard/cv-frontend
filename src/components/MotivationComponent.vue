<template>
    <div class="flex justify-center items-start min-h-screen bg-background">
        <div class="bg-backgroundComp shadow-md rounded-lg p-6 transition-all duration-300 listItems w-4/5">
            <!-- Title -->
            <h1 class="text-3xl font-bold mb-4 text-center text-textPrimary">My Motivation</h1>

            <!-- Short Description -->
            <p class="text-lg text-gray-700 mb-6 text-center text-textSecondary">
                A brief introduction to my motivation and what drives me forward.
            </p>

            <!-- Video Section -->
            <div class="flex justify-center mb-6">
                <video class="rounded-lg shadow-md" controls width="640" height="360">
                    <source src="http://localhost:8080/api/video" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <!-- Long Motivational Text -->
            <div class="text-gray-800 leading-relaxed text-textSecondary">
                <p class="mb-4">
                    Motivation is the driving force behind everything I do. It pushes me to overcome challenges, strive
                    for excellence, and achieve my goals. Here are some key points that define my motivation:
                </p>

                <!-- Key Points -->
                <ul class="list-disc list-inside mb-4 text-textSecondary">
                    <li>Passion for continuous learning and growth.</li>
                    <li>Commitment to making a positive impact.</li>
                    <li>Resilience in the face of adversity.</li>
                    <li>Desire to inspire and empower others.</li>
                </ul>

                <p class="text-textSecondary">
                    These principles guide me every day, helping me stay focused and determined to reach new heights. I
                    believe that with the right mindset and dedication, anything is possible.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MotivationComponent",
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>