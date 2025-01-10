import React from "react";
function Categories() {
  return (
    <div>
      <div className="2xl:container mx-auto bg-white pb-1">
        <div className="pl-36">
          <h1 className="hidden md:block font-[Montserrat] text-[25px] pt-4">
            Categories
          </h1>
          <h1 className="sm:block md:hidden font-[Montserrat] text-[25px] pt-4 pb-14">
            Categories
          </h1>

          <hr className="hidden md:block w-32 bg-blue-900 h-1"></hr>
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mb-5 p-2 mt-5 gap-6 pb-6">
          {/* Card-1 (Visible on md and lg screens) */}

          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://ik.imagekit.io/ajql7av7t/vayuratha/Drone-1.png"
              alt="card-image"
              className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
              Drone
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              20 Products
            </p>
          </div>

          {/* Card-2 (Visible on md and lg screens) */}
          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://ik.imagekit.io/ajql7av7t/vayuratha/controller.png"
              alt="card-image"
              className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
              Controller
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              10 Products
            </p>
          </div>
          {/* Card-3 (Visible on md and lg screens) */}

          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://ik.imagekit.io/ajql7av7t/vayuratha/Drone-1.png"
              alt="card-image"
              className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
              Camera
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              15 Products
            </p>
          </div>

          {/* Card-4 (Visible on md and lg screens) */}
          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://ik.imagekit.io/ajql7av7t/vayuratha/rc%20motion.png"
              alt="card-image"
              className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
              RC Motion
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              8 Products
            </p>
          </div>
          {/* Card-5 (Visible on md and lg screens) */}
          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://ik.imagekit.io/ajql7av7t/vayuratha/goggles.webp"
              alt="card-image"
              className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
              Goggles
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              6 Products
            </p>
          </div>
          {/* Card-6 (Visible on md and lg screens) */}
          <div class="hidden md:flex md:flex-col md:items-center md:text-center md:rounded-2xl md:border-2 md:border-gray-300 md:hover:cursor-pointer md:hover:shadow-2xl bg-slate-100 transition-all duration-500 ease-in-out hover:scale-105">
            <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] pt-16 transition-opacity duration-700 ease-in-out hover:opacity-90">
              View All <br /> Categories{" "}
            </h1>
            <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
              Total 12 Categories{" "}
            </p>
            <img
              src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-2048x2048-m0qcnetg.png"
              alt="Arrow-icon"
              className="h-[20px] transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>

          {/* Small Screen (Visible only on small screens) */}
          {/* Card-2 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/ajql7av7t/vayuratha/Drone-1.png"
                alt="card-image"
                className="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <h1 className="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
                Drone
              </h1>
              <p className="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                20 Products
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/ajql7av7t/vayuratha/controller.png"
                alt="card-image"
                class="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
                Controller
              </h1>
              <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                10 Products
              </p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/ajql7av7t/vayuratha/Drone-1.png"
                alt="card-image"
                class="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
                Camera
              </h1>
              <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                15 Products
              </p>
            </div>
          </div>
          {/* Card-4 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/ajql7av7t/vayuratha/rc%20motion.png"
                alt="card-image"
                class="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
                RC Motion
              </h1>
              <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                8 Products
              </p>
            </div>
          </div>
          {/* Card-5 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <img
                src="https://ik.imagekit.io/ajql7av7t/vayuratha/goggles.webp"
                alt="card-image"
                class="h-[180px] transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] transition-opacity duration-700 ease-in-out hover:opacity-90">
                Goggles
              </h1>
              <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                6 Products
              </p>
            </div>
          </div>
          {/* Card-6 */}
          <div className="md:hidden flex justify-center items-center bg-slate-100 border-2 border-gray-300 mt-[-50px] m-16 rounded-3xl pt-5 pb-14 shadow-md hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="text-center">
              <h1 class="text-gray-700 text-[20px] font-semibold font-[Montserrat] pt-16 transition-opacity duration-700 ease-in-out hover:opacity-90">
                View All <br /> Categories{" "}
              </h1>
              <p class="text-gray-400 text-[12px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
                Total 12 Categories{" "}
              </p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-2048x2048-m0qcnetg.png"
                alt="Arrow-icon"
                className="h-[20px] pl-11 transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
