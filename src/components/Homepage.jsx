import { AnimatePresence, motion } from "framer-motion";
import bannerImg from "../assets/images/Banner_Desktop_1600_x_500-1.jpg";
import secondBannerImg from "../assets/images/1600_x_500.jpg";
import thirdBannerImg from "../assets/images/Banner_Desktop_1600_x_500_2.jpg";
import shoeImg from "../assets/images/S70936-8.webp";
import brand1 from "../assets/images/FOG-TILE_dcdd1fe6-bf9b-492b-a7f2-8d95ad1839ab.webp";
import brand2 from "../assets/images/1080_x_1080_Tile_-3.webp";
import brand3 from "../assets/images/ASICS-BANNER_7e5d35c3-d0a9-4c8e-b97d-5ec474ef8767.webp";
import brand4 from "../assets/images/1080_x_1080_Tile_-5_1.webp";

import arrowIcon from "../assets/icons/arrow_right_alt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import rareIcon from "../assets/icons/ac_unit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import luxuryIcon from "../assets/icons/award_star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import omniIcon from "../assets/icons/flowchart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import communityIcon from "../assets/icons/perm_contact_calendar_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import { useState, useEffect } from "react";

const Homepage = () => {
    const banners = [
        { img: bannerImg },
        { img: secondBannerImg },
        { img: thirdBannerImg }
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % banners.length);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
    }, []);


    return (
        <>
            <div className="relative w-full h-[500px] bg-gray-300 overflow-hidden">

                <AnimatePresence mode="sync" custom={direction}>
                    <motion.img
                        key={index}
                        src={banners[index].img}
                        custom={direction}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                <div className="absolute bottom-16 left-16 text-white">
                    <h1 className="text-[44px] font-bold mb-4">TIMBERLAND</h1>

                    <div className="flex gap-4">
                        <button className="bg-white hover:bg-white/40 hover:invert hover:duration-300 rounded-[3px] px-6 py-2  text-black font-semibold">
                            SHOP TIMBERLAND
                        </button>
                        <button className="bg-gray-500/60 hover:bg-gray-500/40 hover:invert hover:duration-300 rounded-[3px] text-white px-6 py-2 font-semibold">
                            SHOP ALL SNEAKERS
                        </button>
                    </div>
                </div>
            </div>


            <div className="w-full px-10 py-7 flex justify-between gap-2">

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">SAUCONY ENDORPHIN PRO 4</p>
                    <p className="text-xs text-gray-500">'WHITE MUTANT'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">ASICS GEL KAYANO 14</p>
                    <p className="text-xs text-gray-500">'BLACK PURE SILVER'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">NEW BALANCE 204L</p>
                    <p className="text-xs text-gray-500">'MUSHROOM ARID'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">SAUCONY PROGRID OMNI 9</p>
                    <p className="text-xs text-gray-500">'GLOWACONSTRICTOR'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">AIR JORDAN 1 LOW OG</p>
                    <p className="text-xs text-gray-500">'BETTER WITH TIME'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">CLEENS PODIUM</p>
                    <p className="text-xs text-gray-500">'BLACK MONO'</p>
                </div>

                <div className="w-40 text-center">
                    <img src={shoeImg}
                        className="mx-auto mb-2 hover:rotate-45 hover:scale-75 transition-transform duration-1000" />
                    <p className="text-xs font-semibold">SAUCONY PROGRID GUIDE 7</p>
                    <p className="text-xs text-gray-500">'GREY SILVER'</p>
                </div>

            </div>
            <div className="w-full px-12 py-5 bg-[#fdfaf6]">
                <h2 className="text-3xl font-bold mb-5">GREATEST BRANDS</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

                    <div className="group relative h-[420px] rounded-[7px] overflow-hidden cursor-pointer">

                        <img src={brand1}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.5]" />

                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40"></div>

                        <div className="absolute bottom-6 left-6 text-white
                        opacity-0 translate-y-6
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500">

                            <button
                                className="bg-gray-600/60 hover:bg-gray-600/90 text-white px-6 py-3 rounded-[10px] flex items-center gap-2">
                                SHOP NOW
                                <img src={arrowIcon}
                                    className="w-5 h-5 object-contain" />
                            </button>

                        </div>
                    </div>

                    <div className="group relative h-[420px] rounded-[7px] overflow-hidden cursor-pointer">

                        <img src={brand2}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.5]" />

                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40"></div>

                        <div className="absolute bottom-6 left-6 text-white
                        opacity-0 translate-y-6
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500">

                            <button
                                className="bg-gray-600/60 hover:bg-gray-600/90 text-white px-6 py-3 rounded-[10px] flex items-center gap-2">
                                SHOP NOW
                                <img src={arrowIcon}
                                    className="w-5 h-5 object-contain" />
                            </button>

                        </div>
                    </div>

                    <div className="group relative h-[420px] rounded-[7px] overflow-hidden cursor-pointer">

                        <img src={brand3}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.5]" />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40"></div>

                        <div className="absolute bottom-6 left-6 text-white
                        opacity-0 translate-y-6
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500">

                            <button
                                className="bg-gray-600/60 hover:bg-gray-600/90 text-white px-6 py-3 rounded-[10px] flex items-center gap-2">
                                SHOP NOW
                                <img src={arrowIcon}
                                    className="w-5 h-5 object-contain" />
                            </button>
                        </div>
                    </div>

                    <div className="group relative h-[420px] rounded-[7px] overflow-hidden cursor-pointer">

                        <img src={brand4}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.5]" />

                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40"></div>

                        <div className="absolute bottom-6 left-6 text-white
                        opacity-0 translate-y-6
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500">

                            <button
                                className="bg-gray-600/60 hover:bg-gray-600/90 text-white px-6 py-3 rounded-[10px] flex items-center gap-2">
                                SHOP NOW
                                <img src={arrowIcon}
                                    className="w-5 h-5 object-contain" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap justify-between  gap-6 my-6 text-sm text-gray-700 bg-gray-400/20 rounded-[10px] py-6 px-6">

                    <div className="flex items-center gap-3 w-full md:w-[23%]">
                        <img src={rareIcon} alt="Rare"
                            className="invert w-7 h-7 object-contain cursor-pointer" />
                        <div>
                            <p className="font-semibold">AUTHENTIC & RARE</p>
                            <p className="text-xs">Genuine, exclusive sneakers</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-[23%]">
                        <img src={luxuryIcon} alt="Luxury"
                            className="invert w-7 h-7 object-contain cursor-pointer" />
                        <div>
                            <p className="font-semibold">LUXURY FOCUS</p>
                            <p className="text-xs">Premium fashion-meets-culture</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-[23%]">
                        <img src={omniIcon} alt="flow"
                            className="invert w-7 h-7 object-contain cursor-pointer" />
                        <div>
                            <p className="font-semibold">OMNICHANNEL</p>
                            <p className="text-xs">Online + retail presence</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-[23%]">
                        <img src={communityIcon} alt="Community"
                            className="invert w-7 h-7 object-contain cursor-pointer" />
                        <div>
                            <p className="font-semibold">COMMUNITY-FIRST</p>
                            <p className="text-xs">Content & cultural events</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[#f4f0e8] py-10 px-6">
                <h2 className="text-center text-[22px] font-semibold tracking-wide ">
                    RECOGNIZED BY CULTURE MAKERS
                </h2>

                <div className="w-full px-6 py-10">
                    <div className="flex justify-center gap-[55px]">
                        <div className="bg-[#fbfaf6] rounded-2xl p-6 h-[320px] flex flex-col justify-between hover:scale-[1.05] transition duration-500 shadow-sm">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex gap-1 text-black text-[14px]">★ ★ ★ ★ ★</div>
                                    <span className="text-[12px] text-gray-400">3 days ago</span>
                                </div>

                                <h3 className="font-semibold text-[14px] mb-2">5 Stars</h3>

                                <p className="text-[14px] text-gray-600 leading-[22px]">
                                    Everything was good from purchase to arriving and trying it on perfect will recommend it to people who are into fashion trend and into jordans
                                </p>
                            </div>

                            <div>
                                <hr className="my-4 border-gray-200" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-semibold">M</div>
                                        <div>
                                            <p className="text-[13px] font-medium">Mohammed</p>
                                            <span className="text-[10px] text-gray-400">Verified by shop</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-gray-500 text-[12px]">
                                        <span>👍 0</span>
                                        <span>👎 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#fbfaf6] rounded-2xl p-6 h-[320px] flex flex-col justify-between hover:scale-[1.05] transition duration-500 shadow-sm">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex gap-1 text-black text-[14px]">★ ★ ★ ★ ★</div>
                                    <span className="text-[12px] text-gray-400">3 days ago</span>
                                </div>

                                <h3 className="font-semibold text-[14px] mb-2">5 Stars</h3>

                                <p className="text-[14px] text-gray-600 leading-[22px]">
                                    Everything was good from purchase to arriving and trying it on perfect will recommend it to people who are into fashion trend and into jordans
                                </p>
                            </div>

                            <div>
                                <hr className="my-4 border-gray-200" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-semibold">M</div>
                                        <div>
                                            <p className="text-[13px] font-medium">Mohammed</p>
                                            <span className="text-[10px] text-gray-400">Verified by shop</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-gray-500 text-[12px]">
                                        <span>👍 0</span>
                                        <span>👎 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#fbfaf6] rounded-2xl p-6 h-[320px] flex flex-col justify-between hover:scale-[1.05] transition duration-500 shadow-sm">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex gap-1 text-black text-[14px]">★ ★ ★ ★ ★</div>
                                    <span className="text-[12px] text-gray-400">3 days ago</span>
                                </div>

                                <h3 className="font-semibold text-[14px] mb-2">5 Stars</h3>

                                <p className="text-[14px] text-gray-600 leading-[22px]">
                                    Everything was good from purchase to arriving and trying it on perfect will recommend it to people who are into fashion trend and into jordans
                                </p>
                            </div>

                            <div>
                                <hr className="my-4 border-gray-200" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-semibold">M</div>
                                        <div>
                                            <p className="text-[13px] font-medium">Mohammed</p>
                                            <span className="text-[10px] text-gray-400">Verified by shop</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-gray-500 text-[12px]">
                                        <span>👍 0</span>
                                        <span>👎 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#fbfaf6] rounded-2xl p-6 h-[320px] flex flex-col justify-between hover:scale-[1.05] transition duration-500 shadow-sm">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex gap-1 text-black text-[14px]">★ ★ ★ ★ ★</div>
                                    <span className="text-[12px] text-gray-400">3 days ago</span>
                                </div>

                                <h3 className="font-semibold text-[14px] mb-2">5 Stars</h3>

                                <p className="text-[14px] text-gray-600 leading-[22px]">
                                    Everything was good from purchase to arriving and trying it on perfect will recommend it to people who are into fashion trend and into jordans
                                </p>
                            </div>

                            <div>
                                <hr className="my-4 border-gray-200" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-semibold">M</div>
                                        <div>
                                            <p className="text-[13px] font-medium">Mohammed</p>
                                            <span className="text-[10px] text-gray-400">Verified by shop</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-gray-500 text-[12px]">
                                        <span>👍 0</span>
                                        <span>👎 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homepage
