import React from 'react';
import TodoItem from './TodoItem';
import styles from '../App.module.css';

const TodoList = ({ tasks, deleteTask, editTask }) => {
   return (
      <div className={styles.list}>
         {tasks.map((task) => (
            <TodoItem
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               editTask={editTask}
            />
         ))}
      </div>
   );
};

export default TodoList;
