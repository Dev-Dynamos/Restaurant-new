import Image, { StaticImageData } from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
  nome: string;
  imagem: StaticImageData | string;
  descricao: string;
  setItem: (item:object) => void
  item: object
  openModal: () => void
  preco: number;
}

export const ItemCard: React.FC<CardProps> = ({
  nome,
  setItem,
  descricao,
  item,
  openModal,
  preco,
  imagem,
}) => {
  const formattedPreco = (preco).toLocaleString("pt-PT", {
    style: "currency",
    currency: "AOA",
  });

  function openmm(item){
    setItem(item)
    openModal()
  }
  return (
    <div className="md:w-[20rem] h-[26rem] justify-between bg-[#FFFFFF] border-2 flex flex-col gap-4 px-4 py-6 rounded-md">
      <div className="flex items-center justify-center">
        <Image
          loading="lazy"
          src={imagem}
          alt={nome}
          width={300}
          height={200}
          className="rounded-3xl h-52"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3>{nome}</h3>
        <div className="flex w-full truncate">
          <p className="text-xs">{descricao}</p>
        </div>
      </div>
      <div className="flex justify-between items-center truncate ">
        <span className="text-[#A89793]">{`${formattedPreco}`} kz</span>
        <button onClick={() => openmm(item)} className="w-[8rem] px-1 border-2 py-2 hover:bg-[#F3BC5A] border-[#F3E9D3] rounded-3xl">
          Comprar
        </button>
      </div>
    </div>
  );
};
