[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/V0iccz-y)

# Recipe Suggester - Prototype

This is a barebones prototype for a web app that suggests recipes based on your available ingredients and allows saving them locally.

## How to Use

1. Open `index.html` in a browser.
2. Enter some ingredients and click "Get Recipes" to see a sample recipe.
3. Click "Save Recipe" to store it.
4. Click "Go to Recipe Library" to view saved recipes.
5. From there, click "Generate Grocery List" to see a sample list.

> All data is stored using localStorage.

This is a prototype only—actual recipe logic is not implemented.





# SmartRecipe Assistant

SmartRecipe Assistant is a web-based application designed to help users manage their recipes, generate grocery lists, suggest meals based on ingredient availability, and compare grocery prices across local stores. Built with scalability, usability, and offline support in mind.

---

## Key Qualities (Figure 4.4 & Table 4.4)

- **Usability** – Clean, responsive interface and filter-based browsing
- **Scalability** – Modular architecture for feature expansion
- **Security** – User login with role-based access and JWT
- **Portability** – Supports desktop and mobile browsers, PWA-ready
- **Software Reuse** – Uses open-source libraries and reusable components

---

## Layered Architecture (Figure 4.11)

### 1. **User Interface**
- Web browser frontend (React.js with responsive design)
- PWA support for offline usage

### 2. **User Interface Management**
- Forms (add notes, expiration input)
- Interface delivery via React Router
- Login functionality (JWT/Firebase)

### 3. **Configuration Services**
- User settings (diet preferences, store selection)
- App-level toggles (enable/disable suggestions)
- Security config for roles

### 4. **Application Services**
- Recipe filtering  
- Grocery list generation  
- Healthy suggestions  
- Expiring ingredient tracking  
- Note management

### 5. **Integrated Services**
- Grocery store price comparison API  
- User analytics  
- Recipe recommendation engine  
- Auth integration

### 6. **Shared Infrastructure Services**
- Auth service (JWT/Firebase)  
- Database (MongoDB/PostgreSQL)  
- API endpoints (Node.js/Express)  
- Logging and search  


---

## Technology Stack (Table 4.8)

| Area              | Technology           | Purpose                              |
|-------------------|----------------------|--------------------------------------|
| Frontend          | React.js             | Dynamic and responsive UI            |
| Backend           | Node.js + Express    | REST API, business logic             |
| Authentication    | Firebase / JWT       | Secure user login                    |
| Database          | PostgreSQL or MongoDB| Persistent data storage              |
| Hosting           | Vercel + Render      | Free-tier deployment                 |
| Dev Tools         | GitHub, VS Code      | Collaboration, IDE                   |
| APIs              | Price compare API    | Store-based cost breakdown           |


# Architecture diagram
 You can view the architecture diagram URL in [architecture-diagram.txt](./architecture-diagram.txt).

## 🧩 Linked Features (GitHub Issues)

| Feature Description | GitHub Issue Link |
|---------------------|------------------|
| 🔎 Filter recipes/ingredients | [#18](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/18) |
| 📥 Offline recipe access | [#19](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/19) |
| 🥗 Healthy recipe suggestions | [#20](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/20) |
| 🛒 Combined grocery list | [#17](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/17) |
| ⏳ Show expiring ingredients | [#16](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/16) |
| 📝 User recipe notes | [#15](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/15) |
| 💲 Grocery price comparison | [#14](https://github.com/CSCI-40500-Summer-2025/Project-3/issues/14) |
