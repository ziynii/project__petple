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
import Detail from './routes/detail';
import Community from './routes/community';
import CommunityChat from './routes/communityChat';

function App() {
  const [showHeaderAndNav, setShowHeaderAndNav] = useState(true);
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setIsUser(JSON.parse(localStorage.getItem('user')));
      } else if (!user) {
        localStorage.removeItem('user');
				setIsUser(null)
      }
    });
  }, []);

  console.log(isUser);

  return (
    <BrowserRouter>
      <Header showHeaderAndNav={showHeaderAndNav} />

      <Routes>
        <Route
          path="/"
          element={
            <Welcome setShowHeaderAndNav={setShowHeaderAndNav} user={isUser} />
          }
        />
        <Route
          path="/login"
          element={<Login setShowHeaderAndNav={setShowHeaderAndNav} />}
        />
        <Route
          path="/join"
          element={<Join setShowHeaderAndNav={setShowHeaderAndNav} />}
        />
        <Route
          path="/home"
          element={
            <Home setShowHeaderAndNav={setShowHeaderAndNav} user={isUser} />
          }
        />
        <Route path="/free" element={<FreePosts user={isUser} />} />
        <Route path="/mypage" element={<Mypage user={isUser} />} />
        <Route path="/detail/:id" element={<Detail user={isUser} />} />
        <Route path="/community" element={<Community user={isUser} />} />
        <Route
          path="/community/:id"
          element={<CommunityChat user={isUser} />}
        />
      </Routes>

      <FooterNav showHeaderAndNav={showHeaderAndNav} />
    </BrowserRouter>
  );
}

export default App;
