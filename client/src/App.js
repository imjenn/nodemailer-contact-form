import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ContactForm from './views/ContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <ContactForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
