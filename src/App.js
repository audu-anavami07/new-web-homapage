import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/navbar';

import Home from './components/pages/home'

import New from './components/pages/new'

import Popular from './components/pages/popular'

import Trending from './components/pages/trending'

import Categories from './components/pages/categories'

// import Footer from './component/layout/footer';





function App() {

  return (
      <div>
        
    <BrowserRouter>

          <Navbar />

          <Routes>

          <Route exact path="/" element={<Home />} />

          <Route path="/new" element={<New />} />

          <Route path="/popular" element={<Popular />} />

          <Route path="/trending" element={<Trending />} />

          <Route path="/categories" element={<Categories />} />

          </Routes>

{/* <Footer /> */}

        </BrowserRouter>
        {/* <h1>App</h1> */}
      </div>


  );

}



export default App;



// import logo from "./logo.svg";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import React from "react";

// import{PRODUCTS} from './products/product-data';
// import FilterableProductTable from "./products/filtrableproduttable";
// import Header from "./components/banner/banner";

// import Navbar from "./components/Navbar";
// import Services from "./pages/Services";
// import Contact from "./pages/Contacts";
// import About from "./pages/About";
// import ComponentA from "./context/ComponentA";
// import { CounterOne } from "./reducer/CounterOne";
// import { CounterTwo } from "./reducer/CounterTwo";

// export const EmailContext = React.createContext();
// export const usersContext = React.createContext();
// export const profileContext = React.createContext();

// const users = [
//   { id: 1, name: "Timi" },
//   { id: 2, name: "Ajani" },
//   { id: 3, name: "Sikira" },
// ]; 

// const profile = {
//   firstName: "Hillary",
//   lastName: "Nicholas",
//   age: 19,
// };

// function App() {
  // return (
    // <div>
      
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <CounterTwo /> */}
     {/* <EmailContext.Provider value = {'johnDoe@gmail.com'}>
          <usersContext.Provider value={users}>
           <profileContext.Provider value = {profile}>
             <ComponentA/>
             </profileContext.Provider>
          </usersContext.Provider>
       </EmailContext.Provider>  */}
  //  </div>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/about" element={<About/>}/>
    //     <Route path="/services" element={<Services/>}/>
    //     <Route path="/contact" element={<Contact/>}/>
    //   </Routes>
    // </Router>
        //  );
// }


// export default App;
