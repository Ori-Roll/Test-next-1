import React from 'react';
import styles from './MenuGroup.module.css';

type TopMenuProps = {
  children: React.ReactNode;
};

export const MenuGroup: React.FC<TopMenuProps> = (props) => {
  const { children } = props;

  return <div className={styles['menu-button-group']}>{children}</div>;
};

export default MenuGroup;
