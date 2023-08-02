'use client'
import { ItemCard } from "@/components/itemCard";
import useFetch from "@/hooks/useFetch";


export const Produto = () => {
  const { data: Dishes } = useFetch(`/category`);
  return(
    <>
    <div className="w-full h-screen py-10 px-10">
    <h2 className="text-3xl font-semibold">Categorias</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-14">
      {Dishes?.map((item: any, index: number) => (
        <>
      <div className="bg-gray-600 flex flex-col text-white w-44 h-auto  p-6 items-center rounded-md shadow-lg">
        <div className="text-2xl font-bold mb-2">{item?.nome}</div> 
      </div>
        </>
        ))}
      </div>
      </div>
    </>
  )
}
export default Produto