
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cart } from "../Pages/Cart";

export const AllRoutes = () => {
  return (
    <div className="" >
        <Routes>
            <Route path = "/" element={<Home />} >Home</Route>
            <Route path = "cart" element={<Cart />} >cart</Route>
        </Routes>
    </div>
  )
}
