import shoeImg from "../assets/images/S70936-8.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});

  const token = sessionStorage.getItem("token");

  // Load orders (userId comes from JWT automatically)
  const loadOrders = async () => {
    try {
      const { data } = await axios.get("https://inventory-backend-2cmd.onrender.com/order", {
        headers: { Authorization: token }
      });
      setOrders(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // Handle inline edit
  const handleChange = (orderId, field, value) => {
    setUpdatedFields(prev => ({
      ...prev,
      [orderId]: {
        ...prev[orderId],
        [field]: value
      }
    }));
  };

  // Update order
  const handleSave = async (orderId) => {
    try {
      await axios.put(
        `https://inventory-backend-2cmd.onrender.com/order/${orderId}`,
        updatedFields[orderId],
        { headers: { Authorization: token } }
      );

      toast.success("Order updated");
      setEditingOrder(null);
      loadOrders();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update order");
    }
  };

  // Delete order
  const handleDelete = async (orderId) => {
    if (!window.confirm("Delete this order?")) return;

    try {
      await axios.delete(
        `https://inventory-backend-2cmd.onrender.com/order/${orderId}`,
        { headers: { Authorization: token } }
      );

      toast.success("Order deleted");
      loadOrders();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete order");
    }
  };


  function addDecimal(value) {
    const s = value.toString();
    return s.length > 2
      ? s.slice(0, -2) + "." + s.slice(-2)
      : "0." + s.padStart(2, "0");
  }

  //give me sum of all products cost in the cart



  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      {orders.length === 0 && (
        <p className="text-center py-20 text-gray-500">
          No orders found
        </p>
      )}

      {orders.map(order => (
        <div
          key={order._id}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 border-b border-gray-300"
        >
          {/* LEFT SIDE */}
          <div className="px-6 lg:px-12 py-10 border-r border-gray-200">

            {/* Alert */}
            <div className="flex gap-4 items-start mb-8">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border">
                !
              </div>
              <div>
                <p className="font-medium uppercase text-sm">
                  Order Status
                </p>
                <p className="text-sm text-gray-500">
                  {order.deliveryStatus}
                </p>
              </div>
            </div>

            {/* Column Headings */}
            <div className="flex justify-between text-sm text-gray-500 border-b pb-2 mb-6">
              <span>Description</span>
              <span>Quantity</span>
            </div>

            {/* Products */}
            {order.cart_id?.products.map(item => (
              <div
                key={item._id}
                className="flex justify-between items-start py-6 border-b"
              >
                <div className="flex gap-4">
                  <img
                    src={shoeImg}
                    alt={item.p_id.title}
                    className="w-16 h-16 rounded bg-white object-cover"
                  />

                  <div>
                    <p className="font-medium text-sm">
                      {item.p_id.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Price: ₹{item.p_id.price}
                    </p>
                  </div>
                </div>

                <span className="text-sm">
                  {item.qty}
                </span>
              </div>
            ))}

            {/* Footer Actions */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => handleDelete(order._id)}
                className="text-sm underline text-red-600"
              >
                Delete order
              </button>

              {editingOrder === order._id ? (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleSave(order._id)}
                    className="bg-black text-white px-6 py-3 text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingOrder(null)}
                    className="text-sm underline"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setEditingOrder(order._id)}
                  className="bg-black text-white px-6 py-3 text-sm"
                >
                  Edit Order
                </button>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="px-6 lg:px-12 py-10">
            <h3 className="text-sm font-medium mb-6">
              Order Summary
            </h3>

            {/* Summary Items */}
            <div className="space-y-4 mb-8">
              {order.cart_id?.products.map(item => (
                <div key={item._id} className="flex justify-between text-sm">
                  <div className="flex gap-3">
                    <div className="relative">
                      <img
                        src={shoeImg}
                        className="w-12 h-12 rounded bg-white"
                      />
                      <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.qty}
                      </span>
                    </div>

                    <p className="max-w-[180px]">
                      {item.p_id.title}
                    </p>
                  </div>

                  <span>
                    ₹{addDecimal(parseInt(item.p_id.price.replace(/[^0-9-]/g, ""), 10)) * item.qty}
                  </span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="space-y-3 text-sm border-t pt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal · {order.cart_id?.products.length} items
                </span>
                <span>₹{`150000`}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Payment</span>
                <span>{order.paymentMethod}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <span className="font-medium">
                Total
              </span>
              <span className="text-xl font-semibold">
                INR ₹{`155500`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
