import React from "react";
const Services = () => {
  return (
    <div className="2xl:container mx-auto bg-white">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 p-2 gap-x-4 py-2 pb-4 gap-2 ">
        {/*Card-1*/}
        <div className="flex flex-col items-start text-center p-9 rounded-3xl bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/Blue%20White%20Minimalist%20Rain%20Drop%20Pattern%20Autumn%20Page%20Border%20A4%20(Landscape).png')] bg-cover bg-center transition-transform duration-300 hover:scale-95 hover:shadow-2xl ">
          <h1 className="font-[Montserrat] text-left  text-[16px]  text-black pb-2">
            Need services for your drone?
          </h1>
          <h1 className="font-[Montserrat] text-left font-bold text-[30px] text-black leading-9 ">
            Get 30% off <br /> On Your First <br /> Consultation
          </h1>
          <button className="bg-black text-white text-[12px] font-[Montserrat] py-2 px-6 rounded-3xl mt-10 md:hover:cursor-pointer md:hover:bg-transparent md:hover:text-black md:hover:border md:hover:border-black">
            Get Now
          </button>
        </div>
        {/*Card-2*/}
        <div className="flex flex-col items-start text-center p-9 rounded-3xl bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/Blue%20White%20Minimalist%20Rain%20Drop%20Pattern%20Autumn%20Page%20Border%20A4%20(Landscape)%20(1).png')] bg-cover bg-center transition-transform duration-300 hover:scale-95 hover:shadow-2xl ">
          <h1 className="font-[Montserrat] text-left  text-[16px]  text-black pb-2">
            Start your drone journey here.
          </h1>
          <h1 className="font-[Montserrat] text-left font-bold text-[30px] text-black leading-9 ">
            Drone <br /> Essentials for
            <br />
            Beginners
          </h1>
          <button className="text-black text-[12px] font-[Montserrat] py-2 px-6 rounded-3xl mt-10 border border-black md:hover:cursor-pointer md:hover:text-white md:hover:bg-black">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default Services;
