# 💸 React Investment Calculator

A simple, interactive investment calculator built with React and Vite. Enter your investment details and instantly see how your money grows over time!

![Investment Calculator Logo](public/investment-calculator-logo.png)

---

## 🚀 Features

- **Live Calculation:** See investment growth and interest breakdown year by year.
- **Responsive UI:** Clean, modern design with mobile-friendly layout.
- **Instant Feedback:** Input validation and helpful messages.
- **Built with:**  
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=FFD62E)

---

## 🖥️ Demo

![Screenshot](src/assets/investment-calculator-logo.png)

---

## 📦 Project Structure

```
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── assets/
│   │   └── investment-calculator-logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Results.jsx
│   │   └── UserInput.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the app locally:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## 📋 Usage

1. Enter your **Initial Investment**, **Annual Investment**, **Expected Return (%)**, and **Duration (years)**.
2. View the results table for yearly breakdowns of value, interest, and capital.

---

## 🧩 Components

- [`Header`](src/components/Header.jsx): App title and logo.
- [`UserInput`](src/components/UserInput.jsx): Form for investment parameters.
- [`Results`](src/components/Results.jsx): Table displaying investment growth.
- [`calculateInvestmentResults`](src/util/investment.js): Core calculation logic.

---

