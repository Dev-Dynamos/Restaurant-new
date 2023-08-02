import { useRouter } from "next/navigation";

export const Header = () => {
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
              <li className="cursor-pointer">Sobre nós</li>
            </ul>
            {/* <button className="w-28 h-10 bg-[#E6B45E] rounded-md">Login</button> */}
          </div>
        </div>
      </header>
    </>
  );
};
