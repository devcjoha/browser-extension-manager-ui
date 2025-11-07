# Frontend Mentor - Browser Extension Manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Live Deploys](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:


- Select light/dark theme.
- Enable/disable extensions.
- Remove extensions.
- Filter extensions: All, Active, Inactive.
- View a modal with detailed extension information by expanding the data.json file.


### Screenshot

<p align="center">
  <img src="./public/" width="500" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/" width="300" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/" width="300" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/" width="600" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/" width="300" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/" width="300" alt="" />
</p>

## Author

- Website - [Carla Johanna](https://github.com/devcjoha)
- Frontend Mentor - [@devcjoha](https://www.frontendmentor.io/profile/devcjoha)
- X - [@CarlitaJohanna](https://www.x.com/carlitajohana)


## 🚀 Live Deploys

[![GitHub Pages]()
[![Deploy on Vercel]()

- Solution URL: [code]()
- Live Site URL: [Deploy Vercel]()
- Live Site URL: [Deploy-Github-Pages]()


## My process

### Built with

<p align="center">
<img src="./public/react.svg" alt="react" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/tailwind.svg" alt="tailwind" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/vite.svg" alt="vite" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/react-router.svg" alt="react-routerd" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/vercel-iconb.svg" alt="vercel" width="50px" />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="./public/github.svg" alt="githubPages" width="55px" />
</p>

- React (component-based architecture).
- Vite (development and packaging).
- Functional components and hooks (useState, useEffect).
- Tailwind custom propertie, theme dark/light.
- Responsive design.
- React-router-dom(modal).


### 👩🏻‍🦱 What I learned
* In this project, I worked with Tailwind CSS inline, applying utility classes directly in JSX to build a clear, responsive, and functional interface. I learned to:
* Implement light/dark mode using classes like dark:bg-gray-900 and dark:text-white.
* Use React hooks (useState, useEffect) to handle filters, toggles, and theme persistence.
* Separate the original state from the filtered state to maintain data integrity.
* Modularize functional components and apply conditional styling with Tailwind.
* Configure dynamic deployments with Vite, GitHub Pages, and Vercel, using environment variables to manage routes and environments.
* Also, although I didn't implement a tokenized layout system in this application, I'll learn how to build one and have it ready to apply in my next application.


### 💥 Continued development
* This project gave me clarity on how to scale my future developments. For my next app, I plan to:
* Implement a semantic design system with CSS tokens, variants, and clear documentation.
* Modularize styles in files like theme.css, components.css, and utilities.css.
* Create a visual guide for validating themes, components, and variants.
* Consolidate a starter kit with dark mode, reusable classes, and a scalable architecture.
* This project provided a solid foundation for understanding how Tailwind can coexist with more advanced systems and how to migrate to them without breaking what already works.



## 🚀 Deployment & Environment Setup

### 🧪 Entornos

- **Local**: Use `/` as the base for routes.

- **Production (GitHub Pages)**: Use `/` as the base.

### ⚙️ Scripts disponibles

```bash
# Ejecuta el proyecto en desarrollo local
npm run dev

# Build estándar (no recomendado para GitHub Pages)
npm run build

# Build para GitHub Pages (usa base name correcto)
npm run build:gh

# Vista previa del build
npm run preview
```
### 📦 Variables de entorno

- **The basename** is dynamically configured using the ```GITHUB_PAGES``` variable.

- **In local development:** you don't need to define anything.

- **In production:** the ```build:gh``` script automatically defines ```GITHUB_PAGES=true```.

### 🧠 Why this configuration?

React Router requires the basename to match the site's base URL. This logic prevents errors such as:

```js 
<Router basename="/"> is not able to match the URL "/"
```
Thanks to this configuration, you don't need to modify your code every time you change environments.

### 🧩 Environment Configuration
This project uses environment variables to manage paths and dynamic deployments. To maintain security and avoid conflicts, the actual .env files are excluded from the repository using .gitignore.

📄 Example File
An .env.example file is included as a template:

```env
# .env.example
VITE_BASE_URL=/
GITHUB_PAGES=false
```
🛠️ How to Use It?


Copy the example file:

```bash
cp .env.example .env

```
Adjust the values ​​according to your environment:
```env
VITE_BASE_URL=/
GITHUB_PAGES=false
For production (GitHub Pages):
```
```env
VITE_BASE_URL=/
GITHUB_PAGES=true
```
Use the scripts defined in package.json:
```bash
npm run dev        # desarrollo local
npm run build:gh   # build para GitHub Pages
```

## Author

- Website - [Carla Johanna](https://github.com/devcjoha)
- Frontend Mentor - [@devcjoha](https://www.frontendmentor.io/profile/devcjoha)
- X - [@CarlitaJohanna](https://www.x.com/carlitajohana)
