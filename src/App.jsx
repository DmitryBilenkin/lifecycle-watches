import TimeZoneForm from './components/TimeZoneForm/TimeZoneForm';
import ClocksView from './components/ClocksView/ClocksView';
import GrinwichTime from './components/GrinwichTime/GrinwichTime';
import { useState } from 'react';

import './App.css';

function App() {

  const [clocksData, setClocksData] = useState([]);

  const formDataArray = (formData) =>{
    setClocksData([...clocksData,formData]);
  }

  const deleteClock = (elem) => {
    setClocksData(prev => prev.filter((_,i) => i !== elem))
  }

  return (
    <div className="App">
      <GrinwichTime />
      <TimeZoneForm formDataArray={formDataArray}/>
      <ClocksView clocksData={clocksData} deleteClock={deleteClock}/>
    </div>
  );
}

export default App;
