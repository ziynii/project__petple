import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles/main.scss';
import Header from './components/header';
import FooterNav from './components/footerNav';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route />
      </Routes>

      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
