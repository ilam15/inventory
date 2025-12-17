import { useRef } from "react";
import { useShop } from "../Context/ShopContext";
import shoeImg from "../assets/images/S70936-8.webp";
import axios from "axios";

const Form = () => {
  const { Products, setProducts } = useShop();

  const title = useRef();
  const price = useRef();
  const sprice = useRef();
  const img = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const p_id = Products.length + 1;
    const data = {
      p_id,
      title: title.current.value,
      price: price.current.value,
      strikedPrice: sprice.current.value,
      img: img.current.value,
    };

    setProducts([...Products, data]);
    resetForm();

    try {
      const response = await axios.post("https://inventory-backend-2cmd.onrender.com/products", data);
      const result = await response.data;
      console.log("Posted Successfully:", result);
    } catch (error) {
      console.error("POST Error:", error);
    }
  };


  const resetForm = () => {
    p_id.current.value = "";
    title.current.value = "";
    price.current.value = "";
    sprice.current.value = "";
    img.current.value = "";
  };

  return (
    <div className="w-full bg-[#fdfaf6] flex justify-around items-center p-[55px] ">
      <div className="w-[45%]">
        <img
          src={shoeImg}
          className="h-[450px] w-[640px] object-contain transition-transform duration-700 hover:rotate-12"
          alt="shoe"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-[25px] flex flex-col justify-center items-center gap-[25px]"
      >
        <input
          type="text"
          placeholder="Shoe Name"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={title}
          required
        />

        <input
          type="text"
          placeholder="Shoe Price"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={price}
          required
        />

        <input
          type="text"
          placeholder="Shoe Striked Price"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={sprice}
          required
        />

        <input
          type="text"
          placeholder="Shoe Image URL"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={img}
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
