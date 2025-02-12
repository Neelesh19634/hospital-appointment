import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CommonInfo from "./components/CommonInfo";
import OurValues from "./components/OurValues";
import AboutUs from "./components/AboutUs";
import Achivements from "./components/Achivements";
import Reviews from "./components/Reviews";
import Happy from "./components/Happy";

const page = () => {
  return (
    <>
    <div className="bg-blue-50 min-h-screen font-roboto flex flex-col">
      <div>
        <Header />
      </div>
      <div className=" min-h-screen">
        <Main/>
        
      </div>
      <div className="">
          <CommonInfo/>
     </div>
     <div className="">
      <OurValues/>
     </div>
     <div>
      <AboutUs/>
     </div>
     <div>
      <Achivements/>
     </div>
     <div>
      <Reviews/>
     </div>
     <div>
      <Happy/>
     </div>
    </div>
    
    
    </>
  );
};

export default page;
