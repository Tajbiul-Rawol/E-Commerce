import React from 'react'

const CatgoryProduct = ({ title, image, specs, features, price, stock }) => {
    return (
        <article>
            <div className='category-product-title'>
                {title}
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`./assets/${image}`} alt={title} />
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
                            return <li key={f}>{f}</li>
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
                    <button className='submitButton'>View Product</button>
                    <button className='submitButton'>Add to basket</button>
                </div>
            </aside>
        </article>
    )
}

export default CatgoryProduct;