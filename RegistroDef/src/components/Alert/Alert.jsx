import React from 'react';

export const Alert = ({ errors }) => {
  return (
    <div>
      {Object.values(errors).map((error, index) => {
        if (error) {
          return <div key={index}>{error}</div>;
        }
        return null;
      })}
    </div>
  );
};