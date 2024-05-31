import React, { useState } from 'react';
import styles from '../App.module.css';

const TodoItem = ({ task, deleteTask, editTask }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [newTitle, setNewTitle] = useState(task.title);
   const [newDescription, setNewDescription] = useState(task.description);

   const handleEdit = () => {
      if (isEditing) {
         editTask(task.id, { title: newTitle, description: newDescription });
      }
      setIsEditing(!isEditing);
   };

   return (
      <div className={styles.item}>
         {isEditing ? (
            <div className={styles.editing}>
               <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className={styles.input}
               />
               <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className={styles.textarea}
               ></textarea>
            </div>
         ) : (
            <div>
               <h3>{task.title}</h3>
               <p>{task.description}</p>
            </div>
         )}
         <div>
            <button onClick={handleEdit} className={styles.button}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={() => deleteTask(task.id)} className={styles.button}>Delete</button>
         </div>
      </div>
   );
};

export default TodoItem;
