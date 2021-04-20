
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
     

      <Router>

      

        <Switch>

          <Route path="/" exact >
            <Header  />
            <TinderCards />
            <SwipeButtons />
          </Route>

          <Route path="/chat" exact >
            <Header backButton='/' />
            <Chats />
          </Route>

          <Route path="/chat/:person"  >
            <Header backButton='/chat' />
            <ChatScreen />

          </Route>

        </Switch>
      </Router>

      
        {/* Tinder cards */}
        {/* buttons below tinder cards */}

        {/* chat screen */}
      

    </div>
  );
}

export default App;
