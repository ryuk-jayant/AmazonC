
import './App.css';
import ProductList from './components/ProductList';
import ProductRec from './components/ProductRec';
import Itembar from './components/itembar';
import ImgCar from './components/molecules/ImgCar';
import Navbar from './components/navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Itembar/>
      <div className='relative mb-48'>
      <ImgCar/>
     <ProductRec/>
     </div>
    <ProductList/>
    </div>
  
  );
}

export default App;
