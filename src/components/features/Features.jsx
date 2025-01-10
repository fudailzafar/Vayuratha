import React from "react";

const Features = () => {
  return (
    <div className="2xl:container mx-auto bg-white">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-x-4 py-2 pb-4 gap-2 md:hover:cursor-pointer">
        {/*Card-1*/}

        <div className="flex flex-col items-start text-center p-6 rounded-3xl bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/1_1_.png')] h-[350px] bg-cover bg-center transition-transform duration-300 hover:scale-95 hover:shadow-2xl">
          <h1 className="font-[Montserrat] text-left font-semibold text-[28px] text-black">
            Modify Easily - Any Time, Anywhere
          </h1>

          <p className="font-[Montserrat] font-normal text-[14px] text-left text-black pt-3">
            Experience smooth, stable footage with our Advanced EIS technology
            for professional-grade video quality and seamless flight.
          </p>
        </div>
        {/*Card-2*/}

        <div className="flex flex-col items-start text-center p-6 rounded-3xl bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/2_1_.png')] bg-cover bg-center transition-transform duration-300 hover:scale-95 hover:shadow-2xl">
          <h1 className="font-[Montserrat] text-left  text-[28px] font-semibold text-black pt-32">
            New Lightweight Body
          </h1>
          <h1 className="font-[Montserrat] text-left font-semibold text-[28px] text-black ">
            With Advance EIS
          </h1>

          <p className="font-[Montserrat] font-normal text-[14px] text-left text-black pt-3">
            Experience smooth, stable footage with our Advanced EIS technology
            for professional-grade video quality and seamless flight.
          </p>
        </div>
        {/*Card-3*/}

        <div className="flex flex-col items-start text-center p-6 rounded-3xl bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/3_1_.png')] h-[350px] bg-cover bg-center transition-transform duration-300 hover:scale-95 hover:shadow-2xl">
          <h1 className="font-[Montserrat] text-left font-semibold text-[28px] text-black">
            Compatible With Every Controller
          </h1>

          <p className="font-[Montserrat] font-normal text-[14px] text-left text-black pt-3">
            Universal compatibility with every controller for a smooth and
            customizable flying experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
