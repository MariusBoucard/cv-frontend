<template>
    <div class="video-container">
        <video ref="videoPlayer" controls autoplay class="video-player">
            <source :src="videoUrl" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
export default {
    name: 'PassionVideo',
    data() {
        return {
            videoUrl: 'http://localhost:8080/api/video', // Backend video stream URL
        };
    },
};
</script>

<style>
.video-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.video-player {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>