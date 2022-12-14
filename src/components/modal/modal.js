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
      <div className={css.Modal}>
        <button
          className={css.button_close}
          onClick={e => onCloseOverlay(e)}
        ></button>
        <div className={css.containt_box}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
