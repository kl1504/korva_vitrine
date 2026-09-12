<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">
    
    <!-- 1. Navigation -->
    <Navbar />

    <!-- Main content -->
    <main class="flex-grow">
      
      <!-- 2. Hero (Événement Lancement 14 Septembre + Compte à rebours + Console Preview) -->
      <HeroSection />

      <!-- 3. Privilèges du Lancement Officiel (Les 4 avantages des 500 Pionniers Étudiants) -->
      <LaunchHighlights />

      <!-- 4. Réservation Officielle (Formulaire 500 Places Étudiantes avec Justificatif) -->
      <LaunchRegistration />

      <!-- 5. FAQ Spéciale Lancement Officiel -->
      <FaqSection />

    </main>

    <!-- 6. Footer avec mise en avant ALIBORA -->
    <FooterSection />

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import LaunchHighlights from './components/LaunchHighlights.vue'
import LaunchRegistration from './components/LaunchRegistration.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  ScrollTrigger.defaults({
    toggleActions: 'play none none none'
  })
  
  window.addEventListener('load', () => {
    ScrollTrigger.refresh()
  })
})
</script>
