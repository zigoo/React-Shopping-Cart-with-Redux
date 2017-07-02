import React from 'react';
import ProductList from './containers/ProductList.js';
import ProductBig from './containers/Productbig.js';
import ProductDesc from './containers/Productdesc.js';
import Cart from './containers/Cart.js';
import './styles/App.css';


 class App extends React.Component {
   render() {
     return (
       <div id="container">
         <div className="clearfix">
           <div className="col-md-4">
             <div className="grid__prodList">
               <ProductList />
             </div>
           </div>
           <div className="col-md-4" >
             <div className="grid__ImgBig">
               <ProductBig />
             </div>
           </div>
           <div className="col-md-3 ">
             <div className="grid__desc">
               <div id="grid__d">
                 <ProductDesc />
               </div>
               <div id="grid__cart">
                 <Cart />
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }
 }

export default App;
