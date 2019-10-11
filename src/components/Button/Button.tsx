import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.css';

interface Props {
  name?: string;
  icon?: boolean;
  clickHandle: void;
}
const Button: React.FC<Props> = ({ name, icon, clickHandle }) => {
  return (
    <>
      {name && <button className={styles.button}>{name}</button>}
      {icon && <FontAwesomeIcon className={styles.icon} icon={faCaretUp} />}
    </>
  );
};

export default Button;
