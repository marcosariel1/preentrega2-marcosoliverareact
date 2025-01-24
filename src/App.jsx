import { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import ItemCount from './components/ItemCount'




function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting='La casa del guitarrista' />}/>

        <Route path='/category/:catid' element={<ItemListContainer greeting={'Búsqueda por categoría'} />}></Route>

        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>


      </Routes>

      <footer>
        <small>Marcos Olivera 2025</small>
      </footer>

    </BrowserRouter>

  );
}

export default App;
