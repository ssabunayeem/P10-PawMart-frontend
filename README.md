# PawMart – 🐕 Pet Adoption & Supply Portal — “PawMart”

PawMart is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can browse, contact, and order directly.


## 🚀 Live Demo

**Surge Link:** *http://p10-winter-pet-care.surge.sh/*


---

## 📌 Project Overview

**PawMart** provides useful resources and services for taking better care of pets in winter. The platform showcases:

* Winter pet-care tips
* Essential products
* Services such as grooming, medical care, and pet-walking
* Dynamic card-based UI
* Fully responsive layout

## 🧩 Layout Structure

### Navbar
Before Login:
Left: Logo + Website Name
Middle: Home | Pets & Supplies
Right: Login | Register
After Login:
Left: Logo + Website Name
Middle: Home | Pets & Supplies | Add Listing | My Listings | My Orders
Right: Profile Avatar | Logout

### Main Section
Dynamic routing with React Router — content changes based on route navigation.

### Footer
Include:
Logo / Site Name
Short Description: “PawMart connects local pet owners and buyers for adoption and pet care products.”
Copyright
Useful Links (Home, Contact, Terms)

---

## 🧩 Features

### ✅ **1. Home Page**

* Hero section with winter-themed visuals
* Short description of winter pet care
* CTA button for exploring services

### ✅ **2. Pet Care Services**

* Dynamically displayed service cards
* Each card includes image, description, and pricing
* Fully responsive grid layout

### ✅ **3. Pet Care Tips Section**

* Winter-related pet safety tips
* Icons and illustrations

### ✅ **4. Navbar & Footer**

* Clean and minimal UI
* Mobile-friendly hamburger menu

### ✅ **5. Responsive Design**

* Works perfectly across all screen sizes
* Tailwind-based utility classes

---

## 🛠️ Tech Stack

| Technology                 | Usage                  |
| -------------------------- | ---------------------- |
| **React.js**               | Frontend UI Framework  |
| **React Router**           | Routing & Navigation   |
| **Tailwind CSS / DaisyUI** | Styling & Components   |
| **JSON Data**              | Dynamic card rendering |
| **Surge / Firebase**       | Deployment             |

---

## 📂 Project Structure

```
WarmPaws/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── ServiceCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Tips.jsx
│   ├── data/
│   │   └── services.json
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
git clone <your-repo-url>
cd WinterPetCare
npm install
npm run dev
```

The project will run at: **http://localhost:5173**

---

## 📦 Build

```bash
npm run build
```

This will create a `dist/` folder ready for deployment.

---

## 🌐 Deployment

You can deploy easily using Surge:

```bash
npm run build
surge dist
```

Or use **Vercel / Netlify** by uploading the build folder.

or use **firebase**

```bash
npm run build
firebase deploy
```

---

## 📸 Screenshots

*project screenshots here (optional).*

---

## 🙌 Credits

* Developer: **S.S. Abu Nayeem**
* Category: **B12-A10_category-0016**

---

## 📄 License

This project is for educational & assignment use. Free to modify and experiment.

---

If you want updates, badges, or more sections, just tell me!
