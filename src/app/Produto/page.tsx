'use client'
import { FormCompra } from "@/components/FormCompra";
import Modal from "@/components/Modal";
import { ItemCard } from "@/components/itemCard";
import useFetch from "@/hooks/useFetch";
import React from "react";


export const Produto = () => {
  const [active, setActive] = React.useState(false)
  const { data: Dishes } = useFetch(`/product`);
  const [item, setItem] = React.useState({})
  function openModal(){
    setActive(true)
  }
  function closeModal(){
    setActive(false)
  }
  return(
    <>
    <div className="w-full h-auto py-10 px-10">
      <Modal isOpen={active} onClose={closeModal}>
        <h2 className="mb-4 text-xl font-bold">Fazer Pedido</h2>
        <FormCompra onclose={closeModal} item={item} />
      </Modal>
        <h2 className="text-3xl font-semibold">Produtos</h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-8">
        {Dishes?.map((item: any, index: number) => (
          <>
                <ItemCard
                  descricao={item?.descricao}
                  nome={item?.nome}
                  preco={item?.preco}
                  imagem={item?.ficheiro?.caminho}
                  openModal={openModal}
                  setItem={setItem}
                  item={item}
                  key={item?.id}
                />
          </>
          ))}
        </div>
    </div>
    </>
  )
}
export default Produto