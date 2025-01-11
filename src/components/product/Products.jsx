import React from "react";

const Products = () => {
  return (
    <div>
      <div className="2xl:container mx-auto bg-white ">
        <div className="pl-36">
          <h1 className="hidden md:block font-[Montserrat] text-[25px] pt-4">
            Best Drones for you
          </h1>
          <h1 className="sm:block md:hidden font-[Montserrat] text-[25px] pt-4 pb-14">
            Categories
          </h1>
          <hr className="hidden md:block w-32 bg-blue-900 h-1"></hr>
        </div>

        {/* Flex container for Categories and Products */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto mb-5 p-2 mt-5 gap-5">
          {/* Categories Section */}
          <div className="bg-blue-200 rounded-3xl w-full md:w-[250px] p-3 "></div>

          {/* Products Section */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 p-2 flex-1">
            {/*Card-1*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-2*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-3*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-4*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-5*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-6*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-7*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-8*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2 ">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/*Card-9*/}
            <div className="flex flex-col text-center rounded-2xl border-2 border-yellow-200 hover:shadow-2xl bg-white transition-all duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col text-center bg-slate-100 rounded-t-2xl">
                <p className=" text-black px-1 py-1 border-2 border-yellow-00 bg-white mt-2 mr-2 ml-44 rounded-3xl">
                  Other
                </p>
                <img
                  src="https://ik.imagekit.io/ajql7av7t/vayuratha/Phoneholder-removebg-preview.png?updatedAt=1736503046171"
                  alt="card-image"
                  className="h-[200px]  transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>

              <div className="rounded-3xl">
                <div className="gap-x-11 px-4">
                  <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] text-start transition-opacity duration-700 ease-in-out hover:opacity-90">
                    Drone
                  </h1>
                </div>

                <div className="flex flex-row gap-x-11 px-4 ">
                  <p className="text-gray-700 font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                    5.0 (1.2k Reviews)
                  </p>
                  <p className="text-gray-700 text-[20px] font-semibold font-[Montserrat]">
                    $29.90
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 py-3 px-2">
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 rounded-3xl font-medium hover:bg-purple-400 hover:border-2">
                    Add to cart
                  </button>
                  <button className=" text-black px-6 py-2 border-2 border-yellow-400 bg-yellow-400 rounded-3xl font-medium hover:bg-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
