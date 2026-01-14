# Tétraèdre 3D avec Model Viewer

## ✅ Installation complète

J'ai créé deux pages de démonstration de tétraèdre :

### 1. `/test` - Tétraèdre CSS 3D pur
- Utilise uniquement CSS 3D et `rotate3d()`
- Léger et rapide
- Roulement animé au clic
- Aucune dépendance externe

### 2. `/test2` - Tétraèdre avec Google Model Viewer
- Utilise `@google/model-viewer` (déjà installé ✅)
- Affiche des modèles GLB/GLTF
- Contrôles de caméra interactifs
- Modèle de démonstration temporaire (Neil Armstrong)

## 🚀 Pour tester

```bash
npm run dev
```

Puis visitez :
- http://localhost:3000/test - Version CSS pure
- http://localhost:3000/test2 - Version Model Viewer

## 📦 Obtenir un fichier GLB de tétraèdre

### Option 1: Télécharger (Rapide)
```
https://sketchfab.com/3d-models/tetrahedron-d4-dice-free
```
Cherchez "tetrahedron" ou "d4 dice" sur Sketchfab et téléchargez le GLB.

### Option 2: Utiliser un modèle simple existant
```javascript
// Dans test2/page.tsx, remplacez src par :
src="https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Box/glTF-Binary/Box.glb"
```

### Option 3: Créer avec Blender (5 minutes)
1. Ouvrir Blender
2. Supprimer le cube (X → Delete)
3. Add → Mesh → UV Sphere
4. Tab (Edit) → Delete presque tous les sommets pour former 4 points
5. Sélectionner les 4 sommets et F (créer faces)
6. File → Export → glTF 2.0 (.glb)
7. Sauvegarder comme `public/models/tetrahedron.glb`

## 📁 Structure des fichiers

```
public/
└── models/
    ├── README.md                 # Instructions détaillées
    ├── create_tetrahedron.py    # Script Python (référence)
    └── tetrahedron.glb          # ← Placez votre modèle ici

src/
└── app/
    ├── test/page.tsx            # Tétraèdre CSS pur
    └── test2/page.tsx           # Tétraèdre Model Viewer
```

## 🎮 Interactions

### Page `/test` (CSS)
- **Clic** : Fait rouler le tétraèdre
- **Visual** : Affichage des angles de rotation

### Page `/test2` (Model Viewer)
- **Clic** : Fait pivoter la caméra autour du modèle
- **Drag** : Rotation manuelle
- **Molette** : Zoom
- **Fallback** : Tétraèdre CSS si le modèle ne charge pas

## ⚙️ Dépendances installées

```json
{
  "@google/model-viewer": "^4.1.0",
  "@splinetool/react-spline": "^4.1.0",
  "framer-motion": "^12.26.2"
}
```

## 📝 Prochaines étapes

1. **Obtenir un vrai tétraèdre GLB** depuis Sketchfab ou Blender
2. **Placer le fichier** dans `public/models/tetrahedron.glb`
3. **Modifier** `src/app/test2/page.tsx` ligne 58 :
   ```typescript
   src="/models/tetrahedron.glb"
   ```

Tout est prêt ! 🎉
