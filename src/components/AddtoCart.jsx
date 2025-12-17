import { useShop } from "../Context/ShopContext";
import delico from "../assets/payicons/delivery.svg";
import icondel from "../assets/payicons/Icon-Wrapper_67b1daa4-bb38-4ede-a791-58577c76324f.svg";
import shoeImg from "../assets/images/S70936-8.webp";
import { Link } from "react-router";


const AddtoCart = () => {

  const { 
    cart, 
    cartOpen,
     setCartOpen,
      updateQty, 
      removeItem, 
      subtotal, 
      savings, 
      discount,
      mrpTotal
   } = useShop();


  return (
    <>

      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />


      <div
        className={`fixed top-0 right-0 h-full w-[540px] bg-[#f9f7f2] z-50 transition-transform duration-500 ${cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">YOUR CART [{cart.length}]</h2>
          <button onClick={() => setCartOpen(false)} className="text-xl cursor-pointer">✕</button>
        </div>

        <div className="p-5 flex flex-col gap-8 overflow-y-auto h-[66%]">
          {cart.map((item) => (
            <div key={item.p_id} className="flex gap-6">

              <div className="w-[180px] h-[180px] bg-[#f3f1ed] rounded-2xl flex items-center justify-center">
                <img
                  src={shoeImg}
                  className="w-[120px] object-contain"
                />
              </div>

              <div className="flex-1 scale-90">

                <h2 className="font-semibold text-[17px] leading-snug">
                  {item.title}
                </h2>

                <p className="text-[14px] text-gray-500 mt-1">
                  Size: {item.size}
                </p>

                <span className="inline-block bg-red-600 text-white text-[12px] font-bold px-3 py-[5px] rounded mt-3">
                  ON SALE PRICE
                </span>

                <div className="flex items-center gap-3 mt-2">
                  <span className="text-red-600 font-bold text-[18px]">
                    {item.price}
                  </span>
                  <span className="text-red-600 text-[12px]">
                    (-{discount}%)
                  </span>
                  <span className="text-gray-400 line-through text-[14px]">
                    {item.strikedPrice}
                  </span>
                </div>

                <div className="flex items-center gap-6 mt-4">

                  <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                    <button
                      onClick={() => updateQty(item.productId, item.qty - 1)}
                      className="px-4 py-2 text-lg"
                    >–</button>

                    <span className="px-6 py-2 text-[15px]">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => updateQty(item.productId, item.qty + 1)}
                      className="px-4 py-2 text-lg"
                    >+</button>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-xl hover:invert hover:scale-110"
                  >
                    🗑
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 border-t bg-[#f9f7f2] space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{mrpTotal}</span>
          </div>

          <div className="flex justify-between text-green-600 text-sm">
            <span>Savings</span>
            <span>-₹{Math.abs(savings)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t mt-6 mb-0 bg-[#f9f7f2] space-x-2 ">
            <span>ORDER TOTAL</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-xs">
            <span>Shipping and taxes calculated at checkout.</span>
          </div>

          <Link to="/myorders">
          <div className="w-full mt-3 bg-black text-white py-3 rounded-md font-semibold cursor-pointer hover:invert  hover:border-2 hover:scale-0.5 transition duration-300">
            CHECKOUT →
          </div>
          </Link>

          <div className="flex justify-center text-xs mx-2.5 gap-3 ">
            <img src={delico} className="h-4 w-4" /><span>Free Shipping over £300</span>
            <img src={icondel} className="h-4 w-4" /><span>Guaranteed Authenticity</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
