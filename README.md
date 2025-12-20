# Portfolio Web Application

## Overview

This project is a centralized, responsive portfolio web application designed to showcase professional projects and provide a seamless contact interface. Built with **React**, it leverages modern libraries such as **Chakra UI** for a polished design system and **Formik** for robust form management.

The application demonstrates a mastery of front-end development principles, including component composition, state management, client-side validation, and interactive UI animations.

### [View Project] ()

## Key Features

- **Responsive Design:** A mobile-first layout that adapts gracefully to different screen sizes using Chakra UI's responsive style props.
- **Project Showcase:** A dynamic grid section displaying featured projects with descriptions and links, implemented with reusable Card components.
- **Interactive Contact Form:**
  - Built with **Formik** for efficient state handling.
  - Integration with **Yup** for comprehensive schema-based validation (e.g., email format, required fields).
  - Controlled components ensuring single source of truth.
  - Real-time feedback and error messaging for improved user experience.
- **Smooth Navigation:**
  - Header navigation with smooth scrolling to internal sections (Projects, Contact).
  - External links to social media profiles using FontAwesome icons.
  - **Scroll-aware Header:** An animated header that hides on scroll down and reappears on scroll up to maximize screen real estate.
- **Simulated Backend Integration:**
  - Asynchronous form submission handling with loading states.
  - Custom hook (`useSubmit`) simulating API responses (success/error scenarios).
  - Context-based Alert system (`AlertContext`) to provide immediate user feedback upon submission.

## Technologies & Tools

- **Core:** React (v18), JavaScript (ES6+)
- **UI Framework:** Chakra UI, Emotion
- **Form Management:** Formik
- **Validation:** Yup
- **Icons:** FontAwesome
- **Animation:** Framer Motion (via Chakra UI transitions)
- **Testing:** React Testing Library

## Installation and Running

To run this project locally, ensure you have Node.js installed on your machine.

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd meta-advanced-react-final-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    The application will launch in your default browser at `http://localhost:3000`.

4.  **run tests:**
    ```bash
    npm test
    ```

## Project Highlights for Reviewers

- **Clean Component Architecture:** The application logic is decomposed into small, focused components (`Header`, `LandingSection`, `ProjectsSection`, `ContactMeSection`, `Card`) promoting reusability and maintainability.
- **Custom Hooks:** Utilization of custom hooks (e.g., `useSubmit`, `useAlertContext`) to encapsulate logic and side effects, keeping UI components declarative.
- **Accessibility:** Semantic HTML elements and ARIA attributes (leveraged via Chakra UI) ensure the site is accessible.
- **Error Handling:** Graceful handling of edge cases in form submission and validation errors.

---

_This project was developed as part of the Meta Advanced React Course final assessment._
