import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SCZ } from './Components/SCZ';
import { LPZ } from './Components/LPZ';
import { CBBA } from './Components/CBBA';
import { BNI } from './Components/BNI';
import { CHQ } from './Components/CHQ';
import { ORU } from './Components/ORU';
import { PND } from './Components/PND';
import { PSI } from './Components/PSI';
import { TJA} from './Components/TJA';
import { DED } from './Components/ded';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SCZ/>
      <LPZ/>
      <CBBA/>
      <BNI/>
      <CHQ/>
      <ORU/>
      <PND/>
      <PSI/>
      <TJA/>
      <DED/>
    </div>
  );
}

export default App;