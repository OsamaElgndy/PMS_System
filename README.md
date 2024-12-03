# Project Management System

## Overview

The **Project Management System** is a web application designed to facilitate project planning, task management, and team collaboration. It is built with **React**, **TypeScript**, **Sass**, and **Bootstrap** for a dynamic, interactive, and responsive user interface. The system allows users to manage projects, track tasks, assign team members, and visualize progress. It includes features like project boards, task cards, progress bars, user management, and deadlines.

## Features

- **Interactive Project Boards:** Users can create and manage projects, and view them through interactive boards.
- **Task Management:** Add, edit, assign, and track tasks within each project. Tasks can be moved between different stages.
- **Team Collaboration:** Assign team members to tasks and manage deadlines.
- **Progress Visualization:** Progress bars to show the completion percentage of each task or project.
- **Customizable UI:** Custom components for a tailored experience, including task cards, project boards, and user management features.
- **Responsive Design:** Fully responsive UI built with **Bootstrap** and **Sass** for a smooth experience on desktops, tablets, and mobile devices.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web apps.
- **TypeScript:** A statically typed superset of JavaScript, enhancing developer experience and code maintainability.
- **Sass:** A preprocessor scripting language that extends CSS with features like variables, nested rules, and mixins.
- **Bootstrap:** A front-end framework for responsive, mobile-first design.

## Key Features

### Front-end Features

- **Project Management:** Users can create new projects and organize tasks in boards with different stages (e.g., To Do, In Progress, Done).
- **Task Tracking:** Users can track the progress of tasks with visual progress bars, set deadlines, and assign team members.
- **Interactive UI:** The app makes extensive use of React functional components and hooks (`useState`, `useEffect`, `useContext`) to create dynamic, responsive interfaces.
- **User Management:** Allows managing users and assigning roles to them within each project.
- **Custom Components:** Built custom components for task cards, project boards, progress bars, and deadlines to enhance usability.


   ```bash
   https://github.com/OsamaElgndy/PMS_System
   



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
