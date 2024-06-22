# Utiliser une image Node.js officielle comme image de base
FROM node:14

# Créer un répertoire de travail pour l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application (si tu as un script de build)
RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "start"]
