# ByteSpace New --- Frontend Assessment

A responsive recreation of the **ByteSpace New** website based on the
provided Figma design.

## 🔗 Links

-   **Live Website:** https://bytespace-new-one.vercel.app/
-   **GitHub Repository:** `https://github.com/polokrf/bytespace-new.git`
-   **Figma Design:**
    https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0

## 📌 Project Overview

This project was developed as part of the **Jr. Software Engineer
(Frontend)** assessment.

The goal was to recreate the ByteSpace landing page from the provided
Figma design with a focus on responsive UI, reusable components, clean
code, and modern frontend practices.

The project includes the complete landing page along with **Login** and
**Register** pages.

## ✨ Features

### Landing Page

-   Responsive navigation
-   Hero section
-   Course-focused sections
-   Creator-focused sections
-   Statistics and feature sections
-   Creator CTA section
-   Responsive footer
-   Mobile, tablet, and desktop layouts

### Authentication Pages

-   Login page
-   Register page
-   Responsive authentication UI
-   Clean form interface
-   Navigation between Login and Register pages

## 🛠️ Technologies Used

-   **Next.js**
-   **TypeScript**
-   **React**
-   **Tailwind CSS**
-   **shadcn/ui**
-   **Lucide React**
-   **Next/Image**

## 📁 Project Structure

``` text
src/
├── app/
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   └── ui/
│
├── modules/
│   └── home/
│       └── components/
│           ├── Hero/
│           ├── GrowthAndCreator/
│           ├── CreatorCTA/
│           └── ...
│
└── lib/
    └── utils.ts
```

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

``` bash
cd YOUR_PROJECT_NAME
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## 📦 Production Build

``` bash
npm run build
```

Then:

``` bash
npm start
```

## 📱 Responsive Design

The website is designed for:

-   Mobile devices
-   Tablets
-   Laptops
-   Desktop screens

Layouts, typography, spacing, images, cards, and decorative elements
adapt to different viewport sizes.

## 🎨 Design Implementation

The UI was implemented based on the provided Figma reference.

Attention was given to:

-   Typography hierarchy
-   Section spacing
-   Colors
-   Rounded cards
-   Decorative shapes
-   Responsive positioning
-   CTA buttons
-   Course and creator visual elements

## 🧩 Component Architecture

The landing page is divided into reusable components instead of placing
the entire page in a single component.

This makes the project easier to maintain, debug, reuse, and extend.

## 🔐 Login & Register

Login and Register pages are implemented as frontend UI pages for this
assessment.

No production authentication backend or database integration is
included.

## 📝 Notes

-   The implementation follows the provided Figma design.
-   External image URLs may be used for selected visual assets.
-   The project focuses on frontend implementation and responsive UI.
-   Authentication is UI-only for this assessment.

## 👨‍💻 Author

**Polok Kumar**

MERN Stack Developer

GitHub: `YOUR_GITHUB_PROFILE_URL`

## 📄 Assessment

**Position:** Jr. Software Engineer (Frontend)

**Tracking ID:** `04ce7e91-9658-477c-9355-a4827707f72c`

**Deadline:** October 01, 2026
