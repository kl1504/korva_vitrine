export interface NavLink {
  name: string
  href: string
}

export interface FeatureItem {
  id: string
  number: string
  tag: string
  title: string
  description: string
  badge: string
  metrics: string[]
  imageKey: string
  placeholderTitle: string
}

export interface BeforeAfterPoint {
  title: string
  desc: string
}

export interface BusinessModule {
  id: string
  name: string
  category: string
  icon: string
  color: string
  position: {
    desktop: { x: number; y: number }
    mobile: { x: number; y: number }
  }
}

export const navLinks: NavLink[] = [
  { name: 'Fonctionnalités', href: '#features' },
  { name: 'Plateforme', href: '#platform' },
  { name: 'Comparatif', href: '#comparison' },
  { name: 'Confiance', href: '#trust' }
]

export const heroContent = {
  eyebrow: 'KORVA PRO',
  headline: 'Votre activité mérite une gestion plus simple.',
  supporting: 'Facturation, dépenses, taxes, comptabilité et pilotage réunis dans une seule plateforme.',
  primaryCta: 'Découvrir Korva',
  secondaryCta: 'Voir comment ça fonctionne',
  badges: [
    'Conforme Factur-X & FEC',
    'Chiffrement bancaire AES-256',
    'Déploiement en 2 minutes'
  ]
}

export const scrollStoryModules: BusinessModule[] = [
  { id: 'factures', name: 'FACTURES', category: 'Revenus', icon: 'FileText', color: '#2547EB', position: { desktop: { x: -320, y: -160 }, mobile: { x: -80, y: -140 } } },
  { id: 'depenses', name: 'DÉPENSES', category: 'Charges', icon: 'Receipt', color: '#F43F5E', position: { desktop: { x: 320, y: -150 }, mobile: { x: 80, y: -140 } } },
  { id: 'taxes', name: 'TAXES & TVA', category: 'Fiscalité', icon: 'Calculator', color: '#8B5CF6', position: { desktop: { x: -360, y: 20 }, mobile: { x: -100, y: -60 } } },
  { id: 'clients', name: 'CLIENTS', category: 'Gestion CRM', icon: 'Users', color: '#0EA5E9', position: { desktop: { x: 360, y: 30 }, mobile: { x: 100, y: -60 } } },
  { id: 'fournisseurs', name: 'FOURNISSEURS', category: 'Achats', icon: 'Truck', color: '#EC4899', position: { desktop: { x: -280, y: 190 }, mobile: { x: -90, y: 30 } } },
  { id: 'comptabilite', name: 'COMPTABILITÉ', category: 'Grand Livre', icon: 'BookOpen', color: '#10B981', position: { desktop: { x: 290, y: 200 }, mobile: { x: 90, y: 30 } } },
  { id: 'tresorerie', name: 'TRÉSORERIE', category: 'Banque', icon: 'Wallet', color: '#059669', position: { desktop: { x: -160, y: -260 }, mobile: { x: 0, y: -210 } } },
  { id: 'rapports', name: 'RAPPORTS', category: 'Bilan', icon: 'BarChart2', color: '#F59E0B', position: { desktop: { x: 170, y: -250 }, mobile: { x: 0, y: 110 } } },
  { id: 'analytiques', name: 'ANALYTIQUES', category: 'Croissance', icon: 'TrendingUp', color: '#3B82F6', position: { desktop: { x: 0, y: 280 }, mobile: { x: 0, y: 180 } } }
]

export const productShowcaseContent = {
  eyebrow: 'UNE SEULE PLATEFORME',
  headline: 'Tout ce dont vous avez besoin.\nRien de superflu.',
  body: 'Korva centralise les opérations essentielles de votre entreprise pour vous permettre de suivre votre activité, comprendre vos chiffres et prendre de meilleures décisions.'
}

export const featureList: FeatureItem[] = [
  {
    id: 'feature-01',
    number: '01',
    tag: 'FACTURATION SANS EFFORT',
    title: 'Facturez sans friction.',
    description: 'Créez, personnalisez et émettez vos devis et factures en moins de 60 secondes. Génération automatique au format Factur-X certifié, suivi des règlements en direct et relances courtoises automatisées.',
    badge: 'Factur-X & Électronique',
    metrics: ['Génération en 60s', 'Délai de paiement -42%', 'Relances intelligentes'],
    imageKey: 'invoices.png',
    placeholderTitle: 'Module Facturation & Encaissements Korva'
  },
  {
    id: 'feature-02',
    number: '02',
    tag: 'MAÎTRISE DES COÛTS',
    title: 'Gardez le contrôle de vos dépenses & achats.',
    description: 'Enregistrez vos factures fournisseurs, affectez vos comptes de charges et suivez vos échéances de paiement pour éviter les pénalités de retard et maîtriser vos décaissements.',
    badge: 'Gestion Fournisseurs & Achats',
    metrics: ['Saisie guidée des charges', 'Échéancier fournisseurs', 'Lettrage des règlements'],
    imageKey: 'expenses.png',
    placeholderTitle: 'Module Dépenses & Fournisseurs Korva'
  },
  {
    id: 'feature-03',
    number: '03',
    tag: 'PILOTAGE STRATÉGIQUE',
    title: 'Comprenez vos chiffres.',
    description: 'Fini le brouillard financier. Vos tableaux de bord calculent votre trésorerie disponible réelle, vos marges nettes et votre EBITDA en temps réel avec des projections fiables sur les 90 prochains jours.',
    badge: 'Prévisionnel de Trésorerie',
    metrics: ['Synchronisation bancaire continue', 'Visibilité à 90 jours', 'Rapports investisseurs en 1 clic'],
    imageKey: 'reports.png',
    placeholderTitle: 'Module Analytique & Trésorerie Korva'
  },
  {
    id: 'feature-04',
    number: '04',
    tag: 'RIGUEUR COMPTABLE',
    title: 'Maîtrisez votre comptabilité.',
    description: 'Bénéficiez d’une tenue comptable instrument-grade conforme aux plans comptables PCG et SYSCOHADA. Journaux d’achats, ventes, banque et OD équilibrés automatiquement, export FEC en un clic.',
    badge: 'Conformité FEC & SYSCOHADA',
    metrics: ['Plan comptable paramétrable', 'Grand Livre & Balance interactifs', 'Export FEC certifié DGFIP'],
    imageKey: 'accounting.png',
    placeholderTitle: 'Module Grand Livre & Journal Comptable Korva'
  },
  {
    id: 'feature-05',
    number: '05',
    tag: 'SÉRÉNITÉ FISCALE',
    title: 'Anticipez vos obligations.',
    description: 'Le calcul automatique de votre TVA collectée et déductible vous évite toute surprise en fin de mois. Un tableau de bord dédié récapitule vos échéances et prépare les déclarations pour votre expert-comptable.',
    badge: 'Calendrier des Échéances',
    metrics: ['Calcul de TVA en temps réel', 'Alerte proactive des échéances', 'Espace partagé expert-comptable'],
    imageKey: 'taxes.png',
    placeholderTitle: 'Module Fiscalité & Déclarations Korva'
  }
]

export const beforeAfterContent = {
  eyebrow: 'TRANSFORMATION OPÉRATIONNELLE',
  headline: 'La gestion d’entreprise ne devrait pas être un parcours du combattant.',
  before: {
    tag: 'AVANT KORVA',
    title: 'La dispersion administrative',
    points: [
      { title: 'Fichiers Excel dispersés', desc: 'Des versions contradictoires multipliant les risques d’erreurs de calcul.' },
      { title: 'Saisies manuelles chronophages', desc: 'Des heures perdues chaque semaine à recopier des montants et des tickets.' },
      { title: 'Informations difficiles à retrouver', desc: 'Des justificatifs perdus et une recherche constante de pièces comptables.' },
      { title: 'Outils multiples non connectés', desc: 'Un logiciel pour facturer, un autre pour la banque, sans passerelle.' },
      { title: 'Stress permanent des échéances', desc: 'Découvrir le solde de TVA la veille de la déclaration légale.' }
    ]
  },
  after: {
    tag: 'AVEC KORVA',
    title: 'Un cockpit unifié et maîtrisé',
    modules: ['FACTURES', 'DÉPENSES', 'TAXES', 'COMPTABILITÉ', 'RAPPORTS'],
    points: [
      { title: 'Une seule source de vérité', desc: 'Toutes vos données financières interconnectées dans une interface claire.' },
      { title: 'Tenue comptable rigoureuse', desc: 'Écritures équilibrées, lettrage fluide et états financiers toujours à jour.' },
      { title: 'Visibilité financière en temps réel', desc: 'Vous savez exactement où va chaque euro dépensé et encaissé.' },
      { title: 'Conformité fiscale garantie', desc: 'Documents aux normes Factur-X, FEC et plans comptables officiels.' },
      { title: 'Gain mesuré de 15h par mois', desc: 'Libérez votre équipe pour vous concentrer sur la croissance de l’activité.' }
    ]
  }
}

export const trustContent = {
  eyebrow: 'SÉCURITÉ & EXIGENCE',
  headline: 'Pensé pour les entreprises qui veulent avancer.',
  subheadline: 'Korva associe l’exigence technique d’un instrument financier de précision à la simplicité d’une interface conçue pour les fondateurs et décideurs.',
  pillars: [
    {
      title: 'Sécurité Bancaire Maximale',
      desc: 'Chiffrement AES-256 de bout en bout, hébergement souverain haute disponibilité et sauvegardes quotidiennes chiffrées.',
      badge: 'Chiffrement AES-256'
    },
    {
      title: 'Conformité Fiscale Absolue',
      desc: 'Génération du Fichier des Écritures Comptables (FEC), facturation électronique Factur-X et alignement rigoureux PCG / SYSCOHADA.',
      badge: 'Conforme DGFIP & OHADA'
    },
    {
      title: 'Souveraineté des Données',
      desc: 'Vos données restent votre propriété intégrale. Export instantané de l’ensemble de vos écritures et pièces en formats ouverts.',
      badge: 'Export FEC & CSV 100%'
    },
    {
      title: 'Collaboration Expert-Comptable',
      desc: 'Invitez votre expert-comptable avec des accès dédiés pour fluidifier les clôtures mensuelles et annuelles sans friction.',
      badge: 'Accès Expert Certifié'
    }
  ]
}

export const finalCtaContent = {
  headline: 'Votre activité. Une seule vision.',
  supporting: 'Passez d’une gestion dispersée à une gestion claire, connectée et maîtrisée.',
  primaryCta: 'Commencer avec Korva',
  secondaryCta: 'Découvrir la plateforme'
}
