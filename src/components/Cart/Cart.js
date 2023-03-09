import React from 'react';
import './Cart.css';

const Cart = ({cart, emptyCart}) => {
    let randomProductIndex;
    const chooseProduct = () =>{
        const cl = cart.length;
        if(cl){
            randomProductIndex = Math.floor(Math.random()*cl);
            document.getElementById('choosen-one').innerText = '';
            document.getElementById('choosen-one').innerText = cart[randomProductIndex].name;
        }
    }

    return (
        <div className='cart'>
            <h1>Selected Animals</h1>
            {
                cart.map(product =><h2 className='cart-product' key={product.id}>{product.name}</h2>)
            }
            <button onClick={()=>chooseProduct()}>choose one for me</button>
            <h2 id='choosen-one' className='cart-product'></h2>
            <button onClick={()=>emptyCart()}>choose again</button>
        </div>
    );
};

export default Cart;
