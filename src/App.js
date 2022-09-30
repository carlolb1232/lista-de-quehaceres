import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {

  const [chores, setChores] = useState([]);

  const getChores = (choresArray)=>{
    setChores([...chores, choresArray])
  }

  return (
    <div className="App">
      <Form onChores={getChores}/>
      {
        chores.map((e,idx)=>{
          return <List aChore={e} id={idx} key={idx}/>
        })
      }
    </div>
  );
}

export default App;
