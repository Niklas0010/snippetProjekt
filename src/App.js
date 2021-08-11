import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from './components/navigation/Navigation';
import { LoginPage } from './pages/login/LoginPage';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>        

      </Switch>
    </Router>
  );
}

export default App;