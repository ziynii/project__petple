import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles/main.scss';
import Header from './components/header';
import FooterNav from './components/footerNav';
import Welcome from './routes/welcome';
import { useEffect, useState } from 'react';
import Login from './routes/login';
import Join from './routes/join';
import Home from './routes/home';
import FreePosts from './routes/freePosts';
import Mypage from './routes/mypage';
import { auth } from './firebase';

function App() {
  const [showHeaderAndNav, setShowHeaderAndNav] = useState(true);
  const [username, setUsername] = useState();

  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
    }
    if (!user) {
      localStorage.removeItem('user');
    }
  });

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('user')).displayName);
  }, []);

  return (
    <BrowserRouter>
      <Header showHeaderAndNav={showHeaderAndNav} />

      <Routes>
        <Route
          path="/"
          element={<Welcome setShowHeaderAndNav={setShowHeaderAndNav} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>

      <FooterNav showHeaderAndNav={showHeaderAndNav} />
    </BrowserRouter>
  );
}

export default App;
