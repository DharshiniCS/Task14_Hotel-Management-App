import React, { useState,useEffect } from 'react'

export default function useFetchMenu() {
    const [menu,setMenu]= useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    const fetchMenu = async () =>{
        try {
            const response = await fetch("https://dummyjson.com/recipes");
            if(!response.ok){
                 throw new Error("Failed to fetch menu.");
            }
            const result = await response.json();

            setMenu(result.recipes)
            
        } catch (err) {
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
     useEffect(() => {
    fetchMenu();
}, []);
  return {
    menu,
    loading,
    error
  }
}
