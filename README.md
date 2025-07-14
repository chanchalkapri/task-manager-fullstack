# 🧠 Task Manager – ReactJS + FastAPI

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/chanchalkapri/task-manager-fullstack)
[![Tech](https://img.shields.io/badge/stack-react%20%7C%20fastapi%20%7C%20python-blue)](https://github.com/chanchalkapri/task-manager-fullstack)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

> ⚡ A lightweight full-stack Task Manager app built with **ReactJS (frontend)** and **FastAPI (backend)**. Developed under a 40-minute time constraint for the AIVOA Python Developer role assignment.

---

## 📌 Features

- ✅ Add new tasks
- 📋 View task list
- ❌ Delete tasks by index
- 🔁 Real-time frontend/backend sync via REST APIs
- ⚙️ Clean, minimal codebase — beginner and recruiter friendly

---

## 🧱 Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | ReactJS            |
| Backend   | FastAPI (Python)   |
| API Comm. | REST (with CORS)   |
| Storage   | In-memory Python list (demo purpose) |

---

## 📂 Folder Structure

---

## 🚀 How to Run This Project

### ▶️ Backend (FastAPI)

```bash
cd fastapi-backend
python -m venv venv
source venv/bin/activate      # For Windows: venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload

