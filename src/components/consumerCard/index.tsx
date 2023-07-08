import Image, { StaticImageData } from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
// import antd from "antd";
// import { Rate } from "rsuite";

interface CardProps {
  nome: string;
  imagem: StaticImageData;
  descricao: string;
}

export const ConsumerCard: React.FC<CardProps> = ({
  nome,
  imagem,
  descricao,
}) => {
  return (
    <>
      <div className="md:w-[20rem] h-auto b-[#A08E80] border-2 flex flex-col gap-4 px-4 py-4 rounded-md">
        <div className="flex flex-col items-center">
          <div className="flex w-full h-32 flex-wrap">
            <p className="w-[100%] text-xs text-left">{descricao}</p>
          </div>
          <div className="w-full">
            {imagem ? (
              <Image
                src={imagem}
                alt={nome}
                width={45}
                className="rounded-full h-[3rem]"
              />
            ) : null}
            <h3 className="text-xs px-2 py-1 text-[#998B85] font-semibold">
              {nome}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
