import logo from './logo.svg';
import './App.css';
import InventoryItemsList from './components/InventoryItemsList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <InventoryItemsList />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
