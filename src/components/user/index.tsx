import React from 'react';
import { User as NextUiUser } from '@nextui-org/react';
import { BASE_URL } from '../../constants';

type Props = {
  name: string;
  avatarUrl: string;
  description?: string;
  className?: string;
}

export const User: React.FC<Props> = ({
  name = '',
  avatarUrl = '',
  description = '',
  className = '',
}) => {
  return (
    <NextUiUser 
      className={className}
      name={name}
      description={description}
      avatarProps={{src: `${BASE_URL}${avatarUrl}`}}
    />
  )
}