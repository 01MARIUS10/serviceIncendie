# Tétraèdre X3D Interactif

## 📦 Page `/testx3d`

Visualisation 3D interactive d'un tétraèdre utilisant X3DOM (standard Web3D).

## 🎯 Fonctionnalités

- **Modèle JSON** : Tétraèdre défini par vertices, edges et faces
- **Clic sur faces** : Chaque face peut être cliquée pour faire tourner le tétraèdre
- **Rotation 3D** : Rotation en temps réel sur les 3 axes
- **X3DOM** : Standard Web3D basé sur X3D (ISO/IEC 19775-1)
- **4 faces colorées** : Violet, Cyan, Orange, Vert

## 📊 Données du modèle

```json
{
  "name": "tetrahedron",
  "vertices": [
    [0, 0, 1.732051],
    [1.632993, 0, -0.5773503],
    [-0.8164966, 1.414214, -0.5773503],
    [-0.8164966, -1.414214, -0.5773503]
  ],
  "edges": [
    [0,1], [0,2], [0,3], [1,2], [1,3], [2,3]
  ],
  "faces": [
    [0,1,2], [0,2,3], [0,3,1], [1,3,2]
  ]
}
```

## 🎮 Interactions

### Clic sur les faces
- **Face 1 (Violet)** : Rotation de 90° sur l'axe X
- **Face 2 (Cyan)** : Rotation de 90° sur l'axe Y
- **Face 3 (Orange)** : Rotation de 90° sur l'axe Z
- **Face 4 (Vert)** : Rotation de 45° sur les axes X et Y

### Boutons
- **Réinitialiser** : Revenir à la position initiale
- **Rotation complète** : Effectuer une rotation complète (720°)

### Légende des couleurs
Cliquez sur les carrés colorés en bas pour activer la face correspondante.

## 🔧 Technologies

- **X3DOM** : Bibliothèque JavaScript pour X3D dans le navigateur
- **X3D** : Standard Web3D (ISO/IEC 19775-1)
- **Next.js** : Framework React pour le rendu
- **Tailwind CSS** : Styling

## 📐 Structure X3D

```xml
<X3D>
  <Scene>
    <Viewpoint position="0 0 8" />
    <DirectionalLight />
    
    <Transform rotation="...">  <!-- Rotation X -->
      <Transform rotation="...">  <!-- Rotation Y -->
        <Transform rotation="...">  <!-- Rotation Z -->
          <Group>
            <!-- Faces du tétraèdre -->
            <Shape onclick="...">
              <Appearance>
                <Material diffuseColor="..." />
              </Appearance>
              <IndexedFaceSet>
                <Coordinate point="..." />
              </IndexedFaceSet>
            </Shape>
            
            <!-- Arêtes -->
            <Shape>
              <IndexedLineSet />
            </Shape>
          </Group>
        </Transform>
      </Transform>
    </Transform>
  </Scene>
</X3D>
```

## 🚀 Pour tester

```bash
npm run dev
```

Visitez `http://localhost:3000/testx3d`

## 📚 Référence

Inspiré de : https://polyhedra.tessera.li/tetrahedron/operations

### Avantages de X3D

- **Standard ouvert** : ISO/IEC 19775-1
- **Déclaratif** : Structure XML claire
- **Interactif** : Événements onclick natifs
- **Léger** : Pas de bibliothèque 3D lourde (sauf X3DOM ~500KB)
- **Accessible** : Compatible avec les lecteurs d'écran

### Comparaison avec d'autres solutions

| Solution | Poids | Standard | Interactivité | Complexité |
|----------|-------|----------|---------------|------------|
| X3DOM | ~500KB | ✅ ISO | ✅ Haute | Moyenne |
| Three.js | ~600KB | ❌ Non | ✅ Haute | Haute |
| CSS 3D | ~5KB | ✅ CSS | ⚠️ Limitée | Basse |
| Spline | ~2MB | ❌ Non | ✅ Moyenne | Basse |

## 🎨 Personnalisation

### Changer les couleurs

Modifier l'array `faceColors` dans le code :

```typescript
const faceColors = [
  '1 0 0',    // Rouge
  '0 1 0',    // Vert
  '0 0 1',    // Bleu
  '1 1 0'     // Jaune
];
```

### Modifier le modèle

Remplacer `tetrahedronData` avec un autre polyèdre :

```typescript
const cubeData = {
  vertices: [[...], ...],
  edges: [[...], ...],
  faces: [[...], ...]
};
```

### Ajuster les rotations

Modifier les rotations dans `handleFaceClick()` :

```typescript
const rotations = [
  { x: 120, y: 0, z: 0 },
  { x: 0, y: 120, z: 0 },
  // ...
];
```

## 💡 Notes

- X3DOM charge dynamiquement depuis CDN
- Les événements de clic sont attachés après le rendu
- La rotation utilise des radians (conversion depuis degrés)
- Le tétraèdre est centré à l'origine (0, 0, 0)

Profitez de votre tétraèdre interactif ! 🎉
