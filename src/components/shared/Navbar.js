import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context 
import { CartContext } from "../../context/CartContextProvider";

// Icons
import cartIcon from "../../assets/icons/cart.svg"

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div style={{display: "flex" , justifyCountent: "space-between"}}>
            <Link to="/porducts">Products</Link>
            <div>
                <Link to="/Cart"><img src={cartIcon} alt="Cart" style={{width: "30px"}} /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;