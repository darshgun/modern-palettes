import React from 'react';
import Modal from 'react-standard-modal';

export function ChildModal({ children }) {
  return <Modal>{children}</Modal>;
}

export default ChildModal;
