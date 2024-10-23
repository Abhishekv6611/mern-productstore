import { useToast } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/Product";
import Update from "../pages/update";
import { Link } from "react-router-dom";

const ProductCard = ({ key, product }) => {
  const { DeleteProduct } = useProductStore();
  const toast = useToast();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await DeleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Product Deleted",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="max-w-sm flex justify-around  w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-90 ml-2">
      <div
        key={key}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[90%]"
      >
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[40vh] object-cover"
            src={product.image}
            alt={product.name}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${product.price}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link state={product} to={'/update'}>

              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800">
                Edit <FaEdit className="ml-1 w-4 h-4" />
              </button>
            </Link>

            <a
              onClick={() => handleDeleteProduct(product._id)}
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-800"
            >
              Delete
              <MdDelete className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 