import React from 'react';

type Props = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto mt-10 overflow-x-hidden">
      {children}
    </div>
  )
}
