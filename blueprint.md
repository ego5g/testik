# Project Overview

This is a simple one-page landing page built with Next.js and TypeScript.

# Application Features and Style Guide

*   **Framework:** Next.js with App Router
*   **Styling:** CSS Modules, global CSS with Google Fonts (Poppins)
*   **Components:**
    *   Header
    *   Hero Section
*   **Design:**
    *   The landing page has a white background.
    *   The header is a flex container with space-between justification.
    *   The primary button has a purple background (`#6A65FD`).
    *   The base font is Poppins, with weights 400 and 500.
*   **Image Handling:** Use standard `<img>` tags instead of `next/image`.

# Current Task: Component-Based CSS Modules & Image Tag Refactor

Refactor the styling to use component-specific CSS Modules and update image tags.

## Plan

1.  **Header Component Refactor:**
    *   Create `components/Header.module.css`.
    *   Move all header-related styles from `styles/Landing.css` to the new module.
    *   Update `components/Header.tsx` to use the new CSS module.
    *   Replace `next/image` components with standard `<img>` tags.
2.  **Hero CSS Module:**
    *   Create `components/Hero.module.css`.
    *   Move all hero-related styles to the new module.
    *   Update `components/Hero.tsx` to use the new CSS module.
