import React from 'react';

export const Alert = ({ msj, color }) => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {msj}
    </div>
  );
};
