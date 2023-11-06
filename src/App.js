import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0); 

  useEffect(()=>{
    console.log("component mount and Change render");
    if(count>0){

    }
  },[count])

  return ( 
    <div className='flex flex-col items-center justify-center  bg-blue-950 gap-4 text-white h-screen'>
      <div className="bg-blue-900 flex  flex-col gap-14 justify-center rounded-md items-center w-1/2 h-1/2">

      <h1 className={`text-5xl font-bold ${count>0 ? 'text-blue-400' : count<0 ?' text-orange-400' :'text-white'}`} >{count}</h1>
      <div className='flex justify-around  px-12 w-full  '>
        <button onClick={(e)=>setCount(count+1)} className='bg-blue-950 rounded px-12 py-2 text-2xl shadow-md hover:bg-blue-500 transition-all duration-300'>Add</button>
        <button  onClick={(e)=>setCount(count-1)} className='bg-blue-950 rounded px-6 py-2 text-2xl shadow-md hover:bg-blue-500 transition-all duration-300' >Subtract</button>
      </div>
      </div>
    </div>
  )
}

export default App