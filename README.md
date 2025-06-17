# EcoMinho
Website for an Air Conditioning Company

![Ecominho Website Hero](https://lirp.cdn-website.com/013819ed/dms3rep/multi/opt/1.1-e14394f8-607w.png)

This repository contains the source code for the official website of **Ecominho**, a leading company in climatization and renewable energy solutions based in Vila Verde, Portugal. The website is built with Angular and features a modern, sophisticated, and user-friendly design to showcase the company's services and portfolio.

---

## ✨ Features

* **Modern & Sophisticated Design:** A clean, light, and elegant user interface that reflects the premium quality of Ecominho's services.
* **Fully Responsive:** Flawless viewing and interaction on all devices, from mobile phones to desktop computers.
* **Multi-Page Layout:** A clear and intuitive structure with dedicated pages for:
    * **Home:** An engaging introduction with an overview of services.
    * **Solutions:** Detailed descriptions of climatization, renewable energy, and AQS services.
    * **Projects:** A visually appealing gallery showcasing the company's portfolio.
    * **About Us:** Company history, mission, and values.
    * **Contact:** An easy-to-use contact form and detailed information.
* **Dynamic Components:** Built with Angular's modern standalone component architecture.
* **CSS-Styled:** Uses modern CSS with variables for a consistent and maintainable theme, based on the official brand colors.

---

## 🛠️ Tech Stack

* **[Angular](https://angular.io/):** A powerful TypeScript-based framework for building dynamic web applications.
* **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that enhances code quality and maintainability.
* **HTML5 & CSS3:** With modern features like CSS Variables, Flexbox, and Grid for layout.
* **No UI Frameworks:** All styling is custom-coded for a unique and lightweight result.

---

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your machine:
* **Node.js** (which includes npm): [Download & Install Node.js](https://nodejs.org/)
* **Angular CLI:** Install it globally by running the command below in your terminal.
    ```sh
    npm install -g @angular/cli
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/ecominho-website.git](https://github.com/your-username/ecominho-website.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd ecominho-website
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```sh
    ng serve
    ```
2.  **Open your browser:**
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## 📁 Project Structure

The project follows the standard Angular project structure:


ecominho-website/
└── src/
├── app/
│   ├── components/       # Reusable components
│   │   ├── header/
│   │   └── footer/
│   ├── pages/            # Main pages of the website
│   │   ├── home/
│   │   ├── solutions/
│   │   ├── projects/
│   │   ├── about/
│   │   └── contact/
│   ├── app.component.ts    # Main application component
│   ├── app.config.ts       # Application configuration
│   └── app.routes.ts       # Application routes
├── assets/               # Static assets like images, icons
├── index.html            # Main HTML file
├── main.ts               # Main entry point of the application
└── styles.css            # Global application styles


---
