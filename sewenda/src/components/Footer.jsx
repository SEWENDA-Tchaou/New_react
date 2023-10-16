import linkedin from '../assets/img/linkedin.avif'
import github from '../assets/img/github.png'
function Footer() {
  return (
    <div className=" absolute bottom-0  z-50">
        <div className="w-1/2 flex">
          <a href="https://www.linkedin.com/in/sewenda-tchaou-7a0b1a238/"target='_blank' rel="noreferrer" className=" mx-8 rounded-full ml-20 my-1"><img src={linkedin} className='rounded-full ml-20 my-1'  width={40} alt="" /></a>
          <a href=""><img src={github} className='rounded-full my-1' width={40} style={{height:40, marginLeft: 50}} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer;