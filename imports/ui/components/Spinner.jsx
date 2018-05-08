import React from 'react';

export const Spinner = () => {
  return (
    <div id="spinner-overlay">
      <span className="loader"></span>
      <h2>Fetching Location!</h2>
    </div>
  );
}
