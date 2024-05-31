import React from 'react';
import styles from '../App.module.css';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
   return (
      <input
         type="text"
         placeholder="Search tasks..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className={styles.input}
      />
   );
};

export default SearchBox;
