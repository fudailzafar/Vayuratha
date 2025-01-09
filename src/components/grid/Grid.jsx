import React from "react";

const Grid = () => {
  return (
    <div className="2xl:container mx-auto bg-white">
      {/* Row-1 */}
      <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-5 gap-2 md:hover:cursor-pointer col-span-2">
        {/*Card 1*/}
        <div className="bg-[url('https://ik.imagekit.io/a5ujvxcmh/drone-1.avif')] alt-drone-img rounded-3xl h-[300px] col-span-2">
          <div className="bg-slate-800/50 pb-10 rounded-b-3xl mt-52">
            <h2 className=" text-white mt-48 px-6">
              "Incredible drone with superb camera
              <br /> quality and user-friendly features." - Alex
            </h2>
          </div>
        </div>
        {/*Card 2*/}
        <div className="bg-[#f6f6f6] rounded-3xl h-[300px] w-[400px] p-12">
          <h2 className="text-[40px] font-medium pb-2">
            Our Happy <br /> Customers
          </h2>
          <p className="text-[15px] text-left">
            Explore our top-rated drones with advanced features and innovative
            technology designed for every flyer
          </p>
        </div>
      </div>

      {/* Row-2 */}
      <div className="2xl:container mx-auto bg-white">
        <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 pt-5 gap-2 md:hover:cursor-pointer">
          {/*Card 1*/}
          <div className="bg-[url('https://ik.imagekit.io/a5ujvxcmh/drone-1.avif')] alt-drone-img rounded-3xl h-[300px]">
            <div className="bg-slate-800/50 pb-10 rounded-b-3xl mt-52">
              <h2 className=" text-white mt-48 px-6">
                "Incredible drone with superb camera
                <br /> quality and user-friendly features." - Alex
              </h2>
            </div>
          </div>
          {/*Card 2*/}
          <div className="bg-[url('https://ik.imagekit.io/a5ujvxcmh/drone-1.avif')] alt-drone-img rounded-3xl h-[300px]">
            <div className="bg-slate-800/50 pb-10 rounded-b-3xl mt-52">
              <h2 className=" text-white mt-48 px-6">
                "Incredible drone with superb camera
                <br /> quality and user-friendly features." - Alex
              </h2>
            </div>
          </div>
          {/*Card 3*/}
          <div className="bg-[#f6f6f6] rounded-3xl h-[300px] p-10">
            <h2 className=" text-black font-bold text-[50px]">90%</h2>
            <p className="text-[18px] font-medium pt-2">
              Customer Recommended our <br /> Products To Everyone
            </p>
            <button className="text-white bg-black px-5 py-2 rounded-3xl mt-6">
              Get Your Drone Now
            </button>
          </div>
        </div>
      </div>
    </div>

    /*  <div className="2xl:container mx-auto bg-white">
      <div className="grid">
        <div className="grid grid-cols-3 gap-3 bg-white p-6">
          <div className="col-span-2 mx-auto my-auto w-[100%] h-[370px] bg-stone-100 flex items-end justify-start rounded-3xl">
            <h2 className="text-3xl pl-4 pb-9 pt-3 text-white bg-black rounded-b-3xl w-[100%]">
              "Incredible drone with superb camera
              <br /> quality and user-friendly features." - Alex
            </h2>
          </div>
          <div className="col-span-1 mx-auto my-auto w-[100%] h-[370px] bg-stone-100 flex items-start justify-center flex-col rounded-3xl">
            <h2 className="text-5xl font-medium pl-8">
              Our Happy <br /> Customers
            </h2>
            <p className="ml-8 mt-5 text-xl">
              Explore our top-rated drones with advanced features and innovative
              technology designed for every flyer
            </p>
          </div>
        </div>
        </div>
        </div>
        {/* Row 1 Ending *}
        <div className="grid grid-cols-3 bg-white p-6">
          <div className="col-span-1 mx-auto my-auto w-[100%] h-[330px] bg-stone-100 flex items-end justify-start rounded-3xl">
            <h2 className="text-xl pl-4 pb-9 pt-3 text-white bg-black rounded-b-3xl">
              "Amazing visuals and easy to use. Highly recommend Vayuratha!" -
              Emily
            </h2>
          </div>
          <div className="col-span-1 mx-auto my-auto w-[95%] h-[330px] bg-stone-100 flex items-end justify-start rounded-3xl">
            <h2 className="text-xl pl-4 pb-9 pt-3 text-white bg-black rounded-b-3xl">
              "Vayuratha is perfect for both fun and professional use.
              Impressive" - Brian
            </h2>
          </div>
          <div className="col-span-1 mx-auto my-auto w-[100%] h-[330px] bg-stone-100 flex items-start justify-center flex-col rounded-3xl">
            <h2 className="text-5xl font-bold mb-3 pl-8">90%</h2>
            <h3 className="text-2xl font-semibold mb-8 pl-8">
              Customer Recommended Our Products To Everyone
            </h3>
            <button className="bg-black text-white rounded-3xl p-2 w-[50%] ml-8">
              Get Your Drone Now
            </button>
          </div>
        </div>
        {/* Row 2 Ending *}
      </div>
    </div> */
  );
};

export default Grid;
