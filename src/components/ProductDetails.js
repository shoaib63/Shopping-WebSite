import React,{useContext} from 'react';
import { Link ,useParams } from 'react-router-dom';

// Context 
import { productsContext } from '../context/ProductContextProvider';

// Helper 
import { shorten } from '../helper/functions';

// Styles
import styles from "./ProductDetails.module.css"


const ProductDetails = (props) => {
    const params = useParams()
    const id = params.id; 
    const data = useContext(productsContext)
    console.log(data);
    const product = data[id - 1] ; 
    const {image , title , description , category , price } = product; 

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.textContainer}>
                <h3>{shorten(title)}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;