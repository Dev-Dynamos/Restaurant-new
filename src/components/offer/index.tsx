import Image from "next/image";
import { BiCoffeeTogo } from "react-icons/bi";
import imageRestaurant from "../../../public/jeff-siepman-z-IxdGQ7lPU-unsplash.jpg";

export const Offer = () => {
  return (
    <>
      <div className="w-full h-[40rem] flex flex-col md:flex-row gap-2 px-10">
        <div className="flex flex-1">
          <Image src={imageRestaurant} alt="garcon" width={700} />
        </div>
        <div className="md:w-[40rem]">
          <div className="py-14 flex flex-col gap-6">
            <h2 className="text-4xl w-[28rem]">
              We Are More Than Multiple Survice{" "}
            </h2>
            <p className="w-[30rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo sit est ratione sint soluta? Dolores, itaque, ipsam nemo
              dolor commodi provident perspiciatis incidunt ratione atque harum
              ab, voluptatibus libero doloribus!
            </p>
          </div>
          <div className="flex flex-wrap w-80 gap-4">
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              lorem psum
            </p>
          </div>

          <button className="px-10 py-2 rounded-md mt-10 bg-[#F3BC5A]">
            About us
          </button>
        </div>
      </div>
    </>
  );
};
