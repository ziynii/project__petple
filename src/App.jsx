import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles/main.scss';
import Header from './components/header';
import FooterNav from './components/footerNav';
import Welcome from './routes/welcome';
import { useState } from 'react';
import Login from './routes/login';
import Join from './routes/join';

function App() {
  const [showHeaderAndNav, setShowHeaderAndNav] = useState(false);

  return (
    <BrowserRouter>
      <Header showHeaderAndNav={showHeaderAndNav} />

      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>

      <FooterNav showHeaderAndNav={showHeaderAndNav} />
    </BrowserRouter>
  );
}

export default App;
