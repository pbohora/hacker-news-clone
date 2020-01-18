import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import NewsListItem from './NewsListItem/NewsListItem';
import styles from './NewsList.module.css';
import { News, newsState } from '../../reducers/types';

export interface NewsProps {
  news: News[];
}

const NewsList: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className={styles.container}>
      <Button clickHandle={console.log('hello')} icon={true} />
      {news.map(singleNews => (
        <NewsListItem
          key={singleNews.id}
          title={singleNews.title}
          points={singleNews.points}
          hide={false}
          comments={singleNews.num_comments}
          link={singleNews.link}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state: newsState) => {
  console.log(state.news);
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps)(NewsList);
