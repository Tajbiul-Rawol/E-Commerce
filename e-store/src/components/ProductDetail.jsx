import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/api';
import { CartContext } from '../contexts/cartContext';

export const ProductDetail = () => {
    const [product, setProduct] = useState({ message: '', data: {} });
    const { id, title, price } = product.data;
    const params = useParams();
    const { addProduct } = useContext(CartContext);
    useEffect(() => {
        const getProductbyIdData = async () => {
            const responseObject = await getProductById(params.productId);
            setProduct(responseObject);
            console.log(product.data);
        }
        getProductbyIdData();
    }, [params.productId]);

    const createMarkup = () => {
        return { __html: product.data.description };
    }

    return (
        <article>
            <div className='category-product-title'>
                {product.data.title}
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`/assets/${product.data.image}`} alt={product.data.title} />
                </div>
            </figure>

            <aside className='category-product-description'>
                {product.data?.specs?.dimensions && <div className='category-product-info-dimension'>
                    <h3>Dimensions</h3>
                    <label htmlFor="">{product.data?.specs?.dimensions}</label>
                </div>}
                {product.data.specs?.capacity &&
                    <div className='category-product-info-capacity'>
                        <h3>Capacity</h3>
                        <label htmlFor="">{product.data.specs.capacity}</label>
                    </div>
                }
                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {product.data.features?.map((f) => {
                            return <li key={f} >{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound; {product.data.price}
                </div>
                <div className='category-product-info-stock'>
                    <label> stock level:{product.data.stock}</label>
                    <label>Free Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button className='submitButton' onClick={() => addProduct({ id, title, price })}>Add to basket</button>
                </div>
            </aside>

            <div>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
        </article>
    )
}
