import './App.css';
import { BallBox } from './components/BallBox';
import { CurrencyBox } from './components/CurrencyBox';
import { MainBox } from './components/MainBox';
import { RegionBox } from './components/RegionBox';

function App() {
  return (
    <div className="App">
      <RegionBox />
      <MainBox />
      <CurrencyBox />
      <BallBox />
    </div>
  );
}

export default App;
