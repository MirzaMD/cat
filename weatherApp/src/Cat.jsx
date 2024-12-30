import { useEffect, useState } from 'react';
export function Cat(){
    const[pic,setPic]=useState("");
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>{
            if(!res.ok) throw new Error("Couldn't fetch");
            return res.json()
        }).then(data=>{
            console.log(data)
            data.map(d=>(setPic(d.url)))  
            })
        .catch(err=>(console.error(err.message)))
    },[]);
    return (<img src={pic} className='h-[200px] sm:h-[400px] rounded-sm mt-20 sm:mt-10 ml-1 sm:ml-80'/>)
}