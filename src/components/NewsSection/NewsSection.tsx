import React from 'react';
import styles from './NewsSection.module.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}
const NewsSection: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default NewsSection;
