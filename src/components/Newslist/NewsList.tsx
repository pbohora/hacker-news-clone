import React from 'react';
import Button from '../Button/Button';
import NewsListItem from './NewsListItem/NewsListItem';
import styles from './NewsList.module.css';

const NewsList: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <Button icon={true} clickHandle={alert('jello')} />
      <NewsListItem title='Hacker news is here' points={1} hide={false} comments={4} link='wwdd' />
    </div>
  );
};

export default NewsList;
