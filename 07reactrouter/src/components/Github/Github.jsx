import React from 'react';
import { useEffect, useState } from 'react';
function Github() {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    return ( 
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD7wShELxTwempY89oORR9opWTBU-xKu-Cw&s" alt="GIt picture" width={300} />
        </div>
     );
}

export default Github;