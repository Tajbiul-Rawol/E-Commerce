import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../api/api';
import CatgoryProduct from './CategoryProduct';


const Category = ({ id, title, onCategoryClick }) => {

    const { categoryId } = useParams();
    const [products, setProducts] = useState({ message: '', data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        }
        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map(p =>
            <CatgoryProduct key={p.id} {...p}>{p.title}</CatgoryProduct>
        )
    }

    return (
        <div>
            <h1>Products</h1>
            {products.message && <div>Error: {products.message}</div>}
            {products && renderProducts()}
        </div>
    )
}

export default Category