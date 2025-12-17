import { Link } from "react-router";
import shoeImg from "../assets/images/S70936-8.webp";        
import { useShop } from "../Context/ShopContext";

const Card = ({product}) => {

    const { addToCart } = useShop()

    return (
        <div className="w-full sm:w-[48%] md:w-[18%]">
            <div className="relative bg-[#f5f1eb] rounded-[10px] p-6 h-[250px] flex items-center justify-center ">
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">SALE</span>
                <img src={shoeImg}
                    className="max-h-[180px] object-contain transition-transform duration-1000 hover:-scale-x-100" />
                 <span  onClick={() => addToCart(product)} className="absolute rounded-full hover:invert bottom-3 right-3 bg-white text-black text-[20px] px-3 py-1  font-bold cursor-pointer">+</span>
            </div>
            
            <div className="mt-4 text-sm">
                <p className="font-semibold">{product.title}</p>
                <p className="text-xs text-gray-500 mt-1">Available in 4 sizes</p>
                <div className="mt-2">
                    <span className="text-red-600 font-bold">{product.price}</span>
                    <span className="text-gray-400 line-through ml-2">{product.strikedPrice}</span>
                </div>
            </div>
            <Link to={`/listpage/${product.p_id}`} className="text-sm text-gray-500 my-3">View Details</Link>
        </div>
    )
}

export default Card
