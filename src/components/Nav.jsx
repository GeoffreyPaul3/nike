import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
        <div
          className={
            nav
              ? "hidden max-lg:block fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between mb-4">
                <a href="/">
                  <img
                    src={headerLogo}
                    alt="Logo"
                    width={100}
                    height={49}
                  />
                </a>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-300 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-6"></div>
              <div className="p-10 flex flex-col space-y-12">
                <ul className="upprercase font-semibold">
                  {navLinks.map((item) => (
                    <li
                      key={item.label}
                      onClick={() => setNav(false)}
                      className="pb-8 pt-5"
                    >
                      <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
