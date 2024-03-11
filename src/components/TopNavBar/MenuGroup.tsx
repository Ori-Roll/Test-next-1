import React from 'react';
import styles from './MenuGroup.module.css';

type MenuGroupProps = {
  children: React.ReactNode;
};

export const MenuGroup: React.FC<MenuGroupProps> = (props) => {
  const { children } = props;

  return <div className={styles['menu-button-group']}>{children}</div>;
};

export default MenuGroup;
