// src/components/common/ModalComponent.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  name: string;
  age: number;
  imageUrl: string;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, close, name, age, imageUrl }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={close}>&times;</span>
          <img src={imageUrl} alt="Profile" className="modal-profile-pic-small" />
          <h2>{name}</h2>
          <p>Age: {age}</p>
        </div>
      </div>
    );
  };

export default ModalComponent;
