import { useEffect, useState } from "react";
// your logo path

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null; // hide component after 3s

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center bg-black">
     <img src="/images/logo.png" 
    alt="logo"  className='h-18 w-18 invert flicker'/>
      
    </div>
  );
};

export default Preloader;
