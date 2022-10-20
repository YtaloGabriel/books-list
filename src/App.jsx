import './App.css';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Header />
        <Books />
        <Footer />
      </GlobalStorage>
    </div>
  );
}

export default App;
