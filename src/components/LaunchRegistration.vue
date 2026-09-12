<template>
  <section id="reservation" class="py-24 relative bg-slate-900 text-white overflow-hidden">
    <!-- Background glow and effects -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Programme Spécial Étudiants • Lancement Officiel
        </div>
        
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Réservez votre place parmi les
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
            500 premiers étudiants
          </span>
        </h2>
        
        <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Dès ce 14 septembre et pendant 2 semaines : profitez gratuitement de Korva pour vos cours, cas pratiques comptables et stages.
        </p>
      </div>

      <!-- Registration Card -->
      <div class="relative rounded-3xl bg-slate-800/80 border border-white/15 p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        
        <!-- Live status bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs sm:text-sm">
          <div class="flex items-center gap-2">
            <span class="font-mono text-emerald-400 font-bold">● Statut :</span>
            <span class="text-slate-300">Inscriptions ouvertes aux étudiants</span>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
            <span>Quota : 500 accès gratuits</span>
          </div>
        </div>

        <!-- Success State -->
        <div v-if="isSubmitted" class="py-8 text-center space-y-5 animate-in fade-in zoom-in duration-300">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="space-y-2">
            <h3 class="text-2xl font-bold font-display text-white">
              Félicitations, votre dossier étudiant a été transmis !
            </h3>
            <!-- <p class="text-slate-300 max-w-md mx-auto text-sm">
              Vous faites officiellement partie des <strong class="text-emerald-400">500 étudiants pionniers</strong> de Korva. Vos informations et votre justificatif ont été transmis à l'adresse <strong class="text-white">{{ registrationEmail }}</strong>.
            </p> -->
          </div>

          <div class="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-xs font-mono text-slate-300 space-y-1">
            <div>Pass Étudiant Pionnier : <span class="text-primary-light font-bold">#ETU-KORVA-500-{{ passNumber }}</span></div>
            <div v-if="documentFile" class="text-emerald-400 text-[11px] flex items-center justify-center gap-1.5 pt-1">
              <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Justificatif joint : {{ documentFile.name }}</span>
            </div>
            <div class="text-slate-400 text-[11px] pt-1">
              Activation de votre compte dès le 14 septembre
            </div>
          </div>
        </div>

        <!-- Student Form State -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Nom complet -->
            <div class="space-y-1.5">
              <label for="student-name" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Nom &amp; Prénom *
              </label>
              <input
                id="student-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Ex. Alexandre Martin"
                class="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <!-- Email étudiant / universitaire -->
            <div class="space-y-1.5">
              <label for="student-email" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Email étudiant / universitaire *
              </label>
              <input
                id="student-email"
                v-model="form.email"
                type="email"
                required
                placeholder="alexandre.martin@etudiant.univ.fr"
                class="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Établissement -->
            <div class="space-y-1.5">
              <label for="student-school" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Établissement / Université / École *
              </label>
              <input
                id="student-school"
                v-model="form.school"
                type="text"
                required
                placeholder="Ex. IUT Paris, Université Lyon 3, IAE, Kedge..."
                class="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <!-- Filière / Diplôme -->
            <div class="space-y-1.5">
              <label for="student-field" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Filière / Diplôme préparé *
              </label>
              <select
                id="student-field"
                v-model="form.field"
                required
                class="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="" disabled>Sélectionnez votre filière</option>
                <option value="DCG">DCG (Diplôme de Comptabilité et de Gestion)</option>
                <option value="DSCG">DSCG (Diplôme Supérieur de Comptabilité et de Gestion)</option>
                <option value="BTS-CG">BTS Comptabilité et Gestion (CG)</option>
                <option value="MASTER-CCA">Master CCA (Comptabilité, Contrôle, Audit)</option>
                <option value="ECO-GESTION">Licence / Master Économie &amp; Gestion</option>
                <option value="ECOLE-COMMERCE">École de Management / Commerce</option>
                <option value="AUTRE">Autre filière gestion / finance</option>
              </select>
            </div>
          </div>

          <!-- Niveau d'études -->
          <div class="space-y-1.5">
            <label for="student-level" class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              Niveau d'études actuel *
            </label>
            <select
              id="student-level"
              v-model="form.level"
              required
              class="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="" disabled>Sélectionnez votre niveau</option>
              <option value="L1">Bac +1 (L1 / 1ère année BTS / DCG 1)</option>
              <option value="L2">Bac +2 (L2 / 2ème année BTS / DCG 2)</option>
              <option value="L3">Bac +3 (L3 / Licence Pro / DCG 3)</option>
              <option value="M1">Bac +4 (Master 1 / DSCG 1)</option>
              <option value="M2">Bac +5 (Master 2 / DSCG 2)</option>
            </select>
          </div>

          <!-- ===== ZONE JUSTIFICATIF ÉTUDIANT (Upload / Drag & Drop) ===== -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Justificatif étudiant (Carte d'étudiant ou Certificat de scolarité) *
              </label>
              <span class="text-[11px] font-mono text-slate-400">PDF, PNG, JPG (max. 10 Mo)</span>
            </div>

            <!-- Drag & Drop Container -->
            <div
              class="relative rounded-2xl border-2 border-dashed transition-all duration-200 p-6 text-center cursor-pointer group"
              :class="[
                isDragging
                  ? 'border-primary bg-primary/10'
                  : documentFile
                    ? 'border-emerald-500/50 bg-emerald-500/5'
                    : 'border-slate-700 hover:border-primary/60 bg-slate-900/60 hover:bg-slate-900/90'
              ]"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @drop.prevent="handleFileDrop"
              @click="triggerFileInput"
            >
              <!-- Hidden File Input -->
              <input
                ref="fileInputRef"
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                class="hidden"
                @change="handleFileChange"
              />

              <!-- State A: File Selected -->
              <div v-if="documentFile" class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-3 text-left">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
                      {{ documentFile.name }}
                    </p>
                    <p class="text-xs font-mono text-emerald-400">
                      {{ formatFileSize(documentFile.size) }} • Fichier joint prêt à l'envoi
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-500/30 text-xs font-mono transition-colors"
                  @click.stop="removeFile"
                >
                  Changer
                </button>
              </div>

              <!-- State B: No File Selected -->
              <div v-else class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 mx-auto flex items-center justify-center group-hover:text-primary group-hover:border-primary/40 group-hover:scale-110 transition-all">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-white">
                    <span class="text-primary font-bold underline underline-offset-2">Cliquez pour importer</span> ou glissez-déposez votre justificatif
                  </p>
                  <p class="text-xs text-slate-400 mt-1">
                    Carte d'étudiant recto/verso, certificat de scolarité 2026/2027 ou attestation d'inscription
                  </p>
                </div>
              </div>
            </div>

            <p v-if="fileError" class="text-xs text-rose-400 font-mono">
              ⚠ {{ fileError }}
            </p>
          </div>

          <!-- Student certification checkbox -->
          <div class="flex items-start gap-3 pt-1">
            <input
              id="certify-student"
              v-model="form.certified"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary focus:ring-offset-slate-900"
            />
            <label for="certify-student" class="text-xs text-slate-300 leading-relaxed cursor-pointer">
              Je certifie être actuellement inscrit(e) en tant qu'étudiant(e) pour l'année académique.
            </label>
          </div>

          <!-- Guarantee badges -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <svg class="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>100% Gratuit sans CB</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <svg class="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Envoi direct à l'équipe</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <svg class="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Activation dès le 14 Septembre</span>
            </div>
          </div>

          <!-- Submit CTA -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="isLoading || !documentFile"
              class="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-primary-hover hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_10px_30px_-5px_rgba(37,71,235,0.6)] hover:shadow-[0_15px_35px_-5px_rgba(37,71,235,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span v-if="!isLoading">Valider mon accès étudiant avec justificatif (500 places) →</span>
              <span v-else class="flex items-center gap-2">
                <svg class="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Transmission de votre dossier en cours...
              </span>
            </button>
            <p v-if="!documentFile" class="text-[11px] text-amber-400 text-center mt-2">
              * Veuillez joindre votre justificatif étudiant ci-dessus pour activer le bouton de validation.
            </p>
          </div>
        </form>

        <!-- Separate Section for Companies & Individuals -->
        <div class="pt-8 border-t border-white/10">
          <div class="rounded-2xl p-6 bg-white/5 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>Entreprises &amp; Particuliers</span>
              </div>
              <h4 class="font-display font-bold text-lg text-white">
                Vous êtes un professionnel ou un particulier ?
              </h4>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Les 500 places offertes sont réservées aux étudiants. Si vous représentez une entreprise, un cabinet ou êtes un particulier, contactez directement l'équipe support Korva pour obtenir une proposition d'accès adaptée.
              </p>
            </div>

            <a
              :href="`mailto:${supportEmail}?subject=Demande%20d%27acc%C3%A8s%20Korva%20(Entreprise%20%2F%20Particulier)&body=Bonjour%20l%27%C3%A9quipe%20Korva,%0A%0AJe%20souhaite%20obtenir%20un%20acc%C3%A8s%20%C3%A0%20Korva%20pour%20mon%20activit%C3%A9%20professionnelle%20%2F%20mon%20entreprise.%0A%0ANom%20:%20%0AEntreprise%20:%20%0AT%C3%A9l%C3%A9phone%20:%20%0A%0AMerci.`"
              class="shrink-0 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 group"
            >
              <svg class="w-4 h-4 text-slate-400 group-hover:text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Contacter le support ({{ supportEmail }}) →</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { siteConfig } from '../config/site'

const supportEmail = siteConfig.supportEmail
const registrationEmail = siteConfig.registrationEmail

const isSubmitted = ref(false)
const isLoading = ref(false)
const isDragging = ref(false)
const fileError = ref('')
const fileInputRef = ref<HTMLInputElement | null>(null)
const documentFile = ref<File | null>(null)
const passNumber = ref(Math.floor(100 + Math.random() * 900))

const form = reactive({
  name: '',
  email: '',
  school: '',
  field: '',
  level: '',
  certified: false
})

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const validateAndSetFile = (file: File) => {
  fileError.value = ''
  const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg']
  
  if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|png|jpe?g)$/i)) {
    fileError.value = 'Format non supporté. Veuillez importer un fichier PDF, PNG ou JPG.'
    return
  }

  // 10 MB limit
  if (file.size > 10 * 1024 * 1024) {
    fileError.value = 'Le fichier dépasse la taille maximale autorisée de 10 Mo.'
    return
  }

  documentFile.value = file
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    validateAndSetFile(target.files[0])
  }
}

const handleFileDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    validateAndSetFile(e.dataTransfer.files[0])
  }
}

const removeFile = () => {
  documentFile.value = null
  fileError.value = ''
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
  }
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + ' octets'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' Ko'
  return (bytes / (1024 * 1024)).toFixed(1) + ' Mo'
}

const readFileAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = err => reject(err)
    reader.readAsDataURL(file)
  })
}

const handleSubmit = async () => {
  if (!documentFile.value) {
    fileError.value = 'Veuillez joindre votre justificatif étudiant pour valider votre place.'
    return
  }

  isLoading.value = true
  fileError.value = ''

  try {
    // Conversion en Base64 pour garantir une transmission 100% fiable sans contrainte de taille serveur
    let base64Data = ''
    try {
      base64Data = await readFileAsBase64(documentFile.value)
    } catch (e) {
      console.warn('Conversion base64 non bloquante :', e)
    }

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('school', form.school)
    formData.append('field', form.field)
    formData.append('level', form.level)
    formData.append('certified', form.certified ? '1' : '0')
    formData.append('pass_number', `#ETU-KORVA-500-${passNumber.value}`)
    formData.append('token_api', siteConfig.vitrineApiToken)

    // Justificatif étudiant : fichier direct + backup base64
    formData.append('document', documentFile.value, documentFile.value.name)
    if (base64Data) {
      formData.append('document_base64', base64Data)
      formData.append('document_name', documentFile.value.name)
      formData.append('document_type', documentFile.value.type || 'application/octet-stream')
    }

    const endpoints = [
      `${siteConfig.apiUrl}/api/vitrine/pre-inscription`,
      '/api/vitrine/pre-inscription'
    ]

    let success = false
    let lastError = ''

    for (const url of endpoints) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${siteConfig.vitrineApiToken}`,
            'X-API-TOKEN': siteConfig.vitrineApiToken
          },
          body: formData
        })

        const result = await response.json().catch(() => null)

        if (response.ok && result?.success) {
          success = true
          break
        } else if (result && result.errors) {
          const errorMessages = Object.values(result.errors).flat().join(' ')
          lastError = errorMessages || result.message || 'Erreur lors de la validation du formulaire.'
          break
        }
      } catch (err: any) {
        // En cas d'échec de ce endpoint, on essaie le suivant
        console.warn(`Tentative sur ${url} échouée :`, err)
      }
    }

    if (!success) {
      fileError.value = lastError || 'Un problème est survenu. Le dossier n’a pas pu être transmis. Ou bien, Vérifiez votre connexion puis réessayez.'
      return
    }

    // Le succès n'est affiché qu'après confirmation positive de l'API.
    isSubmitted.value = true
  } catch (err: any) {
    console.warn('Transmission API korva_api :', err)
    fileError.value = 'Un problème est survenu. Le dossier n’a pas pu être transmis. Ou bien, Vérifiez votre connexion puis réessayez.'
  } finally {
    isLoading.value = false
  }
}


</script>
