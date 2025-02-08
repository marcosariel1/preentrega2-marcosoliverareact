import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';


function App() {

  return (
    <CartContextProvider >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='ROCKSTORE - La Casa del Guitarrista' />} />

          <Route path='/category/:catid' element={<ItemListContainer greeting={'Búsqueda por categoría'} />}></Route>

          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>

          <Route path='/cart' element={<CartContainer />}></Route>
        </Routes>

        <footer>
          <small>Marcos Olivera 2025</small>
        </footer>

      </BrowserRouter>
    </CartContextProvider>

  );
}
export default App;
