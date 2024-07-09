import { CartContext, useCart } from "../context/CartContext";
import { CartCard } from "../Components/CartCard";
import { useTitle } from "../Hooks/useTitle";
import { useContext } from "react";


export const Cart = () => {
  const { total, cartList} = useCart();
  useTitle("cart");
  

  /* const products = [{"id":1 , "name":"Boat Airdopes 181" , "price": 10, "image":"../assets/boatairdopes.jpg"},
                {"id":2 , "name":"iphone 15" , "price": 100, "image":"../assets/iphone15.jpg"}
  ] */
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1> 
          { cartList.map((product) => (
            <CartCard key={product.id} product={product}/>

          ))} 
      </section>
    </main>

    
    
  )
}
