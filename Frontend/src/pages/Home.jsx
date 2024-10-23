import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useProductStore } from "../store/Product";
import ProductCard from "../components/ProductCard";

function Home() {
  const{fetchProducts,products}=useProductStore()

  useEffect(()=>{
    fetchProducts();
  },[fetchProducts])
  console.log("Products",products);
  
  return (
    
    <div>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
{products.map((product)=>(
  <ProductCard key={product._id} product={product}/>
))}
  </div>
  {
    products.length===0 &&
  <div className="w-full flex items-center justify-center h-[80vh]">
    <span className="flex flex-col sm:flex-row gap-2 text-center">
      <h1 className="text-xl sm:text-2xl">No Product Found!</h1>
      <Link to={'/create'}>
        <h2 className="text-xl sm:text-2xl font-serif text-blue-500 hover:underline">
          Create a Product
        </h2>
      </Link>
    </span>
  </div>
  }
</div>
              
  );
}

export default Home;
