import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './contexts/BlogContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

function App() {
  return (
      <BlogProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<><Header /><Home /></>} />
              <Route path="/about" element={<><Header /><About /></>} />
              <Route path="/services" element={<><Header /><Services /></>} />
              <Route path="/news" element={<><Header /><News /></>} />
              <Route path="/news/:id" element={<><Header /><BlogPost /></>} />
              <Route path="/contact" element={<><Header /><Contact /></>} />
            </Routes>
          </div>
        </Router>
      </BlogProvider>
  );
}

export default App;