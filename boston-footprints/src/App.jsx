import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Play from './components/Play';
import Food from './components/Food';
import Home from './components/Home';
import SubscriptionModal from './components/SubscriptionModal';
import CreatePost from './components/CreatePost';

function App() {

  const [page, setPage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function handlePageLoad() {
      const newPage = document.location.hash || '#/';
      console.log("New Page:", newPage); // Debugging
      setPage(newPage);
    }
    handlePageLoad();

    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    }
  }, []);

  let PageComponent;
  switch (page) {
    case '#/':
      PageComponent = Home;
      break;
    case '#/play':
      PageComponent = Play;
      break;
    case '#/food':
      PageComponent = Food;
      break;
    case '#/create':
      PageComponent = CreatePost;
      break;
    default:
      PageComponent = Home; // Default case
  }

  return (
    <div className='app'>
      <Header setPage={setPage} setShowModal={setShowModal} />
      <SubscriptionModal showModal={showModal} setShowModal={setShowModal} />
      <PageComponent />
      <Footer />
    </div>
  )
}

export default App
