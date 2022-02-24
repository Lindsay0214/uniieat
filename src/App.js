import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Nearby from './pages/nearby'
import Top from './pages/top'
import Recommend from './pages/recommend'

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nearby" element={<Nearby />} />
          <Route path="top" element={<Top />} />
          <Route path="recommend" element={<Recommend />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
}

export default App;