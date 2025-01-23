import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import ScrollText from './Components/ScrollText';
import BackgroundMusic from './Components/BackgroundMusic';

function App() {
  return (
    <div className="App">
      <ScrollText/>
      <BackgroundMusic/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
