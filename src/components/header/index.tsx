'use client'
import { GetUser } from "@/app/Entrar/actions";
import { useRouter } from "next/navigation";
import { AuthDropdown } from "../auth/dropdown";
import { useEffect, useState } from "react";

export const Header = () => {
  const [data, setData] = useState(null)

  async function handleData(){
    const data = await GetUser()
    if(data) setData(data)
  }
  useEffect(()=>{
    handleData()
  }, [])
  const router = useRouter()
  return (
    <>
      <header className="w-full h-20 bg-[#FFFCF7] px-10">
        <div className="w-full h-20 flex items-center">
          <div>
            <h3 className="text-2xl"><span className="text-[#E6B453]">Dona</span> Makenda</h3>
          </div>
          <div className="flex flex-1 justify-end gap-12 items-center">
            <ul className="flex gap-4">
              <li className="cursor-pointer" onClick={() => router.push(`/`)}>Inicio</li>
              <li className="cursor-pointer" onClick={() => router.push(`/Produto`)}>Produtos</li>
              <li className="cursor-pointer" onClick={() => router.push(`/Menu`)}>Menus</li>
              <li className="cursor-pointer" onClick={() => router.push(`/Categoria`)}>Categorias</li>
              <li className="cursor-pointer" onClick={() => router.push(`/meus-produtos`)}>Meus Pedidos</li>
            </ul>
            {data ? (<AuthDropdown user={data}/>) : (<button onClick={() => router.push("/Entrar")} className="w-28 h-10 bg-[#E6B45E] rounded-md">Entrar</button>)}
          </div>
        </div>
      </header>
    </>
  );
};
