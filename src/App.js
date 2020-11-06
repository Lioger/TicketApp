import React from 'react';
import Title from './components/title';
import Menu from './components/menu';
import TicketInfo from './components/ticketInfo';

const App = () => {
  return (
    <div className="App">
      <Title />
      <div className="main">
        <Menu />
        <TicketInfo />
      </div>
    </div>
  );
}

export default App;
