'use client';

import React from 'react';
import styles from './TopMenu.module.css';

interface TopMenuProps {}

type MenuItemName = 'Posts';

type MenuItem = {
  name: MenuItemName;
  callback: () => void;
};

const menuItems: MenuItem[] = [
  {
    name: 'Posts',
    callback: () => console.log('Posts'),
  },
];

export const TopMenu: React.FC<TopMenuProps> = () => {
  const [userModalOpen, setUserModalOpen] = React.useState(false);

  const handleUserClick = () =>
    setUserModalOpen((prevUserModalOpen) => !prevUserModalOpen);

  return (
    <div className={styles['top-menu']}>
      <div className={styles['top-menu-button-group']}>
        {menuItems.map(({ name: key, name, callback }) => (
          <div key={key} className={styles['top-menu-dropdown-button-wrapper']}>
            <button
              onClick={callback}
              className={styles['top-menu-dropdown-button']}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
      <div className={styles['top-menu-button-group']}>
        <button
          className={styles['top-menu-dropdown-button']}
          onClick={handleUserClick}
        >
          user
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
