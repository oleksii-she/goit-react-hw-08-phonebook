import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export const ModalMenu = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    function hendleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  function onCloseOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={css.Overlay} onClick={e => onCloseOverlay(e)}>
      <button className={css.button_close}></button>
      <div className={css.Modal}>
        <div className={css.containt_box}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
