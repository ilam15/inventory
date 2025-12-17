import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { ShopProvider } from "../Context/ShopContext"
import AddtoCart from "./AddtoCart"

const HomeLayout = () => {
  return (
    <>
      <ShopProvider>
        <Header/>
        <AddtoCart />
        <Outlet/>
        <Footer/>
      </ShopProvider>
    </>
  )
}

export default HomeLayout
