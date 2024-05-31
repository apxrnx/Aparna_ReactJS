import React, { useState } from 'react';
import styles from '../App.module.css';

const TodoForm = ({ addTask }) => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!title) return;

      addTask({ title, description });
      setTitle('');
      setDescription('');
   };

   return (
      <form onSubmit={handleSubmit} className={styles.form}>
         <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
         />
         <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
         ></textarea>
         <button type="submit" className={styles.button}>Add Task</button>
      </form>
   );
};

export default TodoForm;
