import Navbar from "../components/Navbar";
import projet1 from "../assets/img/projet1.png";
import projet2 from "../assets/img/projet2.png";
import Footer from "../components/Footer"

function Realisattion() {
  return (
    <>
        <Navbar />
    <div className="bg-black h-[100vh] py-20 text-white ">
       <div>
        <h1 className="w-[246px] text-blue-600  text-2xl m-14 font-bold border-b-2 border-b-green-400">
            Projets Realises
        </h1>
        <div className="">
            <div className="flex justify-around items-center space-x-5">
              <a href="" className="border border-white/70 w-[300px]  rounded-md">
                <img src={projet1} className="w-full h-[20vh] rounded-tl-md rounded-tr-md" alt="" />
                <p className="text-center py-2 bg-blue-600 rounded-bl-md rounded-br-md">Projet EBATH-BTP</p>
              </a >
              <a href="" className="border border-white/70 w-[300px]  rounded-md">
              <img src={projet2} className="w-full h-[20vh] rounded-tl-md rounded-tr-md" alt="" />
                <p className="text-center py-2 bg-blue-600 rounded-bl-md rounded-br-md">Projet BRERA/DPH</p>
              </a>
              <a href="" className="border border-white/70 w-[300px] h-40 rounded-md">
                 
              </a>
            </div>
        </div>
        {/* <div className="my-5">
            <div className="flex justify-around items-center space-x-5">
              <a href="" className="border border-white/70 w-[300px] h-40 rounded-md">

              </a >
              <a href="" className="border border-white/70 w-[300px] h-40 rounded-md">
                 
              </a>
              <a href="" className="border border-white/70 w-[300px] h-40 rounded-md">
                 
              </a>
            </div>
        </div> */}
       </div>
    </div>
    <Footer />
    </>
  )
}

export default Realisattion;