# React + Vite Todo Task List

This project is a simple **Task Management App** built with **React** and **Vite**. It allows users to add, complete, filter, and delete tasks with data persistence via `localStorage`.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/gauravb31/taskmanagment.git
cd taskmanagment

## Install Dependencies

npm install

## Start the Development Server
npm run dev

## Decisions and Assumptions
Vite was chosen for fast dev server startup and hot module replacement.

LocalStorage is used for persisting tasks instead of a backend or database.

Each task has a:

Name (text string)

Status (either Active or Completed)

Task names are assumed to be unique for simplicity when deleting them.

Filtering is done on the client-side.

## Features
✅ Add tasks

✅ Mark tasks as completed or active via checkbox

✅ Filter tasks by status (All, Active, Completed)

✅ Delete tasks

✅ Persist task list using localStorage

✅ Responsive and clean layout (basic CSS)

## Bonus Features Implemented
Reusable component for task item (TaskItem)

Automatic focus management using controlled inputs

Persistent task state using localStorage

Task count for pending items

## Tech Stack
React (Functional components + Hooks)

Vite (Fast build and dev server)

CSS for styling

ESLint with recommended rules
