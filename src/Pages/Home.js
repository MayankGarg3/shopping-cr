
import { ProductCard } from "../Components/ProductCard";
import { useTitle } from "../Hooks/useTitle";

export const Home = () => {
  useTitle("Home");
  
  const products = [
    {"id":1 , "name":"Boat Airdopes 181" , "price": 10, "image":"../assets/boatairdopes.jpg"},
    {"id":2 , "name":"iphone 15" , "price": 100, "image":"../assets/iphone15.jpg"},
    {"id":3 , "name":"Sony Bravia" , "price": 80, "image":"../assets/sonytv.jpg"},
    {"id":4 , "name":"Playstaion 5" , "price": 20, "image":"../assets/playstation.jpg"},
    {"id":5 , "name":"Yamaha Fascino" , "price": 80, "image":"../assets/Fascino.jpg"},
    {"id":6 , "name":"TATA Nexon" , "price": 12000, "image":"../assets/nexon.jpg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
