<template>
  <div class="home">

    <TopBarComponent></TopBarComponent>

    <div>
      <RouterView />
    </div>
  </div>
</template>


<script setup>
import TopBarComponent from '../components/TopBarComponent.vue'

</script>
<style>
.home {
  width: 100%;
}
</style>
