import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SecondPage from './components/SecondPage';
import Hello from './components/Hello';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/:id" element={<SecondPage />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
