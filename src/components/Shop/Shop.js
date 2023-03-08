import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [uniqueCart, setUniqueCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (unique) =>{
        if(!(uniqueCart.includes(unique))){
            for(const product of Products)
            if(product.id===unique){
                const newCart = [...cart, product];
                setCart(newCart);
                setUniqueCart([...uniqueCart, product.id]);
                break;
            }
        }
    }

    return (
        <div className='shop'>
            <div className='product-container'>
                {
                    Products.map(product =><Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;