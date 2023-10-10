import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

// const TOP_OFFSET = 66;

function Navbar() {
 
    const navRef = useRef();
    

  const [showBackground, setShowBackgroung] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setShowBackgroung(true)
        } else {
            setShowBackgroung(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current)
  }, []);

  const Icon = showMobileMenu ? AiOutlineClose : AiOutlineMenu;

  return (
  <nav className={"w-full bg-black text-blue-300 fixed z-30"} ref={navRef}>
      <div 
      className="flex justify-between items-center px-5 lg:px-16 py-4 lg:py-2 transition duration-500">
        <a href="/" className="font-bold text-2xl">
          SEWENDA TCHAOU
        </a>
        <div className="md:flex justify-evenly items-center w-3/4 hidden text-3xl font-bold">
            <Link to='/' className=" cursor-pointer hover:opacity-80 hover:underline px-2 py-6">Acceil</Link>
            <Link to='/apropos' className="hover:text-blue-900 cursor-pointer hover:opacity-80 hover:underline px-2 py-6">A propos</Link>
            <Link to='/realisation' className="nav_link3 hover:text-blue-900 cursor-pointer hover:opacity-80 hover:bg-blanc/30 p-2">Mes realisations</Link>
            <Link to='/contact' className="cursor-pointer hover:text-blue-900 hover:opacity-80 hover:underline px-2 py-6">Contacts</Link>
        </div>
        <div className="md:hidden flex flex-row items-center gap-2 ml-8 relative">
          <Icon
            size={30}
            className="text-blanc cursor-pointer hover:opacity-80"
            onClick={toggleMobileMenu}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
      {/* <Login onClose={handleOnClose} visible={showModal} /> */}
    </nav>
  )
}

export default Navbar;
