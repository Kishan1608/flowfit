import React from 'react'
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Link className='link'>
        <div className="productCard">
            <img src={item.imageURL} alt="" />
            <p>{item.title}</p>
        </div>
    </Link>
  )
}

export default ProductCard