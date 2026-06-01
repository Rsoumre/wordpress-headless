# WordPress Headless — React + Vite

Blog WordPress en mode headless : WordPress gère le contenu (back-end) et React affiche les articles (front-end) via l'API REST de WordPress.

## Stack

- **Back-end** : WordPress (API REST)
- **Front-end** : React + Vite

## Prérequis

- Node.js et npm installés
- WordPress en local sur `http://localhost:8080`

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

Le front-end est accessible sur `http://localhost:5173`.

## Fonctionnement

Le front-end récupère les articles WordPress via l'API REST :

```
http://localhost:8080/wp-json/wp/v2/posts
```

Les articles sont affichés dynamiquement avec React.
