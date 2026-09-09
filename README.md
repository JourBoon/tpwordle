# Wordle - React & TypeScript

Clone du jeu Wordle réalisé avec **React**, **TypeScript** et **Vite** dans le cadre du TP.

## Fonctionnalités

- Mot secret de 5 lettres
- Maximum de 6 essais
- Vérification des lettres :
  - 🟩 Lettre correcte et bien placée
  - 🟨 Lettre présente mais mal placée
  - ⬜ Lettre absente du mot
- Gestion des lettres en double
- Saisie au clavier
- Suppression avec `Backspace`
- Validation avec `Enter`
- Clavier virtuel
- Affichage des règles
- Détection de victoire et de défaite
- Affichage du mot secret en fin de partie
- Bouton pour recommencer une partie
- Récupération du mot via l'API Wordle
- Gestion du chargement des données

## Technologies utilisées

- React
- TypeScript
- Vite
- CSS Modules
- Fetch API
- React Hooks (`useState`, `useEffect`)

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/JourBoon/tpwordle
cd tpwordle