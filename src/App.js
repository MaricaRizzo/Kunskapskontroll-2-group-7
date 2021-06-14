import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Events from './components/Events';
import Buy from './components/Buy';
import Tickets from './components/Tickets';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Events}/>
        <Route exact path='/events:id' component={Buy}/>
        <Route path='/confirm:id' component={Tickets}/>
        {/* Hur ska vi länka till "bokningsbekräftelsen?" */}
      </Switch>
    </div>
  );
}

export default App;