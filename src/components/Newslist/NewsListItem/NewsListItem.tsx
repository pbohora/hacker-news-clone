import React from 'react';
import styles from './NewsListItem.module.css';

interface Props {
  title: string;
  points: number;
  hide: boolean;
  comments: number;
  link: string;
}

const NewsListItem: React.FC<Props> = ({ title, points, hide, comments, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.newsItem__title}>
        <p>{title}</p>
        <p>({link})</p>
      </div>
      <div className={styles.newsItem__Subsection}>
        <p>{points} points</p>
        <p>
          <a href=''>hide</a>
        </p>
        <p>
          <a href=''>{comments} comments</a>
        </p>
      </div>
    </div>
  );
};

export default NewsListItem;
