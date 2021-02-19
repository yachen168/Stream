import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';

import styles from './index.module.scss';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className={styles.modal_container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <p>確定要刪除該影片嗎？</p>
        <div className={styles.actions}>
          <button className={styles.confirm_button}>確定</button>
          <button onClick={() => history.push('/')} className={styles.cancel}>
            取消
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
