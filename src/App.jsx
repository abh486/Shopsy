import  { useEffect } from 'react';
import Navebar from './Component/Navebar/Navebar';
import Hero from './Component/Hero/Hero';
import Products from './Component/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Component/TopProducts/TopProducts';
import Banner from './Component/Banner/Banner';
import Subscribe from './Component/Subscribe/Subscribe';
import Testmonials from './Component/Testimonials/Testmonials';
import Footer from './Component/Footer/Footer';
import Popup from './Component/Popup/Popup';
import React from "react";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900
        dark:text-white duration-200'>
      <Navebar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testmonials/>
      <Footer/>
      <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
