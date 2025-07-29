# Portfolio React - Structure des Composants

## 📁 Architecture des Composants

Le portfolio a été restructuré en composants React modulaires pour une meilleure maintenabilité :

```
src/
├── components/
│   ├── portfolio/
│   │   ├── index.ts           # Export de tous les composants
│   │   ├── Navbar.tsx         # Navigation principale
│   │   ├── Hero.tsx           # Section d'accueil avec avatar
│   │   ├── Experience.tsx     # Section expérience professionnelle
│   │   ├── Projects.tsx       # Section projets
│   │   ├── Certifications.tsx # Section certifications
│   │   └── Contact.tsx        # Section contact et footer
│   └── ui/                    # Composants ShadCN/UI
├── App.tsx                    # Composant principal orchestrant le tout
└── index.css                  # Styles globaux et thème
```

## 🧩 Description des Composants

### `App.tsx` - Composant Principal
- **Rôle** : Orchestration générale, gestion de l'état du thème et navigation
- **État** : `isDark`, `activeSection`
- **Fonctions** : `toggleTheme()`, `scrollToSection()`

### `Navbar.tsx` - Navigation
- **Props** : `isDark`, `activeSection`, `onToggleTheme`, `onScrollToSection`
- **Fonctionnalités** : 
  - Navigation smooth vers les sections
  - Toggle dark/light mode
  - Indicateur de section active

### `Hero.tsx` - Section d'Accueil
- **Props** : `onScrollToSection`
- **Contenu** : Avatar animé, titre principal, description, boutons d'action

### `Experience.tsx` - Expérience Professionnelle
- **Contenu** : Liste des expériences avec cartes animées
- **Effet** : Cartes avec glow effect et hover animations

### `Projects.tsx` - Projets
- **Contenu** : Grille de projets avec images, descriptions, tags
- **Fonctionnalités** : Liens GitHub et démo, hover effects

### `Certifications.tsx` - Certifications
- **Contenu** : Grille des certifications avec icônes
- **Style** : Cartes centrées avec animations

### `Contact.tsx` - Contact et Footer
- **Contenu** : Liens sociaux, footer
- **Fonctionnalités** : Liens externes avec animations

## 🎨 Personnalisation

### Modifier le Contenu

1. **Expérience** : Éditez le tableau `experiences` dans `Experience.tsx`
2. **Projets** : Modifiez le tableau `projects` dans `Projects.tsx`
3. **Certifications** : Changez le tableau `certifications` dans `Certifications.tsx`
4. **Contact** : Mettez à jour `socialLinks` dans `Contact.tsx`

### Ajouter une Nouvelle Section

1. Créez un nouveau composant dans `src/components/portfolio/`
2. Ajoutez l'export dans `index.ts`
3. Importez et utilisez dans `App.tsx`
4. Ajoutez l'item de navigation dans `Navbar.tsx`

### Exemple - Ajout d'une section "About"

```tsx
// src/components/portfolio/About.tsx
export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      {/* Contenu de la section */}
    </section>
  );
}

// Dans index.ts
export { default as About } from './About';

// Dans App.tsx
import { About } from "@/components/portfolio";
// ... ajouter <About /> dans le render

// Dans Navbar.tsx - ajouter dans navItems
{ id: 'about', label: 'About', icon: <Info className="h-4 w-4" /> }
```

## 🔧 Avantages de cette Structure

- **Modularité** : Chaque section est isolée et réutilisable
- **Maintenabilité** : Modifications ciblées par composant
- **Lisibilité** : Code organisé et facile à comprendre
- **Extensibilité** : Ajout facile de nouvelles sections
- **Réutilisabilité** : Composants réutilisables dans d'autres projets

## 🚀 Commandes de Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
bun run dev

# Build pour la production
npm run build
# ou
bun run build
```

## 📝 Bonnes Pratiques Appliquées

- **Types TypeScript** : Interfaces pour les props
- **Séparation des responsabilités** : Un composant = une section
- **Props drilling minimal** : Seuls les éléments nécessaires sont passés
- **Conventions de nommage** : PascalCase pour les composants
- **Structure cohérente** : Même organisation dans chaque composant