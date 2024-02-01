import { Routes, Route } from "react-router-dom";
import { LoadProvider } from './context/LoadContext';
import { Sucursales, Franquicias, Home, Nosotros, Productos, Ofertas } from './pages/index';

function App() {


  return (
    <>
      <LoadProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/productos/:familia' element={<Productos />}/>

          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/franquicias' element={<Franquicias />}/>
          <Route path='/sucursales' element={<Sucursales />}/>
          <Route path='/volante' element={<Ofertas />}/>
        </Routes>
      </LoadProvider>    
    </>
  )
}

export default App
