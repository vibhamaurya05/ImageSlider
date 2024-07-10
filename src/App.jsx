import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [Image, setImage] = useState(0);
  const images = [
    "https://images.pexels.com/photos/1366247/pexels-photo-1366247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/673181/pexels-photo-673181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206792/pexels-photo-206792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/207172/pexels-photo-207172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const Right = () => {
    setImage((prevImage) => (prevImage + 1) % images.length);
  };

  const Left = () => {
    setImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const onHover = () => {
    stopInterval();
  };

  const onLeave = () => {
    startInterval();
  };

  return (
    <div
      className="h-[65vh] md:w-[37vw] border-[2px] bg-gray-700 md:mx-[26rem] rounded-xl my-20 position-relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="w-[32vw] mx-auto my-5">
        <img
          src={images[Image]}
          className="shadow-2xl position-center bg-contain rounded-xl"
          alt="carousel"
        />
      </div>

      <div className="flex justify-between gap-4 md:h-[10vh] md:w-[30vw] md:mx-12">
        <button
          onClick={Left}
          className="h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium md:my-2"
        >
          <span>&lt;</span>Left
        </button>
        <p className="text-white text-xl my-4">{Image + 1}/6</p>
        <button
          onClick={Right}
          className="h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium md:my-2"
        >
          Right<span>&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default App;

