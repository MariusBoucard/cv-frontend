<template>
    <div class="topbar">
      <div>
          <div class="profile">
              <img src="" alt="Profile Picture" class="profile-pic" />
            </div>
      <div class="external-links">
        <a href="https://github.com/" target="_blank" class="external-link">GitHub</a>
        <a href="https://open.spotify.com/" target="_blank" class="external-link">Spotify</a>
      </div>
    </div>

      <div class="router-links">
        <router-link to="/about" class="bubble">About</router-link>
        <router-link to="/cv" class="bubble">CV</router-link>
        <router-link to="/projects" class="bubble">Projects</router-link>
        <router-link to="/contact" class="bubble">Contact</router-link>
      </div>
    
    </div>


  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Topbar container */
  .topbar {
    display: flex;
    flex-direction: column;;
    padding: 1rem;
    background-color: #f8f9fa;
    border-bottom: 2px solid #e5e7eb;
  }
  
  /* Profile picture */
  .profile {
    flex: 1;
  }
  .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* Router links (bubbles) */
  .router-links {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
  }
  .bubble {
    padding: 0.5rem 1rem;
    background-color: #42ec4b;
    color: white;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s, background-color 0.2s;
  }

  .external-links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  </style>