import './styles/global.css';
import { Habits } from './components/Habits';

function App() {
  return (
    <div>
      <Habits completed={3}/>
      <Habits completed={10}/>
      <Habits completed={20}/>
      <Habits completed={30}/>
    </div>
  )
}

export default App
