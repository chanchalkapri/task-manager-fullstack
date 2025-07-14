import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const API = "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(\`\${API}/tasks\`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = () => {
    fetch(\`\${API}/tasks\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: newTask })
    })
    .then(() => {
      setTasks([...tasks, { task: newTask }]);
      setNewTask("");
    });
  };

  const deleteTask = (index) => {
    fetch(\`\${API}/tasks/\${index}\`, { method: "DELETE" })
      .then(() => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Task Manager</h2>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t.task}
            <button onClick={() => deleteTask(i)} style={{ marginLeft: 10 }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;