import linkedin from '../assets/img/linkedin.avif'
import github from '../assets/img/github.png'
function Footer() {
  return (
    <div className=" absolute z-50 bottom-[-0px]">
        <div className="w-1/2 flex">
          <a href=""><img src={linkedin} className='rounded-full ml-20 my-1'  width={40} alt="" /></a>
          <a href=""><img src={github} className='rounded-full my-1' width={40} style={{height:40, marginLeft: 50}} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer;