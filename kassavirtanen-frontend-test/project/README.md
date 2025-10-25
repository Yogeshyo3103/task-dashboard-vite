Task Dashboard

Author: Yogesh
Date: 25 Oct 2025

Short description

Task Dashboard is a small task-management frontend app built with React, Vite, Redux, Redux-Saga and react-hook-form. It demonstrates adding new tasks via a form, fetching tasks from a mock API, and managing tasks in a Redux store. The project was created as a take-home test to implement a “create task” feature that mimics the reference environment.

Tech stack

React (with functional components & hooks)

Vite (dev server / build)

Redux (state management)

Redux-Saga (async flow / API simulation)

react-hook-form (form handling)

Mock API (src/api/mockApi.js) to simulate backend

Project structure
project/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ api/
   │  └─ mockApi.js
   ├─ components/
   │  ├─ TaskDashboard.jsx
   │  ├─ TaskForm.jsx
   │  └─ TaskList.jsx
   └─ store/
      ├─ actions.js
      ├─ reducers.js
      ├─ sagas.js
      ├─ index.js
      └─ selectors.js

How to install and run

Open terminal in the project folder and run:

# install dependencies
npm install

# install form library if not already installed
npm install react-hook-form

# start dev server
npm run dev


Then open your browser at:

http://localhost:5173

What the app does / Features implemented

Displays a list of tasks fetched from a mock API (src/api/mockApi.js).

A form to create a new task (title, type, priority, project, assignee, description, due date).

Form built with react-hook-form for better form state handling.

New tasks are dispatched to Redux using an ADD_TASK action and shown in the task list.

Redux store holds tasks and can be extended to persist / sync with a real backend.

Redux-Saga scaffolded to support async API calls (mocked for this test).

Simple, responsive UI layout — easy to extend.

How the create-task flow works (short)

User fills the task form and submits.

The TaskForm component uses react-hook-form and dispatches addTask(...).

Redux reducer updates the tasks array in the store.

TaskList subscribes to the store (via useSelector) and re-renders showing the new task.

Optionally (if extended), a saga would call addTaskApi() to persist to backend and dispatch SET_TASKS on success.

Known issues / deviations

This project uses a local mock API only (no real backend); tasks are stored in memory in mockApi.js.

Redux-Saga is scaffolded but may not contain full effect implementations for all flows depending on which branch you used.

node_modules is not included in the repository — run npm install before npm run dev.

If react-hook-form or other packages are missing, install via npm install react-hook-form redux react-redux redux-saga.

Testing & Demo

Manually test by running the dev server and adding tasks through the form.

(Optional) Create a 30–90s screen recording showing:

Opening http://localhost:5173.

Creating a new task and showing it appears in the list.

(Optional) Add the screen recording to the repo under /docs or share a download link.

Commit guidance (what I followed)

Make small, meaningful commits for each development step. Example commit messages:

chore: initialize project with Vite

feat(store): add actions, reducers

feat(api): add mockApi with sample tasks

feat(ui): add TaskForm component with react-hook-form

feat(ui): add TaskList component and display tasks

test: add demo screenshot/screencast

How to submit

Push your changes to the GitHub repository (example remote):

git remote add origin https://github.com/Yogeshyo3103/task-dashboard-vite.git
git branch -M main
git add .
git commit -m "feat: implement task create + mock api"
git push -u origin main


Share the GitHub repository URL with the reviewer (example):

https://github.com/Yogeshyo3103/task-dashboard-vite


Optional: Attach a ZIP (without node_modules) or a short screen recording if requested.

Troubleshooting

git not found in VS Code terminal: install Git for Windows (https://git-scm.com/downloads
).

Cannot find module 'react-hook-form': run npm install react-hook-form.

If Vite complains about @vitejs/plugin-react or config: try removing custom vite.config.js temporarily or ensure dependencies are installed and Node 16+ is used.

If a process locks esbuild.exe on Windows, close node/vite and any editors, or reboot. Then run npm install again.

