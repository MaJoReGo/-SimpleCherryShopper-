import { Home } from '../src/Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProductDetails } from '../src/Pages/ProductDetails'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

  return (
    <div className='overflow-hidden'>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products/:id' element={<ProductDetails />}/>
      </Routes>
    <Sidebar />
    <Footer />
    </Router>
    </div>
  );
};
export default App;