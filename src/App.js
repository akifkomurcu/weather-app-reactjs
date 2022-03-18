
import './App.css';
import {CityProvider} from './Components/Context/Context';
import Vericek from './Components/Vericek';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        
    <CityProvider>
<Vericek/>
    </CityProvider>

      </header>
    </div>
  );
}

export default App;
