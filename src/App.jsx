import { useState } from 'react'

import './App.css'

function App() {
  const [Image, setImage] = useState(0)
  const images=[
    "https://images.pexels.com/photos/1366247/pexels-photo-1366247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/673181/pexels-photo-673181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206792/pexels-photo-206792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/207172/pexels-photo-207172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ];

  const Right= () => {
    setImage(Image+1);
  };

  const Left =() => {
    setImage(Image-1);
  };



  return (
    <>
      <div className='h-[65vh] w-[37vw] border-[2px] bg-gray-700 mx-[20rem] rounded-xl my-20'>
      <div className=' h-[46vh] w-[32vw] mx-8 my-5 '>
        <img src={images[Image]} className=" shadow-2xl position-center bg-contain rounded-xl" />
      </div>

      <div className=' flex justify-between h-[10vh] w-[32vw] mx-8 '>
        <button onClick={Left} disabled={Image==0} className='h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium my-2'><span>&lt;</span>Left</button>
        <p className='text-white text-xl my-4'>{Image+1}/6</p>
        <button onClick={Right} disabled={Image==5} className='h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium my-2'>Right<span>&gt;</span> </button>

      </div>

      </div>

    </>
  )
}

export default App
