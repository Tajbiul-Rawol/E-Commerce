import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const params = useParams();
    return (
        <div>ProductDetail {params.productId}</div>
    )
}
