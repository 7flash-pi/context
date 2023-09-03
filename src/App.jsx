// import { useCounterContext } from "./contexts/CounterContext";
import './App.css'

import Heading from "./components/Heading";
import List from './components/List';
import withButton from './hoc/withButton';


function App() {
// const {greeting}=useCounterContext();

const WithbuttonList=withButton(List)

  return (
    <div className="app">
   
   <Heading />
    <WithbuttonList />
    </div>
  )
}

export default App
