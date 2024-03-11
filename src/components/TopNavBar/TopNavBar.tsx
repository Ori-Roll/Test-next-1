'use client';

import React from 'react';
import styles from './TopNavBar.module.css';
import Link from 'next/link';

type TopNavBarProps = {};

type MenuItemName = 'POSTS';

type MenuItem = {
  name: MenuItemName;
  url: string;
  callback: () => void;
};

const menuItems: MenuItem[] = [
  {
    name: 'POSTS',
    url: '/posts',
    callback: () => console.log('POSTS'),
  },
];

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  const [userModalOpen, setUserModalOpen] = React.useState(false);

  return (
    <div className={styles['top-nav-bar']}>
      <div>
        {menuItems.map(({ name: key, name, callback }) => (
          <Link
            key={key}
            href={`/${name.toLowerCase()}`}
            className={styles['dropdown-button']}
          >
            {name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          key="user"
          href={`user`} //TODO: Move href to a constant or config
          className={styles['dropdown-button']}
        >
          USER
        </Link>
      </div>
    </div>
  );
};
