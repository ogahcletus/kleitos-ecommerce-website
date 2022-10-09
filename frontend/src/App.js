
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productpage from './Pages/Productpage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Link to={"/"}>kleitos</Link>
      </header>
      <main>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/product/:slug" element={<Productpage/>} />
      </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
