<template>
  <div class="topbar bg- bg-primary">
    <!-- Profile Section -->
    <img src="@/assets/images/profilPicture.jpg" alt="Profile Picture" class="profile-pic" />

    <div class="profile">
      <div class="profile-info">
        <h2>Marius Boucard Bocciarelli</h2>
        <p class="text-textSecondary">Ingénieur informatique</p>
        <p class="text-textSecondary">Passionné de musique et de bricolage informatique</p>
      </div>
    </div>

    <!-- External Links -->
    <div class="external-links">
      <a href="https://github.com/" target="_blank"
        class="external-link text-textSecondary bg-primaryButton hover:bg-secondaryButton hover:text-primary">GitHub</a>
      <a href="https://open.spotify.com/" target="_blank"
        class="external-link text-textSecondary bg-primaryButton hover:text-primary hover:bg-secondaryButton">Spotify</a>
      <a href="https://www.linkedin.com/in/marius-boucard-bocciarelli-390793222/" target="_blank"
        class="external-link text-textSecondary bg-primaryButton hover:text-primary hover:bg-secondaryButton">LinkedIn</a>
    </div>

    <!-- Router Links -->
    <div class="router-links flex flex-wrap">
      <router-link to="/motivations"
        class="bubble bg-secondaryButton text-white hover:bg-primaryButton">Motivations</router-link>
      <router-link to="/cv" class="bubble bg-secondaryButton text-white hover:bg-primaryButton">CV</router-link>
      <router-link to="/projects"
        class="bubble bg-secondaryButton text-white hover:bg-primaryButton">Projects</router-link>
      <router-link to="/passions"
        class="bubble bg-secondaryButton text-white hover:bg-primaryButton">Passions</router-link>
      <router-link to="/contact"
        class="bubble bg-secondaryButton text-white hover:bg-primaryButton">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;

}

.profile {
  display: flex;
  align-items: center;
  position: relative;
}

.profile-pic {
  height: 80%;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
  border: 5px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile-info {
  margin-left: 180px;
}

.profile-info h2 {
  margin: 0;
  font-size: 1.5rem;
}

.profile-info p {
  margin: 0;
  font-size: 0.9rem;
}

.external-links {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}

.external-link {
  text-decoration: none;
  font-weight: bold;
}

.external-link:hover {
  text-decoration: underline;
  color: white;
}

.router-links {
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  margin-top: -30px;
}

.bubble {
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
</style>