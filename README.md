# Spline 3D Navigation - Next.js

Un projet Next.js avec une navigation 3D interactive utilisant React Spline.

## Fonctionnalités

- 🎮 **Navigation 3D** : Glissez l'objet 3D pour naviguer entre les pages
- 🖥️ **Server-Side Rendering** : Toutes les pages sont générées côté serveur
- 🎨 **Tailwind CSS** : Design moderne et responsive
- ✨ **Animations fluides** : Powered by Framer Motion

## Pages

1. **Accueil** (`/accueil`) - Page d'accueil avec présentation
2. **Services** (`/services`) - Liste des services proposés
3. **Contact** (`/contact`) - Formulaire de contact

## Navigation

- **Glissement** : Faites glisser horizontalement pour changer de page
- **Flèches** : Utilisez les boutons ← → sur les côtés
- **Clavier** : Utilisez les touches flèches gauche/droite
- **Indicateurs** : Cliquez sur les points en bas

## Installation

```bash
npm install @splinetool/react-spline @splinetool/runtime framer-motion
```

## Développement

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Spline](https://spline.design/) - Objets 3D
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Structure

```
src/
├── app/
│   ├── page.tsx          # Page principale avec navigation 3D
│   ├── HomeClient.tsx    # Client component pour la navigation
│   ├── accueil/page.tsx  # Page Accueil (SSR)
│   ├── services/page.tsx # Page Services (SSR)
│   └── contact/page.tsx  # Page Contact (SSR)
├── components/
│   ├── NavigationSlider.tsx  # Composant de navigation
│   └── SplineScene.tsx       # Scene Spline 3D
└── lib/
    └── data.ts           # Données des pages (SSR)
```

## Note

La scène Spline utilise une URL de démonstration. Pour personnaliser l'objet 3D :
1. Créez votre scène sur [Spline](https://spline.design/)
2. Exportez votre scène et copiez l'URL
3. Remplacez l'URL dans `src/components/SplineScene.tsx`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
