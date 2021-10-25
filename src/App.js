import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Create from './components/Create.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import BlogDetails from './components/BlogDetails';
import { NotFound } from 'http-errors';
import Update from './components/Update.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route>
              <Update path="/update" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
