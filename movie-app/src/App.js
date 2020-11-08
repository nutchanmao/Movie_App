
import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './components/MainMovie';
import CreateCompo from './components/CreateCompo';



function App() {
  return (  
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/home" component={Main}></Route>

        </Switch>
    </BrowserRouter>
  );
}


export default App;
