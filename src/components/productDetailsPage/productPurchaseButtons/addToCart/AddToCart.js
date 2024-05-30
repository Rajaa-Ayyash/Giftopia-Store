import "./AddToCart.css";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';

export default function AddToCart ({authToken,productId}) {
    async function addProductToCart(){
        try {
            const response = await axios.post(`http://localhost:6060/cart`,{
                productId: productId
              }, {
                headers: {
                  Authorization: authToken
                }
              });
              alert(response.data.message)
          } catch (error) {
           alert(error.response.data.message)
          }
    }

    return (
        <button className='add-to-cart-button' onClick={()=>addProductToCart()}>
                <div>ADD TO CARD <FaShoppingCart /></div>
        </button>
    );
};


