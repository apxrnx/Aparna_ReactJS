import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBox from './components/SearchBox';
import styles from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.leftPanel}>
        <div className={styles.searchSection}>
          <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className={styles.addTaskSection}>
          <h2>Add a New Task</h2>
          <TodoForm addTask={addTask} />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h2>Tasks</h2>
        {filteredTasks.length > 0 ? (
          <TodoList tasks={filteredTasks} deleteTask={deleteTask} editTask={editTask} />
        ) : (
          <p className={styles.noTasks}>No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default App;
