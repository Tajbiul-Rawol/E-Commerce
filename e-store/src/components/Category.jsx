import React from 'react'

const Category = ({ id, title, onCategoryClick }) => {
    return (
        <div className='cat-item' onClick={() => onCategoryClick(id)} key={id}>{title}</div>
    )
}

export default Category