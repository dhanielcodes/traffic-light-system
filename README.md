# Traffic Light System

This project is a simple React application that simulates a traffic light system at a 4-way intersection. It adheres to a predefined sequence of light changes and allows users to reset the system to its initial state. The UI is styled using `styled-components`.

## Features

- **Simulated Traffic Light Behavior**: The lights for two streets (A and B) alternate between green, yellow, and red in a regular pattern.
- **Reset Functionality**: A reset button restores the lights to their initial states.
- **Stylish UI**: The application uses `styled-components` for a clean and responsive design.
- **TypeScript**: Ensures type safety and improves code maintainability.

## Light Transition Logic

1. When **Street A** has a green light:
   - **Street B** has a red light.
   - After 5 seconds, Street A transitions to yellow.
2. When **Street A** has a yellow light:
   - **Street B** remains red.
   - After 2 seconds, Street A transitions to red, and Street B transitions to green.
3. When **Street B** has a green light:
   - **Street A** remains red.
   - After 5 seconds, Street B transitions to yellow.
4. When **Street B** has a yellow light:
   - **Street A** remains red.
   - After 2 seconds, Street B transitions to red, and Street A transitions to green.
5. **Reset Button**:
   - Resets the lights to their initial state (Street A: Green, Street B: Red).

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: Provides type safety and better development tools.
- **styled-components**: A CSS-in-JS library for styling components.

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
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
