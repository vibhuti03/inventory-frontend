import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import ListItemsComponent from './components/ListItemsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'
import AddItemComponent from './components/AddItemComponent';
import UpdateItemComponent from './components/UpdateItemComponent';

function App() {
  return (
    <Router>
    <div>
      <HeaderComponent />
      <div className="container">
      <Routes>
        <Route path='/' exact element={<ListItemsComponent />} />
        <Route path='/all-inventory-items' element={<ListItemsComponent />} />
        <Route path='/add-inventory-items' element={<AddItemComponent />} />
        <Route path='/update-item/:id' element={<UpdateItemComponent />} />
      </Routes>
      </div>
      <FooterComponent />
    </div>
    </Router>
  );
}

export default App;
