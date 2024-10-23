import {create}from 'zustand'
 
export const useProductStore=create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),

    addProduct:async(newProduct)=>{
    if(!newProduct.name ||!newProduct.image || !newProduct.price){
        return{success:false,message:"please fill in all fields"}
    }
    const res=await fetch("http://localhost:5000/api/product",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newProduct),
    })
    const data=await res.json()
    set((state)=>({products:[...state.products,data.data]}))
    return{success:true,message:"Product created successfuly"}
    },
    fetchProducts:async()=>{
        const res=await fetch("http://localhost:5000/api/product")
        const data=await res.json()
        set({products:data.Data})
    },
    DeleteProduct:async(pid)=>{
        const res=await fetch(`http://localhost:5000/api/product/${pid}`,{
            method:"DELETE",
        })
        const data=await res.json()
        if(!data.success)return {success:false,message:data.message}
        set(state=>({products:state.products.filter(product=>product._id!==pid)}))
        return{success:true,message:data.message}
    
    },
     UpdateProduct : async (pid, UpdateProduct) => {
        const res = await fetch(`http://localhost:5000/api/product/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UpdateProduct),
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };
        
        // Update the UI immediately without needing a refresh
        set((state) => ({
            products: state.products.map((product) => product._id === pid ? data.Data : product)
        }));
        return{success:true,message:data.message}
    }
    

}))
