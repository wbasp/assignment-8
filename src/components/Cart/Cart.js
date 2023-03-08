import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div className='cart-container'>
            {
                cart.map(product =><h1 key={product.id}>{product.name}</h1>)
            }
        </div>
    );
};

export default Cart;


// key={product.id}