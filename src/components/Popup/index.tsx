import React from 'react';

// import { Container } from './styles';

const Popup: React.FC = () => {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <h1>Any Text</h1>
        <button type="button" onClick={() => console.log('Hello')}>
          close me
        </button>
      </div>
    </div>
  );
};

export default Popup;
