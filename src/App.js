import './App.css';
import CoopViewComponent from './components/CoopViewComponent';
import ProducerViewComponent from './components/ProducerViewComponent';
import BuyerSheet from './components/BuyerSheet';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          Welcome to the demo!
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/coop-view">Coop View </Link>
            </li>
            <li>
              <Link to="/producer-view">Producer View</Link>
            </li>
            <li>
              <Link to="/producer-sell">Producer - Sell</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/coop-view" component={CoopViewComponent} />
          <Route path="/producer-view" component={ProducerViewComponent} />
          <Route path="/producer-sell" component={BuyerSheet} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
