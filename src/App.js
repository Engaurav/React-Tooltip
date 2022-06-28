import './App.css';
import Button from './components/Button';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip>
        <Button/>
      </Tooltip>
    </div>
  );
}

export default App;
