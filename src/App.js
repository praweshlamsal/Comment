import logo from './logo.svg';
import './App.css';
import CustomInput from './CustomInput/CustomInput';

function App() {
  return (
    <div className="App">
      <CustomInput fontSize={20} maxwidth={200} />
    </div>
  );
}

export default App;
