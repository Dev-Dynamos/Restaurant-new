import Image from "next/image";
import { BiCoffeeTogo } from "react-icons/bi";
import imageRestaurant from "../../../public/jeff-siepman-z-IxdGQ7lPU-unsplash.jpg";

export const Offer = () => {
  return (
    <>
      <div className="w-full h-[40rem] flex flex-col md:flex-row gap-20 justify-between px-10">
        <div className="flex w-[70%]">
          <Image src={imageRestaurant} alt="garcon" width={600} height={400} />
        </div>
        <div className="w-full">
          <div className="py-14 flex flex-col gap-6">
            <h2 className="text-4xl w-[28rem]">
              Nós somos a melhor solução{" "}
            </h2>
            <p className="w-[30rem] text-justify">
              🌟 Descubra a Experiência Única da Dona Makenda - Sua Jornada Gastronômica Africana! 🌟
              Se você está em busca de uma verdadeira viagem culinária, 
              o Restaurante Dona Makenda é o destino ideal para satisfazer todos os seus sentidos.
              Localizado no coração da cidade, nossa casa é um autêntico pedacinho da África, 
              trazendo até você as delícias e sabores mais autênticos desse continente vibrante.
            </p>
          </div>
          <div className="hidden flex-wrap w-96 gap-4">
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Drinks Exóticos
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Mufete
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Churrasco Africano
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Moqueca de Peixe com Dendê
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Moqueca de Peixe com Dendê
            </p>
            <p className="flex items-center gap-6 ">
              <span className="text-2xl">
                <BiCoffeeTogo />
              </span>
              Churrasco Africano
            </p>
          </div>

          <button className="px-10 py-2 rounded-md mt-2 bg-[#F3BC5A]">
            Sobre nós
          </button>
        </div>
      </div>
    </>
  );
};
