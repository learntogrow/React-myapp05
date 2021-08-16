import React from 'react';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>PaperFry</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList/>
                </div>
                <div className="col-md-4">
                    <Cart/>
                </div>
            </div>

            <footer>
                <small>
                   Powered by React and Redux.
                </small>
            </footer>
        </div>
    );
}

export default App;
