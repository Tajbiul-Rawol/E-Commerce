import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';

const CatgoryProduct = ({ id, title, image, specs, features, price, stock }) => {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const { addProduct } = cartContext;



    return (
        <article>
            <div className='category-product-title'>
                <Link to={`/products/${id}`}>{title}</Link>
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`/assets/${image}`} alt={title} />
                </div>
            </figure>

            <aside className='category-product-description'>
                <div className='category-product-info-dimension'>
                    <h3>Dimensions</h3>
                    <label htmlFor="">{specs.dimensions}</label>
                </div>
                {specs.capacity &&
                    <div className='category-product-info-capacity'>
                        <h3>Capacity</h3>
                        <label htmlFor="">{specs.capacity}</label>
                    </div>
                }
                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {features?.map((f) => {
                            return <li key={f} >{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound; {price}
                </div>
                <div className='category-product-info-stock'>
                    <label> stock level:{stock}</label>
                    <label>Free Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button className='submitButton' onClick={() => { navigate(`/products/${id}`) }}>View Product</button>
                    <button className='submitButton' onClick={() => addProduct({ id, title, price })}>Add to basket</button>
                </div>
            </aside>
        </article>
    )
}

export default CatgoryProduct;