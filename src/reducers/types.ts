export interface News {
  created_at: string;
  title: string;
  author: string;
  points: number;
  num_comments: number;
}

export interface newsState {
  news: News[];
}

export const INIT_NEWS = 'INIT_NEWS';

interface initialNews {
  type: typeof INIT_NEWS;
  data: News;
}

export type newsActionTypes = initialNews;
