# Korva Vitrine — Docker & Déploiement

Ce dossier contient la configuration Docker pour le projet **Korva Vitrine** (application Vue 3 / Vite), alignée sur les standards du projet ComptaLib.

---

## 📁 Fichiers Docker & Infrastructure

* **`Dockerfile`** : Multi-stage build standard du projet :
  * `development` : Serveur Vite HMR avec hot reload (`port 5174`).
  * `build` : Compilation Vite du bundle statique (`dist/`).
  * `production` : Serveur statique Node.js (`serve@14`) ultra-rapide avec utilisateur non-root `app`, support SPA natif (`port 3000`), et healthcheck intégré.
* **`docker-compose.app.yml`** : Fichier compose standard ComptaLib (utilisé par la stack globale et `ops.sh`).
* **`docker-compose.yml`** : Fichier compose pour exécution autonome directe dans le dossier.
* **`infra/nginx/app.conf`** : Configuration pour le reverse-proxy Nginx frontal de ComptaLib.
* **`.dockerignore`** : Exclusion de `node_modules`, `dist`, `.env`, `.git`.
* **`.env`** & **`.env.example`** : Variables d'environnement.

---

## ⚙️ Configuration (`.env`)

```env
# Ports Docker
VITRINE_PORT=8085
VITRINE_DEV_PORT=5174

# URLs & Contact
VITE_ALIBORA_URL=https://alibora.com/
VITE_KORVA_SOLUTION_URL=https://alibora.com/solutions/korva-accounting-software
VITE_SUPPORT_EMAIL=korva.support@gmail.com
VITE_REGISTRATION_EMAIL=korva.support@gmail.com

# API Backend
# En local : http://localhost:8000
# En production : URL publique de l'API (ex: https://api.korva.alibora.com)
VITE_API_URL=http://localhost:8000
VITE_VITRINE_API_TOKEN=korva_vitrine_secret_tk_8f94e2b719a64c83d95e01b7a63458c891e2b4f738a192c04d
```

---

## 🚀 Utilisation avec Docker Compose

### 1. Mode Production (Autonome)

```bash
cd frontend/korva_vitrine
docker compose up -d --build
```
> Accessible sur **`http://localhost:8085`** (ou la valeur de `VITRINE_PORT`).

### 2. Mode Développement (Hot Reload Vite)

```bash
cd frontend/korva_vitrine
docker compose --profile dev up korva-vitrine-dev
```
> Accessible sur **`http://localhost:5174`**.

---

## 🛠️ Utilisation avec Docker CLI direct

### Build & Run Production :
```bash
docker build -t korva-vitrine:latest .
docker run -d --name korva-vitrine -p 8085:3000 korva-vitrine:latest
```

### Build & Run Développement :
```bash
docker build --target development -t korva-vitrine:dev .
docker run -it --rm -p 5174:5174 -v $(pwd):/app -v /app/node_modules korva-vitrine:dev
```
