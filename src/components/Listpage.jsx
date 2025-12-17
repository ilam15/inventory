import arrowRig from "../assets/icons/arrow_right_alt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
import { useShop } from "../Context/ShopContext";
import Banner from "../assets/images/ACCESSORIES_9d5d882c-f58b-49fc-8630-722aecd0ce09.webp"
import Card from "./Card";

const Listpage = () => {

  const { Products } = useShop();
  
  return (
    <>
    <div className="relative w-full h-[270px] font-mono">
      <img src={Banner} className=" absolute w-full inset-0 h-[250px] object-cover mb-4" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-center pb-10 text-white">New Arrivals</h1>
     </div>
    <div className="w-full bg-[#fdfaf6] px-12 pt-1 pb-16 ">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">JUST DROPPED</h2>

                <button
                    className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm hover:bg-black/60 ">
                    SHOP THE COLLECTION <img src={arrowRig}
                        className="w-5 h-5 object-contain"/>
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-around">
                {Products.map((product)=><Card key={product.p_id} product={product}/>) }
            </div>
    </div>
    </>
  )
}

export default Listpage
