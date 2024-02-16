import { Link } from "react-router-dom";
//import { Button } from "./ui/button";
import Logo from './../assets/organichire.png'


export default function Header() {
  return (
    // <nav className="w-full h-[60px] bg-white backdrop-filter backdrop-blur-lg shadow-lg text-white p-3 flex justify-between items-center">
    //    <Link to="/">
    //       <img src={Logo} width={100}/>
    //    </Link>

    //    <ul className=" flex gap-3 ">
    //     <li>
            
    //         <Button variant="secondary">
    //             <Link to='/compiler'>Compiler</Link>
    //         </Button>

    //     </li>
    //    </ul>
    // </nav>

    <div className='flex items-center justify-between p-4 bg-white'>
        <div className='flex items-center flex-shrink-0 text-white mr-6 '>
            <Link to='/'>
            <img src={Logo} width={130}/>
                {/* <h1 className='text-center font-bold text-2xl text-gray-800 select-none'>
                    organichire<span className='text-blue-800 font-cursive'>.io</span>
                </h1> */}
            </Link>
        </div>

        <div className='flex items-center justify-end'>
            <div className='text-center list-none flex select-none'>
                <Link to='/' className='text-black hover:text-blue-900 px-4 py-2'><li>Home</li></Link>
                <Link to='/aboutus' className='text-black hover:text-blue-900 px-4 py-2 mr-5'><li>About Us</li></Link>
            </div>

            <div className='text-right '>
                <Link to='/compiler'>
                  <button className='rounded-full bg-blue-800 text-white px-5 h-10 hover:bg-black transition-all duration-200'>
                      Compiler
                  </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
