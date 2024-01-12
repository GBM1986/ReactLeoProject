import React, { useState } from "react";
import { Link } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <div className="absolute left-0 right-0 block w-full transition lg:hidden top-16">
            <ul className="p-20 text-xl text-center">
                <Link spy={true} smooth={true} to="/"> 
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Hjem</li>
                </Link>
                <Link spy={true} smooth={true} to="advokatrerne">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Advokaterne</li>
                </Link>
                <Link spy={true} smooth={true} to="omleolov">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Om leolov</li>
                </Link>
                <Link spy={true} smooth={true} to="kontakt">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Kontakt</li>
                </Link>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className="z-50 flex justify-between flex-1 px-20 py-4 ml-auto h-10vh lg:py-1 mb-0.5 border-b-4 border-primary">
                <div className="justify-start flex-1 font-inter lg:flex md:flex lg: items center">
                    <div className="hidden flex-10 lg:flex md:flex">
                        <ul className="flex gap-8 text-[14px]">
                            <Link spy={true} smooth={true} to="/"> 
                                <li className="pr-4 transition border-r-2 cursor-pointer text-primary border-primary hover:text-secondary ">Hjem</li>
                            </Link>
                            
                            <Link spy={true} smooth={true} to="advokatrerne">
                                <li className="pr-4 transition border-r-2 cursor-pointer text-primary border-primary hover:text-secondary ">Advokaterne</li>
                            </Link>
                            <Link spy={true} smooth={true} to="omleolov">
                                <li className="pr-4 transition border-r-2 cursor-pointer text-primary border-primary hover:text-secondary ">Om leolov</li>
                            </Link>
                            <Link spy={true} smooth={true} to="kontakt">
                                <li className="transition cursor-pointer text-primary border-primary hover:text-secondary">Kontakt</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="lg:hidden md:hidden">
                        {click && content}
                    </div>

                    <button className="block transition lg:hidden md:hidden" onClick={handleClick}>
                        {click ? <FaTimes /> : <CiMenuFries/>}
                    </button>
                </div>
                <div className="flex items-center justify-end flex-1 lg:ml-4 md:ml-2">
                    <span className="text-3xl font-light text-primary">Leo</span><p className="mr-8 text-3xl font-light">-love</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
