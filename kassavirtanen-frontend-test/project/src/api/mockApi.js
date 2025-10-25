let tasks = [
  {
    id: 1,
    title: "Fix login bug",
    type: "Bug",
    priority: "High",
    project: "E-commerce Platform",
    assignee: "John Doe",
    description: "Users cannot login with special characters in password",
    dueDate: "2024-02-15",
    severity: "Medium",
    subtasks: ["Investigate password validation", "Update validation regex"],
  },
  {
    id: 2,
    title: "Add dark mode",
    type: "Feature",
    priority: "Medium",
    project: "E-commerce Platform",
    assignee: "Jane Smith",
    description: "Implement dark theme toggle",
    dueDate: "2024-02-20",
    businessValue: "Improve user experience and reduce eye strain",
    acceptanceCriteria: [
      "Toggle switch in settings",
      "Persist theme preference",
      "All components support dark mode",
    ],
  },
];

export const fetchTasks = async () =>
  new Promise((resolve) => setTimeout(() => resolve(tasks), 500));

export const addTaskApi = async (newTask) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const task = { ...newTask, id: Date.now() };
      tasks.push(task);
      resolve(task);
    }, 500);
  });
