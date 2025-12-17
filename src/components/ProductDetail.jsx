import { useParams } from "react-router";
import { useShop } from "../Context/ShopContext";
import shoeImg from "../assets/images/S70936-8.webp";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams(); 
    const { addToCart } = useShop();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(response.data); 
            } catch (err) {
                console.error("Error fetching product:", err);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <p className="p-10">Loading...</p>;

    return (
        <div className="w-full h-auto bg-transparent px-16 py-7">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-3">
                HOME • SAUCONY • {product.title}
            </p>

            <div className="grid grid-cols-2 gap-16">

                {/* LEFT IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src={shoeImg}
                        alt={product.title}
                        className="w-[600px] object-contain"
                    />
                </div>

                {/* RIGHT DETAILS */}
                <div className="space-y-5">

                    <h4 className="text-sm font-semibold tracking-wide">SAUCONY</h4>

                    <h1 className="text-2xl font-bold uppercase">
                        {product.title}
                    </h1>

                    <div className="flex text-gray-400 text-lg">
                        ★★★★☆
                    </div>

                    <h2 className="text-2xl font-bold">Rs. {product.price}</h2>

                    <p className="text-sm text-gray-500 line-through">
                        Rs. {product.strikedPrice}
                    </p>

                    {/* COLORS */}
                    <div>
                        <p className="text-sm font-semibold mb-2">Colour</p>

                        <div className="flex gap-2">
                            <img src={shoeImg} className="w-30 h-30 p-2.5 border rounded-md cursor-pointer" />
                            <img src={shoeImg} className="w-30 h-30 p-2.5 border rounded-md cursor-pointer" />
                            <img src={shoeImg} className="w-30 h-30 p-2.5 border rounded-md cursor-pointer" />
                        </div>

                        <p className="text-xs mt-2 underline cursor-pointer">
                            View more colours
                        </p>
                    </div>

                    {/* SIZES */}
                    <div>
                        <p className="text-sm font-semibold mb-3">Size</p>

                        <div className="grid grid-cols-6 gap-2">
                            {["UK 4","UK 5","UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"].map((size) => (
                                <button
                                    key={size}
                                    className="border py-2 text-sm rounded-md hover:border-black transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <button className="w-full border py-2 mt-4 text-sm font-medium">
                            NOT SURE? USE OUR SIZE FINDER
                        </button>
                    </div>

                    {/* ADD TO CART */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => addToCart({ ...product, qty: 1 })}
                            className="flex-1 bg-black text-white py-3 rounded-[5px] uppercase tracking-wide font-semibold hover:opacity-90 transition"
                        >
                            Add To Cart →
                        </button>
                    </div>

                    {/* FEATURES */}
                    <div className="grid grid-cols-4 text-center mt-8 text-xs font-medium text-gray-600">
                        <div>✔ FULLY AUTHENTIC</div>
                        <div>🆕 NEW & UNUSED</div>
                        <div>↩ EASY RETURNS</div>
                        <div>💳 NO HIDDEN FEES</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
