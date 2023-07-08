import Image from "next/image";
import img from "../../../public/anh-nguyen-kcA-c3f_3FE-unsplash.jpg";

export const ReserveFood = () => {
  return (
    <>
      <div className="w-full flex justify-between gap-6 md:px-40 py-10 h-auto ">
        <div className="flex flex-col pt-20 gap-6 md:w-[65rem]">
          <h2 className="text-4xl font-semibold">
            Do you have Any Dinner Plan Today? Reserve Your Table
          </h2>
          <p className="text-sm text-gray-600 w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            velit sapiente, mollitia qui, est, voluptatibus asperiores pariatur
            quibusdam placeat tempore obcaecati vitae eligendi quam doloribus
            tempora. Et obcaecati corporis quia.
          </p>
          <button className="self-start bg-[#E3B258] px-10 py-2 rounded-md">
            Reserve
          </button>
        </div>
        <div>
          <Image src={img} alt="img" width={700} />
        </div>
      </div>
    </>
  );
};
