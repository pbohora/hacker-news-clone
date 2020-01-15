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
  return async (dispatch: (arg0: { type: string; data: any }) => void) => {
    const news = await newsService.getFrontNews();
    console.log(news);
    dispatch({
      type: INIT_NEWS,
      data: news,
    });
  };
};

export default newsReducer;
