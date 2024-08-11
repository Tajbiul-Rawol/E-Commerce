import React, { useState } from 'react'

export const Basket = () => {

    const [hover, setHover] = useState(false);

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
        padding: '5px',
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
        padding: '20px'
    }

    const CheckoutButton = {
        padding: '5px',
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
                    Cart Items
                </div>
                <div style={BasketHeaderLine}>
                </div>
                <div style={BasketButton}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    Clear
                </div>
                <div style={BasketTotal}>Total: $0</div>
            </div>
        </div >
    )
}
