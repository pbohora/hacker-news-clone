import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbarcontainer';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import SubNewsSection from './components/Newslist/NewsList';
import NewsList from './components/Newslist/NewsList';
import { initialNews } from './reducers/newsReducer';

interface NewsPropsInterface {
  initialNews: () => void;
}
const App: React.FC<NewsPropsInterface> = ({ initialNews }) => {
  useEffect(() => {
    initialNews();
  });

  return (
    <div className='App'>
      <Navbar />
      <NewsSection>
        <NewsList />
      </NewsSection>
      <Footer />
    </div>
  );
};

const mapDispatchProps = {
  initialNews,
};

export default connect(
  null,
  mapDispatchProps
)(App);
