import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <div>
      <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;