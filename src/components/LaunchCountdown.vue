<template>
  <div class="w-full max-w-2xl mx-auto">
    <!-- Main Countdown Card -->
    <div class="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl p-5 sm:p-7">
      
      <!-- Top banner / Scarcity pulse -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
          <svg class="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Durée : 2 semaines</span>
        </div>
      </div>

      <!-- Digits Grid -->
      <div class="grid grid-cols-4 gap-2 sm:gap-4 my-6">
        <!-- Days -->
        <div class="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-inner group hover:border-primary/40 transition-colors">
          <span class="font-mono text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            {{ pad(timeLeft.days) }}
          </span>
          <span class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">
            Jours
          </span>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-inner group hover:border-primary/40 transition-colors">
          <span class="font-mono text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            {{ pad(timeLeft.hours) }}
          </span>
          <span class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">
            Heures
          </span>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-inner group hover:border-primary/40 transition-colors">
          <span class="font-mono text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            {{ pad(timeLeft.minutes) }}
          </span>
          <span class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">
            Minutes
          </span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-inner group hover:border-primary/40 transition-colors">
          <span class="font-mono text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            {{ pad(timeLeft.seconds) }}
          </span>
          <span class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-primary mt-1 font-semibold">
            Secondes
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const totalSeats = 500
const bookedSeats = ref(382)
const remainingSeats = computed(() => Math.max(0, totalSeats - bookedSeats.value))
const progressPercent = computed(() => Math.min(100, (bookedSeats.value / totalSeats) * 100))

// Dates de la campagne :
// Début : 14 Septembre 2026 à 00:00:00
// Fin : 28 Septembre 2026 à 23:59:59 (soit exactement 2 semaines)
const launchDate = new Date('2026-09-14T00:00:00')
const campaignEndDate = new Date('2026-09-28T23:59:59')

const timeLeft = ref({
  days: 14,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const statusLabel = ref('Campagne de 2 semaines à partir du 14 Septembre')

const pad = (n: number) => n.toString().padStart(2, '0')

let timerInterval: any = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const launchTime = launchDate.getTime()
  const campaignEndTime = campaignEndDate.getTime()

  if (now < launchTime) {
    // Avant le 14 septembre : le décompte de 2 semaines débutera à partir du 14 septembre
    statusLabel.value = 'Campagne de 2 semaines à partir du 14 Septembre'
    timeLeft.value = {
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  } else if (now <= campaignEndTime) {
    // Du 14 au 28 septembre : décompte en temps réel sur les 2 semaines
    statusLabel.value = 'Campagne active — Fin dans :'
    const diff = Math.max(0, campaignEndTime - now)
    timeLeft.value = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    }
  } else {
    statusLabel.value = 'Campagne des 2 semaines clôturée'
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)

  // Simulation subtile d'inscriptions en direct (toutes les ~45 secondes)
  const seatInterval = setInterval(() => {
    if (bookedSeats.value < 496) {
      bookedSeats.value += 1
    }
  }, 45000)

  onUnmounted(() => {
    if (timerInterval) clearInterval(timerInterval)
    clearInterval(seatInterval)
  })
})
</script>
