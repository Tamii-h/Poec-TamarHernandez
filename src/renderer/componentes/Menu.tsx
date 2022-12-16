import { useState } from 'react';

type PropsComponenteN = {
  label: string;
  options: string[];
  show: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  showMe: () => void;
};
function Menu({ label, options, show, showMe }: PropsComponenteN) {
  return (
    <div
      onMouseOver={showMe}
      onClick={showMe}
      style={{
        padding: 10,
        color: '#FFFFFF',
        background: '#2e2e2e',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {label}
      <div
        style={{
          display: !show ? 'none' : 'block',
          color: '#FFFFFF',
          background: '#2e2e2e',
          position: 'absolute',
          width: 150,
          left: 0,
        }}
      >
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
