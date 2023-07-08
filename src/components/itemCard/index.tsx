import Image, { StaticImageData } from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
// import antd from "antd";
// import { Rate } from "rsuite";

interface CardProps {
  nome: string;
  imagem: StaticImageData;
  rate: number[];
  descricao: string;
  preco: number;
}

export const ItemCard: React.FC<CardProps> = ({
  nome,
  descricao,
  preco,
  rate,
  imagem,
}) => {
  return (
    <>
      <div className="md:w-[20rem] h-auto b-[#FFFFFF] border-2 flex flex-col gap-4 px-4 py-6 rounded-md">
        <div className="flex items-center justify-center">
          {imagem ? (
            <Image
              loading="lazy"
              src={imagem}
              alt={nome}
              width={300}
              className="rounded-3xl"
            />
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <h3>{nome}</h3>
          <div className="flex text-2xl">
            {rate?.map((item) => (
              <>
                <span className="text-[#F3BC5A]">
                  <AiFillStar />
                </span>
              </>
            ))}
          </div>
          <p className="text-xs">{descricao}</p>
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-[#A89793]">{preco} kz</span>
          <button className="w-[7rem] px-2 border-2 py-2 hover:bg-[#F3BC5A] border-[#F3E9D3] rounded-3xl">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
};
