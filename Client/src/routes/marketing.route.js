import { Routes, Route } from "react-router-dom";
import Product from "../components/product";
import DetailProduct from "../components/details-product";
import Home from "../components/home";
import ProductCategories from "../components/product-category";
import ProductBrands from "../components/product-brand";

function Marketing() {
    return (
        <div>
            <Routes> 
               
                <Route exact path='/productdetails/:slug' element={<DetailProduct />} />
                <Route exact path='/product' element={<Product />} />
                <Route exact path='/brand/:id' element={<ProductBrands />} />
                <Route exact path='/category/:id' element={<ProductCategories />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default Marketing;