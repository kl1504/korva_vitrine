<template>
  <footer class="bg-[#0B0F19] text-slate-400 relative overflow-hidden">

    <!-- Top decorative line -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

    <!-- Ambient orbs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/6 blur-3xl pointer-events-none"></div>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Main footer grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/8">

        <!-- Brand column -->
        <div class="lg:col-span-2 space-y-5">
          <a href="#" class="flex items-center gap-3 group w-fit">
            <div class="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/images/logo.png" alt="Korva" class="w-9 h-9 object-contain drop-shadow-sm" />
            </div>
            <div>
              <span class="font-display font-extrabold text-lg tracking-wider text-white group-hover:text-primary transition-colors">KORVA</span>
              <span class="text-[9px] text-slate-500 uppercase tracking-[0.18em] block font-semibold">Precision Fiscal Instrument</span>
            </div>
          </a>

          <p class="text-sm text-slate-500 max-w-sm leading-relaxed">
            La console financière et comptable de nouvelle génération. Éditée par ALIBORA, conforme DGFIP, FEC et Factur-X 2026.
          </p>

          <!-- Support Contact Badge for Companies / Individuals -->
          <div class="rounded-xl p-4 bg-white/5 border border-white/10 space-y-2 max-w-sm">
            <span class="text-xs font-mono text-slate-300 font-semibold block">
              Support Professionnels &amp; Particuliers :
            </span>
            <a
              :href="`mailto:${supportEmail}`"
              class="inline-flex items-center gap-2 text-xs font-mono text-primary-light hover:text-white transition-colors"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{{ supportEmail }}</span>
            </a>
          </div>

          <!-- Alibora publisher badge -->
          <div class="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              :href="aliboraUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-xs text-slate-300 transition-all duration-200 group/alibora w-fit shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Un produit conçu &amp; édité par <strong class="text-white group-hover/alibora:text-primary font-bold transition-colors">ALIBORA</strong></span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover/alibora:text-primary transition-transform group-hover/alibora:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Programme Étudiants column -->
        <div class="space-y-4">
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-[0.12em]">Programme Étudiants</h4>
          <ul class="space-y-2.5">
            <li>
              <a href="#reservation" class="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                500 Accès Gratuits
              </a>
            </li>
            <li>
              <a href="#highlights" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                Filières DCG &amp; DSCG
              </a>
            </li>
            <li>
              <a href="#highlights" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                BTS CG &amp; Master CCA
              </a>
            </li>
            <li>
              <a href="#reservation" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                Dépôt de justificatif
              </a>
            </li>
          </ul>
        </div>

        <!-- Solution & En savoir plus column -->
        <div class="space-y-4">
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-[0.12em]">La Solution</h4>
          <ul class="space-y-2.5">
            <li>
              <a
                :href="korvaSolutionUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-primary-light hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-medium"
              >
                <span>Découvrir Korva sur ALIBORA</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
            <li>
              <a href="#highlights" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                Facturation Factur-X 2026
              </a>
            </li>
            <li>
              <a href="#highlights" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                Export FEC certifié DGFIP
              </a>
            </li>
            <li>
              <a href="#faq" class="text-sm text-slate-500 hover:text-white transition-colors duration-200">
                Foire Aux Questions
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal column -->
        <div class="space-y-4">
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-[0.12em]">Sécurité & Légal</h4>
          <ul class="space-y-2.5">
            <li v-for="link in legalLinks" :key="link.label">
              <a :href="link.href" :target="link.target" class="text-sm text-slate-500 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-px bg-slate-400 transition-all duration-200 shrink-0 overflow-hidden"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
        <div class="flex flex-wrap items-center gap-1.5">
          <span>© 2026 KORVA — Un produit développé par</span>
          <a
            :href="aliboraUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-200 hover:text-primary font-bold underline decoration-primary/50 underline-offset-4 transition-colors"
          >
            ALIBORA
          </a>
          <span>· Tous droits réservés.</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-secondary font-medium">● Conforme norme NF 203 / DGFIP</span>
          <span class="text-slate-700">•</span>
          <a
            :href="korvaSolutionUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Solution Korva</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '../config/site'

const aliboraUrl = siteConfig.aliboraUrl
const supportEmail = siteConfig.supportEmail
const korvaSolutionUrl = siteConfig.korvaSolutionUrl

const legalLinks = [
  { label: 'Édité par ALIBORA (alibora.com)', href: aliboraUrl, target: '_blank' },
  { label: 'Plus d\'infos sur Korva', href: korvaSolutionUrl, target: '_blank' },
]
</script>
