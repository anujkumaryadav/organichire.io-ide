import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from './../assets/organichire.png'


export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
       <Link to="/">
          <h2 className="font-bold select-none"> organichire.io </h2>
          {/* <img src={Logo} width={100}/> */}
       </Link>

       <ul className=" flex gap-3 ">
        <li>
            
            <Button variant="secondary">
                <Link to='/compiler'>Compiler</Link>
            </Button>

        </li>
       </ul>
    </nav>
  )
}
