import './App.css';
import Navigation from './components/navigation'
import Background from './components/background'
import Listing from './components/listing'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Background />
      <Listing />
    </div>
  );
}

export default App;