'use client';

import React from 'react';
import styles from './User.module.css';

type UserProps = {
  name: string;
  id: string;
  onLogout: () => void;
};

export const User: React.FC<UserProps> = ({ name, id, onLogout }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <span className={styles.name}>Name: {name}</span>
        <span className={styles.id}>ID: {id}</span>
      </div>
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
