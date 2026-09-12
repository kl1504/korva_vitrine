<template>
  <section id="highlights" class="py-24 relative bg-white border-t border-slate-100 overflow-hidden">
    <!-- Subtle background accent -->
    <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-widest">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Programme Lancement Étudiants • Rentrée 2026
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Pourquoi rejoindre les
          <span class="text-gradient-primary"> 500 étudiants pionniers ?</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Préparez vos examens (DCG, DSCG, BTS CG, Master CCA, Écoles de commerce) et réalisez vos cas pratiques sur un outil comptable moderne et certifié.
        </p>
      </div>

      <!-- Highlights Grid (4 cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card 1: Accès Étudiant Gratuit -->
        <div class="group relative rounded-2xl p-7 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              0€ pour vos études • 500 places
            </div>
            <h3 class="font-display font-bold text-xl text-slate-900">
              Accès Étudiant 100% Offert
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Les 500 premiers étudiants inscrits bénéficient d'un compte gratuit sans abonnement ni frais cachés pour s'exercer et monter en compétences réelles.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-primary">
            <span>Privilège garanti aux 500 pionniers</span>
          </div>
        </div>

        <!-- Card 2: Factur-X & Factures -->
        <div class="group relative rounded-2xl p-7 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
              Réforme 2026
            </div>
            <h3 class="font-display font-bold text-xl text-slate-900">
              Maîtrise de Factur-X
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Pratiquez la norme Factur-X (format hybride PDF/A-3 lisible et XML structuré EN16931) qui s'impose à toutes les entreprises françaises dès 2026.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
            <span>Compétence clé pour votre CV</span>
          </div>
        </div>

        <!-- Card 3: FEC DGFIP & Journaux -->
        <div class="group relative rounded-2xl p-7 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-100 text-violet-800">
              Norme DGFIP
            </div>
            <h3 class="font-display font-bold text-xl text-slate-900">
              FEC Certifié &amp; Journaux
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Générez de véritables Fichiers des Écritures Comptables (FEC). Testez l'équilibre de vos balances, grands-livres et journaux de ventes et achats.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
            <span>Parfait pour cas pratiques DCG / BTS</span>
          </div>
        </div>

        <!-- Card 4: Portail Korva Client B2B -->
        <div class="group relative rounded-2xl p-7 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
              Avant-première VIP
            </div>
            <h3 class="font-display font-bold text-xl text-slate-900">
              Portail Korva Client B2B
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Découvrez en avant-première l'espace client moderne permettant le règlement dématérialisé et la consultation d'historique en temps réel.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
            <span>Bêta exclusive réservée aux étudiants</span>
          </div>
        </div>

      </div>

      <!-- Banner with Student CTA & Company Support Info -->
      <div class="mt-14 rounded-2xl bg-gradient-to-r from-primary to-blue-700 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <h4 class="font-display text-2xl font-bold">
            Ouverture officielle du quota étudiants le 14 septembre
          </h4>
          <p class="text-blue-100 text-sm max-w-xl">
            Réservez dès maintenant pour être certain(e) d'obtenir l'une des 500 places offertes sur les 2 semaines.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="#reservation"
            class="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-primary font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Réserver mon accès étudiant (0€) →
          </a>
          <a
            :href="`mailto:${supportEmail}?subject=Demande%20d%27acc%C3%A8s%20Korva%20(Entreprise%20%2F%20Particulier)`"
            class="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-medium text-xs sm:text-sm transition-all duration-200"
          >
            Entreprise ? Contacter le support
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '../config/site'

const supportEmail = siteConfig.supportEmail
</script>
