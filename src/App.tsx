import { BrowserRouter, Route, Switch  }from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvide } from './contexts/AuthContexts'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvide>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" exact component={NewRoom}/>
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvide>
    </BrowserRouter>
  );
}

export default App;