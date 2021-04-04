import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasts";

function App() {
  const [showAddTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 4:30p",
      reminder: false,
    },
    {
      id: 2,
      text: "Programming",
      day: "Feb 5th at 3:30p",
      reminder: false,
    },
    {
      id: 1,
      text: "Book Reading",
      day: "Feb 5th at 2:30p",
      reminder: false,
    },
  ]);
  //add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      <Header title="Task Tracker" onAdd={() => setShowTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <div className="noTask">No task to show</div>
      )}
    </div>
  );
}

export default App;
