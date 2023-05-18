import './App.scss';
import Header from './components/header.js';
import Hero from './components/hero';
import videos from './assets/data/video-details.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero videos={videos} />
    </div>
  );
}

export default App;
