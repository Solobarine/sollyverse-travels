import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './views/Landing';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
