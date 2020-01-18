import { Dispatch } from 'redux';
import newsService from '../services/news';
import { newsActionTypes, INIT_NEWS } from './types';

const newsReducer = (state = [], action: newsActionTypes) => {
  switch (action.type) {
    case INIT_NEWS:
      return action.data;

    default:
      return state;
  }
};

export const initialNews = () => {
  return async (dispatch: Dispatch) => {
    const news = await newsService.getFrontNews();
    console.log(news.hits);
    dispatch({
      type: INIT_NEWS,
      data: news.hits,
    });
  };
};

export default newsReducer;
