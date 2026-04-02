
# 🍽️ Restaurant Website (DevOps Project)

## 📌 Overview

This project is a restaurant website built using React and deployed using a complete DevOps workflow including Docker, Nginx, and CI/CD.

---

## 🚀 Tech Stack

* Frontend: React + Vite
* Styling: Tailwind CSS
* Web Server: Nginx
* Containerization: Docker
* CI/CD: GitHub Actions

---

## ⚙️ Running Locally

```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## 🏗️ Production Build

```bash
npm run build
```

This generates the `dist/` folder containing optimized static files.

---

## 🐳 Running with Docker

### Build image

```bash
docker build -t restaurant-app .
```

### Run container

```bash
docker run -p 8080:80 restaurant-app
```

Open: http://localhost:8080

---

## 🌐 Deployment

The app is containerized using Docker and can be deployed on platforms like Render.

---

## 🔄 CI/CD

GitHub Actions is used to automate build and deployment on every push to the main branch.

---

## 📊 Architecture

User → Browser → Nginx → React App → Docker → Cloud

---

## 📚 Learnings

* Difference between dev and production builds
* Docker multi-stage builds
* Nginx configuration for SPA
* CI/CD basics

---

## 📌 Future Improvements

* Add monitoring (Prometheus + Grafana)
* Kubernetes deployment
* Backend integration
