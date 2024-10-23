import { useState } from "react";
import {  useLocation,  } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/Product";
import { useNavigate } from 'react-router-dom';

function Update() {
  const location = useLocation();
  const data = location.state;
  const history=useNavigate()
  const [product, setProduct] = useState(data);
  const { UpdateProduct } = useProductStore();
  const toast = useToast();

  const handleSubmit = async (pid, product, e) => {
    e.preventDefault(); // Prevent the page from reloading
   const {success,message}= await UpdateProduct(pid, product);
   history('/');
   if (!success) {
     toast({
       title: "Error",
       description:message ,
       status: "error",
       duration: 3000,
       isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Product Updated Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

   



  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      {product && (
        <div className="bg-gray-500 rounded p-6 w-full max-w-md">
          <h1 className="text-center text-2xl font-bold mb-9">
            Update Product
          </h1>
          <form className="space-y-4">
            <div>
              <input
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter product name"
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter product price"
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
            <div>
              <input
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Image URL"
                value={product.image}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-center">
             
              <button
                onClick={(e) => handleSubmit(product._id, product,e)}
                className="text-white bg-blue-600 rounded p-3"
                >
                Update Product
              </button>
                
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
