export const siteConfig = {
  aliboraUrl: (import.meta.env.VITE_ALIBORA_URL as string) || 'https://alibora.com/',
  supportEmail: (import.meta.env.VITE_SUPPORT_EMAIL as string) || 'support@korva.fr',
  registrationEmail: (import.meta.env.VITE_REGISTRATION_EMAIL as string) || (import.meta.env.VITE_SUPPORT_EMAIL as string) || 'support@korva.fr',
  korvaSolutionUrl: (import.meta.env.VITE_KORVA_SOLUTION_URL as string) || 'https://alibora.com/solutions/korva-accounting-software',
  apiUrl: (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000',
  vitrineApiToken: (import.meta.env.VITE_VITRINE_API_TOKEN as string) || 'korva_vitrine_secret_tk_8f94e2b719a64c83d95e01b7a63458c891e2b4f738a192c04d'
}

