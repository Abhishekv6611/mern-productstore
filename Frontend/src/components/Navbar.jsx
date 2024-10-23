import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { useProductStore } from "../store/Product";

export default function Navbar() {
    const{colorMode,toggleColorMode}=useColorMode()
    // const {products}=useProductStore()
  return (
    <div className="flex justify-around items-center ">
      <div className="mb-3">
        <Link to={'/'}>
        <h2 className="text-blue-200 text-3xl mt-3">Product Store</h2>
        </Link>
      </div>
      <div className=" flex gap-2 mt-1 ">
        <Link to={"/create"}>
        <div className="flex justify-center   rounded p-2 w-20  ">
      <FaRegPlusSquare />
        </div>
        </Link>
        <div onClick={toggleColorMode} className="flex justify-center    p-2 rounded cursor-pointer ">
          <button >
        {
        colorMode==="light"?<CiLight />: <MdOutlineDarkMode />
        
       }
          </button>
        </div>
      </div>
    </div>
  );
}
