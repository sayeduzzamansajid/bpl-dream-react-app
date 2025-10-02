# 🏏 BPL Dreams – Player Buying Demo App

A simple **React-based demo website** where users can buy cricket players with a given balance.  
The app demonstrates dynamic balance management, player selection limits, and toast notifications.  

---

## 🚀 Features

- 🎯 **Buy Players** – Select and purchase up to **6 players**.  
- 💰 **Balance Management** –  
  - Adding a player reduces the balance.  
  - Removing a player refunds the balance.  
- ⚠️ **Toast Notifications** –  
  - Shows **“Insufficient Balance”** when you don’t have enough funds.  
  - Shows **“Max Players Reached”** when trying to select more than 6 players.  
- ⚡ **Responsive UI** – Built with React & styled for a smooth experience.  

---

## 🛠️ Tech Stack

- **React** (Vite setup)  
- **JavaScript (ES6+)**  
- **CSS Modules / Tailwind (depending on styling used)**  
- **Toast Library** (e.g., React-Toastify or custom implementation)  

---

## 📂 Project Structure

```
bpl-dreams/
│── public/ # Static assets
│── src/
│ ├── components/ # Reusable components (PlayerCard, Toast, etc.)
│ ├── pages/ # Page views
│ ├── App.jsx # Root component
│ ├── main.jsx # React entry file
│ └── styles/ # CSS or Tailwind styles
│── index.html # App mount point
│── package.json # Dependencies & scripts
│── vite.config.js # Vite configuration
└── README.md # Project documentation
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/bpl-dreams.git
cd bpl-dreams
```

# 📸 Demo Flow

1. Start with a set balance.

1. Select players → Balance decreases.

1. Try buying with low balance → “Insufficient Balance” toast.

1. Try selecting more than 6 players → “Max Players Reached” toast.

1. Remove a player → Balance is restored.


## 🌐 Live Demo

👉 [Click here to try the app](https://bpl-dream-react.pages.dev/)  
