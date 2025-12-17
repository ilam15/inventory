import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const loadCart = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/cart", {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      });
      setCart(data.cartItems);
      console.log(data.cartItems);
    } catch (err) {
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product) => {
    try {
      const existing = cart.find(
        (item) => item.productId === product._id
      );

      if (existing) {
        await updateQty(existing.productId, existing.qty + 1);
        setCartOpen(true);
        return;
      }

      await axios.post(
        "http://localhost:3000/cart",
        {
          productId: product._id,
          qty: 1,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      );

      await loadCart();
      setCartOpen(true);
    } catch (error) {
      console.log(error);
      toast.error("Login to add to cart");
    }
  };

  const updateQty = async (productId, qty) => {
    if (qty < 1) return;

    await axios.put(
      "http://localhost:3000/cart",
      { productId, qty },
      {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      }
    );

    await loadCart();
  };

  const removeItem = async (productId) => {
    await axios.delete(
      "http://localhost:3000/cart",
      {
        data: { productId },
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      }
    );

    await loadCart();
  };
  const [subtotal, setSubtotal] = useState(0);
  const [savings, setSavings] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [mrpTotal, setMrpTotal] = useState(0);

  const clean = (v) =>
    Number(String(v).replace(/[^0-9.-]/g, "")) || 0;

  useEffect(() => {
    if (!cart.length) {
      setSubtotal(0);
      setSavings(0);
      setDiscount(0);
      setMrpTotal(0);
      return;
    }

    const mrp = cart.reduce(
      (t, i) => t + clean(i.strikedPrice) * i.qty,
      0
    );

    const sub = cart.reduce(
      (t, i) => t + clean(i.price) * i.qty,
      0
    );

    const savingAmount = mrp - sub;
    const disc = mrp ? ((savingAmount / mrp) * 100).toFixed(2) : 0;

    setMrpTotal(mrp.toFixed(2));
    setSubtotal(sub.toFixed(2));
    setSavings(savingAmount.toFixed(2));
    setDiscount(disc);
  }, [cart]);


  return (
    <ShopContext.Provider
      value={{
        Products,
        setProducts,
        addToCart,
        cart,
        setCart,
        cartOpen,
        setCartOpen,
        updateQty,
        removeItem,
        loadCart,
        subtotal,
        savings,
        discount,
        mrpTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
