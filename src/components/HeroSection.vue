<template>
  <div>
    <!-- ===== Cinematic Full-Bleed Hero ===== -->
    <section ref="heroRef" class="relative min-h-screen flex flex-col overflow-hidden bg-[#F8FAFC]">

      <!-- Background Image with subtle parallax via GSAP -->
      <div ref="bgImageRef" class="hero-background absolute inset-0 z-0 will-change-transform">
        <img
          src="/images/hero.png"
          alt="Étudiants et professionnels Korva"
          class="hero-background-image w-full h-full object-cover object-center lg:object-[center_25%]"
          fetchpriority="high"
          decoding="async"
        />
        <!-- Gradient gauche uniquement : transparent à droite = personnes visibles sans flou -->
        <div class="absolute inset-0 hero-gradient-overlay"></div>
        <!-- Vignette légère en haut pour le contraste de la navbar -->
        <div class="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
      </div>

      <!-- Decorative geometric accent -->
      <div class="absolute top-32 right-12 hidden xl:block z-10 pointer-events-none opacity-40">
        <div class="w-64 h-64 rounded-full border border-primary/20 animate-[spin_30s_linear_infinite]"></div>
        <div class="absolute inset-8 rounded-full border border-secondary/15 animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 flex flex-col justify-center flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1440px] mx-auto w-full">
          <div class="max-w-3xl space-y-6">

            <!-- Main headline — staggered word animation -->
            <h1 ref="headlineRef" class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              <span class="hero-word block">Soyez parmi les 500</span>
              <span class="hero-word block">premiers étudiants à profiter</span>
              <span class="hero-word block text-gradient-primary">gratuitement de Korva.</span>
            </h1>

            <!-- Subtitle -->
            <p ref="subtitleRef" class="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-medium">
              Dès ce 14 septembre et pendant 2 semaines : réservez votre accès étudiant 100% gratuit pour vos cours, cas pratiques et stages. Écritures réelles, Factur-X 2026 et FEC conforme DGFIP.
            </p>

            <!-- Countdown component directly in Hero -->
            <div ref="countdownWrapperRef" class="pt-2">
              <LaunchCountdown />
            </div>

            <!-- Quick CTAs -->
            <div ref="ctasRef" class="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <a
                href="#reservation"
                class="btn-magnetic w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-[0_8px_24px_-4px_rgba(37,71,235,0.5)] hover:shadow-[0_12px_32px_-4px_rgba(37,71,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Réserver mon accès étudiant (0€)</span>
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              
              <!-- Contact support for companies / individuals -->
              <a
                :href="`mailto:${supportEmail}?subject=Demande%20d%27acc%C3%A8s%20Korva%20(Entreprise%20%2F%20Particulier)`"
                class="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/95 hover:bg-white text-slate-800 font-medium text-sm border border-slate-200/90 hover:border-slate-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Entreprise ou Particulier ? Contacter le support</span>
              </a>
            </div>

            <!-- Trust micro badges -->
            <div ref="trustRef" class="flex flex-wrap items-center gap-2 pt-1">
              <span
                v-for="badge in trustBadges"
                :key="badge"
                class="inline-flex items-center gap-1.5 text-xs text-slate-700 font-mono font-medium bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/70 shadow-sm"
              >
                <svg class="w-3.5 h-3.5 text-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ badge }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar : Plus d'informations sur Korva & Alibora signature -->
      <div ref="scrollCueRef" class="relative z-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1440px] mx-auto w-full flex flex-wrap items-center justify-between gap-4">

          <!-- Solution link pill -->
          <a
            :href="korvaSolutionUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 hover:border-primary/40 shadow-sm text-xs text-slate-700 hover:text-primary transition-all duration-200 group/info font-medium"
          >
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span>Pour plus d'informations sur Korva : <strong class="text-primary underline decoration-primary/30 underline-offset-2">Découvrir la solution sur ALIBORA</strong></span>
            <svg class="w-3.5 h-3.5 text-slate-400 group-hover/info:text-primary transition-transform group-hover/info:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>

          <!-- Alibora publisher pill -->
          <a
            :href="aliboraUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 hover:border-primary/40 shadow-sm text-xs text-slate-600 hover:text-slate-900 transition-all duration-200 group/alibora"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span class="text-[11px] font-mono">
              Un produit conçu &amp; édité par <strong class="text-slate-900 group-hover/alibora:text-primary font-bold transition-colors">ALIBORA</strong>
            </span>
            <svg class="w-3.5 h-3.5 text-slate-400 group-hover/alibora:text-primary transition-transform group-hover/alibora:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LaunchCountdown from './LaunchCountdown.vue'
import { siteConfig } from '../config/site'

gsap.registerPlugin(ScrollTrigger)

const aliboraUrl = siteConfig.aliboraUrl
const supportEmail = siteConfig.supportEmail
const korvaSolutionUrl = siteConfig.korvaSolutionUrl

// Refs
const heroRef = ref<HTMLElement | null>(null)
const bgImageRef = ref<HTMLElement | null>(null)
const headlineRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const countdownWrapperRef = ref<HTMLElement | null>(null)
const ctasRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const scrollCueRef = ref<HTMLElement | null>(null)

const trustBadges = ['500 Places Étudiants', 'DCG, DSCG, BTS CG, CCA', 'FEC certifié DGFIP', 'Factur-X 2026']

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsap.set([headlineRef.value, subtitleRef.value, countdownWrapperRef.value, ctasRef.value, trustRef.value, scrollCueRef.value], {
      opacity: 1, y: 0, x: 0
    })
    return
  }

  // ─── HERO ENTRANCE TIMELINE ───────────────────────────────
  const tl = gsap.timeline({ delay: 0.2 })

  // Headline words stagger in
  tl.fromTo(headlineRef.value?.querySelectorAll('.hero-word') || [],
    { opacity: 0, y: 35, skewY: 1.5 },
    {
      opacity: 1, y: 0, skewY: 0,
      duration: 0.65, stagger: 0.1,
      ease: 'power4.out'
    }
  )
  .fromTo(subtitleRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3'
  )
  .fromTo(countdownWrapperRef.value,
    { opacity: 0, y: 25, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }, '-=0.2'
  )
  .fromTo(ctasRef.value?.querySelectorAll('a') || [],
    { opacity: 0, y: 15, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.4)' }, '-=0.2'
  )
  .fromTo(trustRef.value?.querySelectorAll('span') || [],
    { opacity: 0, x: -10 },
    { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }, '-=0.2'
  )
  .fromTo(scrollCueRef.value,
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.1'
  )

  if (bgImageRef.value) {
    gsap.to(bgImageRef.value, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>
