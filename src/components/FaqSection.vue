<template>
  <section id="faq" class="py-24 relative bg-canvas-muted border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary border border-slate-200 text-xs font-mono uppercase tracking-wider shadow-sm font-semibold">
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          Questions Fréquentes • Programme Étudiants
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Tout savoir sur l'événement de lancement
        </h2>
        <p class="text-base sm:text-lg text-slate-600">
          Les réponses à vos questions sur les 500 accès étudiants et les demandes d'accès pour entreprises et particuliers.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx"
          class="rounded-xl border border-slate-200 bg-white transition-all duration-200 shadow-sm"
          :class="openIndex === idx ? 'border-primary shadow-md' : 'hover:border-slate-300'"
        >
          <!-- Accordion Header Button -->
          <button 
            @click="toggle(idx)"
            class="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
          >
            <span class="font-display font-bold text-sm sm:text-base text-slate-900">
              {{ faq.question }}
            </span>
            <div 
              class="w-7 h-7 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 transition-transform duration-300 shrink-0"
              :class="{ 'rotate-180 text-primary border-primary-border bg-primary-light': openIndex === idx }"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>

          <!-- Accordion Answer -->
          <div 
            v-show="openIndex === idx" 
            class="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Help Desk Note -->
      <div class="mt-12 text-center text-xs text-slate-500 font-mono space-y-2">
        <p>
          Étudiant : <a href="#reservation" class="text-primary font-semibold hover:underline">Réserver votre place parmi les 500 pionniers →</a>
        </p>
        <p>
          Entreprise ou particulier : Écrivez au support sur 
          <a :href="`mailto:${supportEmail}`" class="text-primary font-bold hover:underline">{{ supportEmail }}</a>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { siteConfig } from '../config/site'

const supportEmail = siteConfig.supportEmail
const openIndex = ref(0)

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}

const faqs = [
  {
    question: "Qui est éligible aux 500 places gratuites de lancement ?",
    answer: "Les 500 places offertes sont réservées aux étudiants (DCG, DSCG, BTS Comptabilité et Gestion, Master CCA, Licence ou Master Économie-Gestion, Écoles de commerce et universités). Cet accès vous offre un environnement professionnel gratuit pour réaliser vos cas pratiques, vos cours et vos stages comptables sans abonnement."
  },
  {
    question: "Je suis une entreprise ou un particulier, comment obtenir un accès à Korva ?",
    answer: `Cette campagne de 500 places gratuites est spécifiquement dédiée aux étudiants. Si vous êtes une entreprise, un cabinet comptable ou un particulier, vous pouvez contacter directement l'équipe support de Korva par email à ${supportEmail}. Notre équipe prendra contact avec vous pour vous présenter une démonstration et une formule adaptée à votre structure.`
  },
  {
    question: "Quelles sont les dates et la durée de la campagne de lancement ?",
    answer: "Le lancement officiel débute le 14 septembre 2026 et durera exactement 2 semaines (jusqu'au 28 septembre 2026 inclus). Les inscriptions se font par ordre d'arrivée jusqu'à épuisement des 500 places étudiantes disponibles."
  },
  {
    question: "Faut-il renseigner une carte bancaire ou payer des frais cachés ?",
    answer: "Non, absolument aucune carte bancaire n'est demandée. L'inscription est 100% gratuite. Il vous suffit de renseigner vos coordonnées d'étudiant (nom, établissement, filière et niveau d'études)."
  },
  {
    question: "La facturation Factur-X et l'export FEC certifié DGFIP sont-ils disponibles ?",
    answer: "Oui, l'intégralité des fonctionnalités réelles de Korva est accessible : émission de factures conformes à la norme hybride Factur-X 2026, gestion des journaux de ventes et d'achats, balances, et export du Fichier des Écritures Comptables (FEC) conforme aux exigences de l'administration fiscale."
  },
  {
    question: "Qu'est-ce que le portail Korva Client en cours de développement ?",
    answer: "Korva Client est l'espace B2B dédié à vos clients. Il leur permettra de se connecter en toute autonomie pour consulter l'historique de leurs factures Factur-X, télécharger leurs justificatifs et régler directement en ligne par Mobile Money ou Carte bancaire. Les 500 étudiants pionniers auront un accès en avant-première pour découvrir et tester ce module."
  },
  {
    question: "Qui édite et assure le support de Korva ?",
    answer: `Korva est conçu, développé et propulsé par la société ALIBORA (https://alibora.com/). Pour toute question ou assistance technique, vous pouvez contacter le support officiel à l'adresse ${supportEmail}.`
  }
]
</script>
