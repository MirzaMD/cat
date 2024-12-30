import { useEffect, useState } from 'react';
export function Facts(){
    const[quote,setQuote]=useState("");
    useEffect(()=>{
        fetch("https://catfact.ninja/fact?max_length=100")
        .then(response=>{
            if(!response.ok) throw new Error("Couldn't fetch!");
            return response.json()
        }).then(data=>{
            setQuote(data.fact)
            console.log(data)})
        .catch(err=>(console.error(err.message)))
    },[])
    return(<h1 className='text-sm sm:text-3xl mt-20 sm:mt-10 sm:ml-20'>{quote}</h1>)
}