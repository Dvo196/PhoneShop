import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Products from './Components/Products/products';
import ProductItem from "./Components/Products/products.item"
import Footer from './Components/Footer/Footer';
import Site from './Site';
import Header from './Components/Header/Header';
import PhonesItem from './Components/Main/Phones/Phones.item';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path='/' element={<Site/>} />
            <Route  path='/Products' element={<Products/>} />
            <Route  path='/:id' element={<PhonesItem/>} />
            <Route  path='/Products/:id' element={<ProductItem/>} />


            {/* <Route  path='/Link2' element={<Link2/>} />
            <Route  path='/Products/:id' element={<ProductItem/>} />
            <Route  path='/Products' element={<Products/>} />
            <Route  path='/Lessons' element={<Lessons/>} />
            <Route  path='/Posts' element={<Posts/>} />

            <Route  path='*' element={<NotDound/>} /> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
