import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';

import { productsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image , title , description , price , category } = product;

    return (
        <div>
            <img src={image} />
            <p>{description}</p>
            <p> <span>Category: </span>{category}</p>
            <div>
                <span>{price} $</span>
                <Link to="/products">Back to Shop </Link>
            </div>
        </div>
    );
};

export default ProductDetails;