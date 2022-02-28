import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watched from "./Components/Watched";
import WatchList from "./Components/WatchList";
import Header from "./Components/Header";
import Add from "./Components/Add";
import {GlobalProvider} from "./Context/GlobalState"
import './App.css';

function App() {
  return (
    <div >
      <GlobalProvider>
        <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={WatchList}/>
          <Route path="/add" component={Add}/>
          <Route path="/watched" component={Watched}/>
        </Switch>
      </Router>
    </GlobalProvider>
    </div>
  );
}

export default App;
