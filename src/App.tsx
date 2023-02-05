import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation';
import AboutPage from './pages/about-page';
import ProductsPage from './pages/products-page';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<ProductsPage />} />
      <Route path='/about' element={<AboutPage />} />       
    </Routes>
    </>
  )
}

export default App;
