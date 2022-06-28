import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <h2>This is React Tooltip</h2>
      <Input/>
      <Tooltip>
        <Button/>
      </Tooltip>
    </div>
  );
}

export default App;
