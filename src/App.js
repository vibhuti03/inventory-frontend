import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import InventoryItemsList from './components/InventoryItemsList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <Router>
    <div>
      <HeaderComponent />
      <div className="container">
      <Routes>
        <Route path='/' element={<InventoryItemsList />} />
        <Route path='/all-inventory-items' element={<InventoryItemsList />} />
      </Routes>
      </div>
      <FooterComponent />
    </div>
    </Router>
  );
}

export default App;
