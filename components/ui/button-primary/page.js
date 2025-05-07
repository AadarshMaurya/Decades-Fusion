import React from 'react'

const page =({ label, onClick, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`flex-1 btn-secondary text-sm py-2 ${className}`}
      >
        {label}
      </button>
    );
  };
export default page