'use client'
import { ItemCard } from "@/components/itemCard";
import useFetch from "@/hooks/useFetch";


export const Produto = () => {
  const { data: Dishes } = useFetch(`/menu`);
  return(
    <>
    <div className="w-full h-auto min-h-screen py-10 px-10">
        <h2 className="text-3xl font-semibold">Menus</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-14">
        {Dishes?.map((item: any, index: number) => (
          <>
        <div className="bg-gray-600 flex flex-col text-white w-60 h-auto p-6 items-center rounded-md shadow-lg">
          <div className="text-2xl font-bold mb-2">{item?.nome}</div>
          <div className="text-lg mb-4">{(item?.preco).toLocaleString("pt-PT", { style: "currency", currency: "AOA" })}</div>
          <button className="bg-[#F3BC5A] text-gray-800 py-2 px-10 rounded-md hover:bg-[#F3E9D3]">
            ver
          </button>
        </div>
          </>
          ))}
        </div>
    </div>
    </>
  )
}
export default Produto