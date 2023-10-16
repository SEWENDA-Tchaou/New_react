import Navbar from '../components/Navbar';
import Footer from "../components/Footer"

function Contact() {
  return (
    <>
         <Navbar />
    <div className="bg-black h-[100vh] pt-20 text-white ">
       <div>
        <h1 className="w-[246px] text-blue-600  text-2xl m-14 font-bold border-b-2 border-b-green-400">
            Je suis joingnable
        </h1>
        <p className=' mx-14 text-2xl'>0028 91 62 24 97</p> <br />
        <p className=' mx-14 text-2xl'>0028 99 83 60 22</p> <br />
        <p className=' mx-14 text-2xl'>Email: sewendatchaou@gmail.com</p>
       </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact;