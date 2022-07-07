import './App.css';
import { BallBox } from './components/BallBox';
import { CurrencyBox } from './components/CurrencyBox';
import { RegionBox } from './components/RegionBox';
import { RoutesBox } from './components/RoutesBox';

function App() {
  return (
    <div className="App">
      <RegionBox />
      <RoutesBox />
      <CurrencyBox />
      <BallBox />
    </div>
  );
}

export default App;
