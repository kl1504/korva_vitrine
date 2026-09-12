<template>
  <!-- Navbar GSAP-animated, scroll-aware, premium -->
  <header 
    ref="navbarRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/96 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Logo + Launch Badge -->
      <div class="flex items-center gap-3">
        <a href="#" class="flex items-center gap-0.5 group" @click.prevent="scrollTo('top')">
          <div 
            ref="logoRef"
            class="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          >
            <img src="/images/logo.png" alt="Korva" class="w-14 h-14 object-contain drop-shadow-sm" />
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-display font-extrabold text-[17px] tracking-wider text-slate-900 group-hover:text-primary transition-colors duration-200 flex items-center gap-1">
              KORVA
            </span>
            <span class="text-[9px] text-slate-400 uppercase tracking-[0.15em] font-semibold mt-0.5">Comptabilité &amp; Finance</span>
          </div>
        </a>
      </div>

      <!-- Desktop Nav -->
      <nav ref="navLinksRef" class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="nav-link relative px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 group flex items-center gap-1.5"
          @click.prevent="scrollTo(item.href)"
        >
          <span>{{ item.name }}</span>
          <span v-if="item.badge" class="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-violet-100 text-violet-700 border border-violet-200">
            {{ item.badge }}
          </span>
          <span class="absolute bottom-1 left-3.5 right-3.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </nav>

      <!-- CTAs -->
      <div ref="ctaRef" class="hidden sm:flex items-center gap-3">
        <a
          :href="`mailto:${supportEmail}?subject=Demande%20d%27acc%C3%A8s%20Korva%20(Entreprise%20%2F%20Particulier)`"
          class="text-xs font-mono text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 flex items-center gap-1"
          title="Contacter le support pour entreprises et particuliers"
        >
          <span>Support Pro</span>
          <span class="text-[10px] text-slate-400">↗</span>
        </a>

        <a
          href="#reservation"
          class="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary-hover transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(37,71,235,0.5)] hover:shadow-[0_8px_24px_-4px_rgba(37,71,235,0.6)] hover:-translate-y-px active:translate-y-0 group"
          @click.prevent="scrollTo('#reservation')"
        >
          <span>Accès Étudiant (0€)</span>
          <svg class="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <!-- Mobile hamburger -->
      <div class="flex lg:hidden">
        <button
          @click="isMobileOpen = !isMobileOpen"
          class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          :aria-label="isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <Transition name="icon-swap" mode="out-in">
            <svg v-if="!isMobileOpen" key="menu" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else key="close" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Transition>
        </button>
      </div>
    </div>

    <!-- Mobile drawer with Vue Transition -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileOpen"
        class="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-lg"
      >
        <div class="max-w-[1440px] mx-auto px-4 pt-2 pb-6 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-primary hover:bg-primary/5 transition-all"
            @click.prevent="scrollTo(item.href)"
          >
            <span>{{ item.name }}</span>
            <span v-if="item.badge" class="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-violet-100 text-violet-700">
              {{ item.badge }}
            </span>
          </a>

          <div class="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="#reservation"
              class="block w-full py-3 text-center text-sm font-semibold text-white bg-primary rounded-lg shadow-md"
              @click.prevent="scrollTo('#reservation')"
            >
              Réserver mon accès étudiant
            </a>

            <a
              :href="`mailto:${supportEmail}?subject=Demande%20d%27acc%C3%A8s%20Korva%20(Entreprise%20%2F%20Particulier)`"
              class="block w-full py-2.5 text-center text-xs font-medium text-slate-600 bg-slate-100 rounded-lg"
            >
              Entreprise ou Particulier ? Contacter le support
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { siteConfig } from '../config/site'

const aliboraUrl = siteConfig.aliboraUrl
const supportEmail = siteConfig.supportEmail

const navbarRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)
const navLinksRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navItems = [
  { name: 'Programme Étudiants', href: '#highlights' },
  { name: 'FAQ Lancement', href: '#faq' }
]

const scrollTo = (href: string) => {
  if (href === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // GSAP entrance animation
  const tl = gsap.timeline({ delay: 0.2 })

  tl.fromTo(logoRef.value, 
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
  )
  .fromTo(
    navLinksRef.value?.querySelectorAll('.nav-link') || [],
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
    '-=0.3'
  )
  .fromTo(ctaRef.value,
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' },
    '-=0.3'
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Icon swap transition */
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.15s ease;
}
.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

/* Mobile menu transition */
.mobile-menu-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-leave-active {
  transition: all 0.2s ease-in;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
