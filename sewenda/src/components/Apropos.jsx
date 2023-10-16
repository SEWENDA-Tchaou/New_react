import Navbar from "../components/Navbar";
// import Navbar from "./Navbar";
import html from '../assets/img/html.jpg'
import css from '../assets/img/css.png'
import php from '../assets/img/php.png'
import javascript from '../assets/img/javascript.jpeg'
import laravel from '../assets/img/laravel.jpeg'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import wordpress from '../assets/img/wordpress.png'
import tailwindCss from '../assets/img/tailwindCss.jpeg';
import figmalogo from '../assets/img/figmalogo.jpg';
import Footer from '../components/Footer'

function Apropos() {
  return (
    <>
        <Navbar />
        <div className="bg-black max-sm:h-[100vh] lg:px-24 lg:pt-16 lg:pb-10 text-white ">
            <div className="">
                <h1 className=" w-32 text-blue-600 text-2xl pt-20 mb-5 ml-5 lg:mx-14 lg:mt-12 font-bold border-b-2 border-b-green-400">
                    A propos
                </h1>
                <div className="px-5 lg:px-14 lg:flex opacity-80">
                    <div className="lg:w-1/2 space-y-2 lg:space-y-5 ">
                        <p >2019 : BTS en Maintenance Informatique.</p>
                        <p >{"2022 : Certiffication SIMPLON.CO en Developpent web et web Mobile dans le cadre du projet D-CLIC de l'OIF (Organisation Internationale de la Francophonie). "}</p>
                        <p >Experiences professionelles :</p>
                        <p className=""><span className="text-blue-300 font-bold">Head corporation sarl</span> : Stagaire Fullstack en Developpent web et web modile.</p>
                    </div>
                    <div className="bg-white opacity-80 w-1 mx-3"></div>
                        <div className="lg:w-1/2 space-y-3">
                            <h2 className="text-blue-600 font-bold">{"Languages que j'utilise :"}</h2>
                            <div className="hidden lg:flex justify-between items-center">
                                <div className="lg:flex lg:justify-between lg:items-center">
                                    <img src={html} className="w-[70px] lg:w-[250px] h-24" alt="" />
                                    <img src={css} className="w-[70px] lg:w-[250px] h-24" alt="" />
                                </div>
                                <div className="lg:flex justify-between items-center">
                                    <img src={php} className="w-[150px] lg:w-[250px] h-24" alt="" />
                                    <img src={javascript} className="w-[70px] lg:w-[250px] h-24" alt="" />
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <img src={laravel} className="w-[150px] lg:w-[120px] h-20 lg:h-24" alt="" />
                                    <img src={react} className="w-[150px] lg:w-[250px] h-20 lg:h-24" alt="" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <img src={node} className="w-[70px]  lg:w-[250px] h-20 lg:h-24" alt="" />
                                    <img src={wordpress} className="w-[70px] lg:w-[250px] h-20 lg:h-24" alt="" />
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-between items-center">
                                <img src={figmalogo} className="w-full lg:w-[250px] h-20 lg:h-24" alt="" />
                                <img src={tailwindCss} className="w-[70px] lg:w-[250px] h-20 lg:h-24" alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="absolute  lg:bottom-[-66px]">
            <Footer />
        </div>
    </>
  )
}

export default Apropos;