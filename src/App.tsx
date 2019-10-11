import React from 'react';
import Navbar from './components/Navbar/Navbarcontainer';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import SubNewsSection from './components/Newslist/NewsList';
import NewsList from './components/Newslist/NewsList';

const App: React.FC = () => {
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

export default App;
