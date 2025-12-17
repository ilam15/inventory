import searchIcon from "../assets/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import userIcon from "../assets/icons/for_you_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import packageIcon from "../assets/icons/manage_search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import cartIcon from "../assets/icons/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import { useShop } from "../Context/ShopContext";
import { Link } from "react-router";

const Header = () => {

    const {setCartOpen} = useShop()

    return (
        <>
            <div className="sticky top-0 z-50 backdrop-blur-[7px]">
            <div className="w-full overflow-hidden bg-black ">
                <div className="flex text-white text-xs whitespace-nowrap animate-marquee px-6 py-2">
                    <span className="mx-12">Orders ₹300+ Ship Free</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Shop Now. Pay it in 4 | Clearpay</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Guaranteed Authenticity</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Next Day Shipping On Select Sizes</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Orders ₹300+ Ship Free</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Shop Now. Pay it in 4 | Clearpay</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Guaranteed Authenticity</span>
                    <span className="mx-12 font-bold">.</span>
                    <span className="mx-12">Next Day Shipping On Select Sizes</span>
                    <span className="mx-12 font-bold">.</span>
                </div>
            </div>

            <div className="w-full flex items-center justify-between px-10 py-[7px] border-b font-mono">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md w-64">
                    <img src={searchIcon} alt="Search" className="w-7 h-7 invert" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none text-sm w-full"
                    />
                </div>
                <Link to='/' className="text-[28px] hover:scale-[1.1] transition duration-300 font-bold tracking-wide">
                     KICK GAME
                </Link>
                <div className="flex items-center gap-6 text-xl">
                    <Link to='/form'>
                    <img src={userIcon} alt="User" className="w-7 h-7 invert cursor-pointer hover:rotate-[15deg] hover:scale-[1.2] transition duration-300" />
                    </Link>
                    <img src={packageIcon} alt="Package" className="w-7 h-7 invert cursor-pointer hover:rotate-[15deg] hover:scale-[1.2] transition duration-300" />

                    <img src={cartIcon} alt="Cart"  onClick={() => setCartOpen(true)} className="w-7 h-7 invert cursor-pointer hover:rotate-[15deg] hover:scale-[1.2] transition duration-300" />
                </div>
            </div>
            </div>
            <div className="flex justify-center gap-10 py-4 mb-1 font-semibold text-sm tracking-wide ">
                <Link to='/listpage' className="hover:underline transition duration-700 hover:scale-110">NEW ARRIVALS</Link>
                <Link to='/listpage' className="hover:underline transition duration-700 hover:scale-110">BEST SELLERS</Link>
                <Link to='/listpage' className="hover:underline transition duration-700 hover:scale-110">SNEAKERS</Link>
                <Link to='/listpage' className="hover:underline transition duration-700 hover:scale-110">APPAREL</Link>
                <Link to='/myorders' className="hover:underline transition duration-700 hover:scale-110">MY ORDERS</Link>
            </div>
        </>
    );
};

export default Header;
