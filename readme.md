## Project Overview

This boilerplate is a monorepo setup containing both a **Next.js** frontend and a **FastAPI** backend, integrated with **Sanity CMS**. The frontend uses **TypeScript**, **Redux** for state management, **Tailwind CSS** (with light and dark mode), and **Next.js App Router** for routing.

- **Frontend**: Next.js (with TypeScript, Redux, Tailwind CSS)
- **Backend**: FastAPI (Python) with RESTful endpoints
- **CMS**: Sanity for managing content

The project is designed with reusable components, following industry standards and focusing on security best practices.

### Monorepo Folder Structure

```
monorepo/
  |-- frontend/  # Next.js project
  |-- backend/   # FastAPI project
  |-- studio/    # Sanity CMS project
  |-- package.json
  |-- .gitignore
  |-- README.md
```

## Frontend Setup (Next.js + TypeScript + Redux + Tailwind CSS)

### Step 1: Initialize the Frontend Project

```sh
npx create-next-app@15 frontend --typescript --use-npm
cd frontend
```

- When prompted:
  - **Use ESLint**: Yes
  - **Use src/ directory**: Yes (recommended for better structure)
  - **Use Turbopack**: No (stick with Webpack for stability)
  - **Customize import alias**: No (default `@/*` is sufficient)

### Step 2: Install Dependencies

Install the required packages for **Redux**, **Tailwind CSS**, **dark mode handling**, and other utilities:

```sh
# Redux Toolkit for state management
npm install @reduxjs/toolkit@1.9.3 react-redux@8.0.5

# Tailwind CSS and related dependencies
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Classnames utility for dynamic styling (optional but helpful)
npm install classnames

# Development dependencies
npm install --save-dev eslint prettier typescript @types/react @types/node
```

### Step 3: Configure Tailwind CSS

Update your `tailwind.config.js` to include **dark mode** and custom configurations:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode with a class (e.g., 'dark')
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#FFC107",
      },
    },
  },
  plugins: [],
};
```

### Step 4: Create Reusable Components

Create reusable components in a `components/` directory. Here are some examples:

#### Header Component (`components/Header.tsx`)

```tsx
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleTheme } from "../store/slices/themeSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center">
      <Link href="/">
        <a className="text-xl font-bold text-gray-800 dark:text-white">
          TaskFlow Pro
        </a>
      </Link>
      <button
        onClick={handleToggleTheme}
        className="p-2 text-gray-800 dark:text-white"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
```

### Step 5: Redux Setup

Create a `store/` directory for Redux configuration.

#### Store (`store/store.ts`)

```ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### Theme Slice (`store/slices/themeSlice.ts`)

```ts
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
}

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

## Backend Setup (FastAPI)

### Step 1: Initialize Backend

Navigate to the `backend` folder and create a FastAPI project:

```sh
mkdir backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
```

### Step 2: Create Main Application File

Create a file named `main.py`:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI backend"}
```

### Step 3: CORS Configuration

Enable **CORS** for handling requests from the Next.js frontend:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Sanity CMS Setup

### Step 1: Initialize Sanity

Navigate to the `studio` directory and initialize a **Sanity CMS** project:

```sh
npm install -g @sanity/cli
sanity init
```

Follow the prompts to set up the project and select the appropriate schema for your needs.

### Step 2: Configure Content Schema

Customize the content schema to fit the type of content you’ll be managing (e.g., blog posts, pages).

## Monorepo Management

Use **npm workspaces** or **Yarn workspaces** to manage dependencies in a monorepo:

### Step 1: Set Up Package.json

Create a root `package.json` with workspaces configured:

```json
{
  "name": "monorepo",
  "private": true,
  "workspaces": ["frontend", "backend", "studio"]
}
```

## GitHub Setup

### Step 1: Initialize a Git Repository

Navigate to the root directory and initialize a Git repository:

```sh
git init
git add .
git commit -m "Initial commit for monorepo boilerplate"
```

### Step 2: Create a GitHub Repository

Create a new repository on **GitHub** and follow the instructions to push your code.

```sh
git remote add origin <repository-url>
git branch -M main
git push -u origin main
```

---

This boilerplate provides a clean starting point for projects using **Next.js** with **TypeScript**, **FastAPI**, and **Sanity** CMS. All components are designed to be **reusable** and **modular**, following best practices in both **frontend** and **backend** development.
