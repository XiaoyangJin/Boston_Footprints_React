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
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Button, Form } from 'react-bootstrap';

function App() {

  const [page, setPage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const user = useUser();
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState('');
  console.log(email);

  async function magicLinkLogin() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email
    });

    if (error) {
      alert("Error communicating with supabase, make sure to use a real email address!");
      console.log(error);
    } else {
      alert("Check your email for a supabase Magic Link to log in!");
    }
  }

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
      {user === null ?
        <>
          <h1>Welcome to Travel Footprints</h1>
          <Form className='login__form'>
            <Form.Group className='login__form-email'>
              <Form.Label className='login__label'>Please enter an email to sign in: </Form.Label>
              <Form.Control type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Button className='login__button' variant='primary' onClick={() => magicLinkLogin()}>
              Get valid link
            </Button>
          </Form>
          <a href='https://github.com/XiaoyangJin/Boston_Footprints_React.git'>Feel free to check a demo of this website!</a>
        </>
        :
        <>
          <Header setPage={setPage} setShowModal={setShowModal} />
          <SubscriptionModal showModal={showModal} setShowModal={setShowModal} />
          <PageComponent />
          <Footer />
        </>}

    </div>
  )
}

export default App
