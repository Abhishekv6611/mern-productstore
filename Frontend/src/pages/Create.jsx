import { useState } from "react";
import { useProductStore } from "../store/Product";
import { useToast } from '@chakra-ui/react'
function Create() {
  const [newproduct, SetNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast=useToast()
  const {addProduct} = useProductStore()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {success,message}=await addProduct(newproduct)
      if(!success){
        toast({
          title: 'Error',
          description: message,
          status: 'error',
          isClosable: true,
        })      
      }else{
        toast({
          title: 'Success',
          description: message,
          status: 'success',
          isClosable: true,
        })
      }
      SetNewProduct({name:"",price:"",image:""})
  };
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-gray-500 rounded p-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-9">
          CREATE NEW PRODUCT
        </h1>
        <form action="" className="space-y-4">
          <div>
            <input
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter product name"
              type="text"
              value={newproduct.name}
              onChange={(e) =>
                SetNewProduct({ ...newproduct, name: e.target.value })
              }
            />
          </div>
          <div>
          <input
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter product Price"
              // type="number"
              value={newproduct.price}
              onChange={(e) =>
                SetNewProduct({ ...newproduct, price: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Image URL"
              name="image"
              value={newproduct.image}
              onChange={(e) =>
                SetNewProduct({ ...newproduct, image: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-center ">
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-600 rounded p-3 "
            >
              Add Your Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
