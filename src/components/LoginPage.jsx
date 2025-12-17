import { useRef } from "react";
import { useNavigate } from "react-router";
import shoeImg from "../assets/images/S70936-8.webp";
import { toast } from "react-toastify";
import axios from "axios";

const LoginPage = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("https://inventory-backend-2cmd.onrender.com/auth/login", {
      email: username.current.value,
      password: password.current.value,
    });
    console.log("response", data)
    toast.success("Login successful");
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("isloggedin", true);
    navigate("/listpage");
    window.location.reload();
    resetForm();
  };

  const resetForm = () => {
    username.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="w-full bg-[#fdfaf6] flex justify-around items-center p-[55px]">

      {/* LEFT IMAGE */}
      <div className="w-[45%]">
        <img
          src={shoeImg}
          className="h-[450px] w-[640px] object-contain transition-transform duration-700 hover:rotate-12"
          alt="shoe"
        />
      </div>

      {/* RIGHT LOGIN FORM */}
      <form
        onSubmit={handleLogin}
        className="p-[25px] flex flex-col justify-center items-center gap-[25px]"
      >
        <h2 className="text-2xl font-bold mb-4">Login Page</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={username}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-[400px] p-[15px] bg-gray-500/30 rounded-[20px] font-semibold"
          ref={password}
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-10 py-3 rounded-xl hover:scale-105 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
