import React, { useState, useContext } from 'react'
import { CartContext } from '../contexts/cartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';


export const Basket = () => {

    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const { getItems, clearBasket, increaseQuantity,decreaseQuantity,removeProduct } = useContext(CartContext);
    var total = 0;

    const itemTitle = {
        fontSize: '0.9rem',
        paddingTop: '2px',
        paddingBottom: '14px',
        fontWeight: 'bold'
    }

    const itemQuantity = {
        paddingLeft: '30px',
        fontWeight: 'bold'
    }

    const itemPrice = {
        paddingLeft: '5px',
        fontWeight: 'bold'
    }

    const clearCart = () => {
        clearBasket();
        total = 0;
    }

    const renderCart = () => {
        //render cart
        const cartItems = getItems();
        //calculte total
        calculateTotal(cartItems);
        console.log(cartItems)
        if (cartItems.length > 0) {
            return cartItems.map(e => (
                <>
                    <div key={e.id} style={itemTitle} >
                        <Link to={`/products/${e.id}`}>
                            {e.title}
                        </Link>
                    </div>
                    <div style={itemQuantity}>
                        {e.quantity} &nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon onClick={()=>{ increaseQuantity(e)}} icon={faPlus}/>&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faMinus} onClick={()=>{ decreaseQuantity(e)}} />&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faTrash} onClick={()=>{ removeProduct(e)}} />&nbsp;&nbsp;
                    </div>
                    <div style={itemPrice}>
                        ${e.price}
                    </div>
                </>
            ));
        } else {
            return <div>The Basket is currently empty</div>
        }
    }

    const calculateTotal = (cartItems) => {
        cartItems.forEach(e => {
            total += parseInt(e.price, 10) * parseInt(e.quantity, 10)
        });
    }

    const BasketContainer = {
        display: 'grid',
        padding: '20px',
        gridTemplateRows: '0.25fr 1fr 0.25fr',
        gridTemplateColumns: '0.5fr 1fr 0.1fr',
    }

    const BasketTable = {
        gridColumn: '1/span 3',
        gridTemplateRows: '0.25fr 1fr 0.25fr 0.25fr',
        columnGap: '20px',
        paddingLeft: '10px'
    }

    const BasketHeader = {
        display: 'grid',
        gridTemplateColumns: '1fr 0.5fr 0.5fr',
    }

    const BasketHeaderLine = {
        marginBottom: '20px',
        border: '1px solid gray'
    }

    const BasketButton = {
        padding: '3px',
        width: 'fit-content',
        borderRadius: '10%',
        backgroundColor: '#ff0000',
        color: '#fff',
        border: 'none',
        cursor: hover ? 'pointer' : 'auto'
    }

    const BasketTotal = {
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '20px',
    }

    const CheckoutButton = {
        padding: '2px',
        width: 'fit-content',
        borderRadius: '10%',
        backgroundColor: '#0594f9',
        color: '#fff',
        border: 'none',
        marginLeft: 'auto',
        cursor: hover ? 'pointer' : 'auto'
    }

    return (
        <div style={BasketContainer}>
            <h3>Shopping Basket</h3>
            <button style={CheckoutButton}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={()=>{navigate('/checkout')}}
            >
                Checkout
            </button>
            <div style={BasketTable}>
                <div style={BasketHeader}>
                    <h4>Item</h4>
                    <h4>Quantity</h4>
                    <h4>Price</h4>
                </div>
                <div style={BasketHeaderLine}>
                </div>
                <div style={BasketHeader}>
                    {renderCart()}
                </div>
                <div style={BasketHeaderLine}>
                </div>
                <div style={BasketButton}
                    onClick={() => clearCart()}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    Clear
                </div>
            </div>
            
            <div style={BasketTotal}>Total: ${total}</div>
        </div >
    )
}
