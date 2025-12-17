const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f4ee] px-20 py-10">
        <div className="flex justify-between items-start">

            <div className="w-[40%]">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
                    GET 10% OFF YOUR FIRST ORDER <br/>
                    WHEN SIGNING UP TO OUR <br/>
                    NEWSLETTER
                </h2>

                <div className="mt-8 relative w-[85%]">
                    <input type="email" placeholder="Email"
                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-4 pr-12 outline-none text-gray-700 placeholder-gray-400" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer">→</span>
                </div>

                <div className="flex gap-6 mt-10 text-xl">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-regular fa-envelope"></i>
                </div>
            </div>

            <div className="w-[18%] text-sm">
                <h3 className="font-bold mb-6">INFORMATION</h3>
                <div className="flex flex-col gap-3 text-gray-700">
                    <span>Videos</span>
                    <span>Reviews</span>
                    <span>Authenticity</span>
                    <span>Discount Codes</span>
                    <span>Gift Cards</span>
                </div>
            </div>

            <div className="w-[20%] text-sm">
                <h3 className="font-bold mb-6">TOP COLLECTIONS</h3>
                <div className="flex flex-col gap-3 text-gray-700">
                    <span>Air Jordan 4</span>
                    <span>ASICS</span>
                    <span>Cleens</span>
                    <span>Fear of God Essentials</span>
                    <span>Nike</span>
                    <span>Reprimo</span>
                    <span>Saucony</span>
                </div>
            </div>

            <div className="w-[20%] text-sm">
                <h3 className="font-bold mb-6">CUSTOMER SERVICE</h3>
                <div className="flex flex-col gap-3 text-gray-700">
                    <span>My Account</span>
                    <span>Create a Return</span>
                    <span>Track Your Order</span>
                    <span>FAQs</span>
                    <span>Contact Us</span>
                    <span>Refund Policy</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Shipping Policy</span>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
