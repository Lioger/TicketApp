import React from 'react';
import Title from './components/title';
import Menu from './components/menu';
import AddTicketForm from './components/addTicketForm';
import EmptyInfo from './components/emptyInfo';
import TicketInfo from './components/ticketInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Title />
        <div className="main">
          <Menu />
          <Switch>
            <Route path="/addTicket" component={ AddTicketForm } />
            <Route path="/" exact component={ EmptyInfo } />
            <Route path="/:id" component={ TicketInfo } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
