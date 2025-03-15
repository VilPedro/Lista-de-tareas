import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskCount from './components/TaskCount';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) { 
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="border border-gray-700 bg-gray-800 shadow-xl rounded-lg">
        <Header />
        <div className="p-6">
          <TaskForm newTask={newTask} setNewTask={setNewTask} handleSubmit={handleSubmit} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} handleDelete={handleDelete} />
          <TaskCount tasks={tasks} completedCount={completedCount} />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
