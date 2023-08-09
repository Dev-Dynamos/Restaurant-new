'use client'
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ItemCard } from "../itemCard";
import imageBanner from "../../../public/food.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import Modal from "@/components/Modal";
import FormCompra from "../FormCompra";

export const PopularDishes = () => {
  const { data: Dishes } = useFetch(`/product`);
  const [active, setActive] = React.useState(false)
  const [item, setItem] = React.useState({})

  function openModal(){
    setActive(true)
  }
  function closeModal(){
    setActive(false)
  }

  return (
    <div className="w-full h-auto px-10 pt-16">
      <div className="w-full flex items-center justify-between">
      <Modal isOpen={active} onClose={closeModal}>
        <h2 className="mb-4 text-xl font-bold">Fazer Pedido</h2>
        <FormCompra onclose={closeModal} item={item} />
      </Modal>
        <h3 className="text-3xl">Pratos populares</h3>
        <div className="flex gap-1 text-md pr-10">
          <button className="bg-[#F3BC5A] px-6 py-2 rounded-md text-white"><Link href="/Produto">Ver mais</Link></button>
        </div>
      </div>
      <div className="w-[1248px] flex h-auto pt-8 pb-8 gap-2 items-center">
        {Dishes && Dishes.length > 0 ? (
          <Splide
            className="flex"
            options={{
              fixedWidth: 300,
              gap: 40,
              pagination: false,
              arrows: false,
              perPage: 1,
              perMove: 1,
              width: "100%"
            }}
          >
            {Dishes.map((item: any, index: number) => (
              <SplideSlide key={item?.id}>
                <ItemCard
                  descricao={item?.descricao}
                  nome={item?.nome}
                  preco={item?.preco}
                  openModal={openModal}
                  setItem={setItem}
                  item={item}
                  imagem={item?.ficheiro?.caminho}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <p>Não há pratos populares disponíveis no momento.</p>
        )}
      </div>
    </div>
  );
};
