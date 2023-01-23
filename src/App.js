import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import SecondPage from './components/SecondPage';
import Hello from './components/Hello';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/home" render={() => <Home />} />
        <Route path="/4" render={() => <SecondPage number={4} />} />
        <Route path="/hello" render={() => <Hello word={"hello"} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
