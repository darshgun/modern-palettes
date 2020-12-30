import React from 'react';
import Modal from 'react-standard-modal';
import styles from './Modal.module.scss';

const ModalWrapper = (props) => <Modal className={{ Modal: styles.modal }} {...props} />;

export default ModalWrapper;
