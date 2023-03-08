import React from 'react';
import './Product.css';

const Product = ({product, addToCart}) => {
    const {name, img, id, price} = product;
    return (
        <div className='product'>
            <img src={img} alt='lib'/>
            <h1 className='product-name'>{name}</h1>
            <h3 className='product-price'>Price: {price}</h3>
            <button onClick={()=>addToCart(id)}>ADD TO CART</button>
        </div>
    );
};

export default Product;