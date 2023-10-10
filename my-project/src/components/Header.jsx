import Navbar from "../components/Navbar";
// import sewenda_refait from '../assets/img/sewenda_refait.png'

function Header() {


  return (
    <header className="text-blue-300">
        <Navbar />
        <div
            className="absolute bg-black h-full w-full colorBgAcceuil z-20 top-0 left-0 "
            // style={{ backgroundImage: 'url(../src/assets/img/fond_noir.png)' }}
        >

            <div className=" h-full lg:flex justify-center items-center">
                <div className="lg:w-1/2 mt-10">
                    <h1 className="first-texte text-xl mt-40 lg:mt-[-100px] lg:text-2xl  text-center sm:text-left text-blanc/95 font-bold mx-20">
                        Bonjour, je suis SEWENDA TCHAOU                
                    </h1> <br />
                    <h1 className="second-texte text-blue-900  text-xl lg:text-2xl  text-center sm:text-left text-blanc/95 font-bold mx-20">
                        Developpeur Fullstack junior
                    </h1>
                    <h1 className="second-texte max-sm:hidden lg:text-md  text-blanc/95 font-bold mt-3 mb-14 text-justify mx-20">
                        {"Deux (2) ans d'experiences en Developpement Web et web mobile "}                   
                    </h1>
                    <a href="" className="border-2 border-blue-300 max-sm:hidden px-12 py-5 mx-20 rounded-2xl">
                        Mes realisations
                    </a>
                </div>
                <div className="max-sm:hidden w-1/2 bg-[url('./assets/img/sewenda_refait.png')] bg-center bg-no-repeat bg-contain h-[60vh]">
                    <div className="bg-mon-image bg-black/20 hover:bg-black/60 h-[60vh]">

                    </div>
                </div>
            </div>
        </div>
        {/* <div
            className="block z-10 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[60vh] bg-[url('/assets/img/docteur1.png')]"
            // style={{ backgroundImage: `url(../src/assets/img/${imageName})` }}
        >
        </div> */}
    </header>
  )
}

export default Header;
