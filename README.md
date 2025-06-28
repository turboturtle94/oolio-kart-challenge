# Kart-challenge

## ✅ Legend  
✅ — Feature `Completed`

---

## Functional Requirements

- ✅ Display products with images  
- ✅ Add items to the cart and remove items  
- ✅ Show order total correctly  
- ✅ Increase or decrease item count in the cart  
- ✅ Show order confirmation after placing the order  
- ✅ Interactive hover and focus states for elements  

## Bonus Goals

- ✅ Allow users to enter a discount code (above the "Confirm Order" button)  
- ✅ Discount code `HAPPYHOURS` applies 18% discount to the order total  
- ✅ Discount code `BUYGETONE` gives the lowest priced item for free  
- ✅ Responsive design based on device's screen size  

## Project setup
- Clone the repo and run `npm i` 
- Project will be launched on `localhost:5173`

## Deployed project 
- Deployed the project on Vercel - https://oolio-kart-challenge-git-main-hemanth-ks-projects-5c3a7b8d.vercel.app/

## 📱 Supported Screen Resolutions

This project is designed to be responsive across a wide range of devices. Below is a list of standard screen resolutions considered during development and testing:

### 🟢 Mobile Devices
| Device                | Resolution     |
|-----------------------|----------------|
| iPhone SE             | 375 × 667      |
| iPhone X/11/12/13     | 375 × 812      |
| iPhone 12 Pro Max     | 428 × 926      |
| Pixel 5               | 393 × 851      |
| Samsung Galaxy S20    | 412 × 915      |

### 🟡 Tablets
| Device                | Resolution     |
|-----------------------|----------------|
| iPad Mini             | 768 × 1024     |
| iPad Pro              | 1024 × 1366    |
| Nexus 10              | 800 × 1280     |

### 🔵 Laptops
| Device                | Resolution     |
|-----------------------|----------------|
| MacBook Air (13")     | 1440 × 900     |
| MacBook Pro (14")     | 1512 × 982     |
| Surface Laptop        | 2256 × 1504    |
| Typical Laptop        | 1366 × 768     |

### 🖥️ Desktops
| Device                | Resolution     |
|-----------------------|----------------|
| Full HD               | 1920 × 1080    |
| WQHD (2K)             | 2560 × 1440    |
| 4K UHD                | 3840 × 2160    |

### 🧪 Notes
- Layouts adapt dynamically via media queries (e.g. `@media (min-width: 1024px)`).
- The grid system adjusts for `1fr`, `3fr`, or `4fr` depending on screen width.
- Custom scrollbar styling is applied for consistency across browsers.
- The hover styles when verified via chrome developer tools are being treated as touch device irrespective of resolution selected. Accordingly is not firing the hover event. Please verify any hover styles without going to resolution settings or the URL can be hit from mobiles to see the same.

