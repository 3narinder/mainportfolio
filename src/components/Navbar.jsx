import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { reactjs, menu, close, copyIcon, downloadIcon } from "../assets";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(` ${text} copied`, {
      position: "top-right",
      autoClose: 1000, // Auto close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: "#355169", color: "#fff" },
    });
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={reactjs} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Narinder Kumar
          </p>
        </Link>

        {/* Contact, Email, and Resume Section */}
        <div className="flex items-center gap-6 md:text-sm text-base">
          <div
            className="flex items-center gap-1 cursor-pointer text-secondary"
            onClick={() => handleCopy("+91-7717696933")}
          >
            <IoMdCall className="" />
            <span className="hidden sm:flex">+91-7717696933</span>
          </div>

          <div
            className="flex items-center gap-1 cursor-pointer text-secondary"
            onClick={() => handleCopy("narinderd9@gmail.com")}
          >
            <IoMdMail className="" />
            <span className="hidden sm:flex">narinderd9@gmail.com</span>
          </div>

          <a
            className="flex items-center gap-1 cursor-pointer text-secondary"
            target="_blank"
            href="https://www.linkedin.com/in/narinder-kumar-3216a9153"
          >
            <FaLinkedin className="" />
            <span className="hidden sm:flex">LinkedIn</span>
          </a>

          <a
            href="/NarinderResume.pdf"
            download
            className="flex items-center gap-1 text-secondary cursor-pointer"
          >
            <FaDownload className="" />
            <span className=" hidden sm:flex">Download Resume</span>
          </a>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
