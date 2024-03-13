'use client';

import React from 'react';
import { User as UserComponent } from '@/components/User';

type UserPageProps = {};

export const User: React.FC<UserPageProps> = () => {
  const userName = '';
  const userId = '';

  const handleOnLogout = () => {};

  return (
    <div>
      <h1>User Page</h1>
      <UserComponent name={userName} id={userId} onLogout={handleOnLogout} />
    </div>
  );
};

export default User;
