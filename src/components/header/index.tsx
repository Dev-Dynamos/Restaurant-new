export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-[#FFFCF7] px-10">
        <div className="w-full h-20 flex items-center">
          <div>
            <h3 className="text-2xl"><span className="text-[#E6B453]">Dona</span> Makenda</h3>
          </div>
          <div className="flex flex-1 justify-end gap-12 items-center">
            <ul className="flex gap-4">
              <li className="cursor-pointer">Inicio</li>
              <li className="cursor-pointer">Pratos</li>
              <li className="cursor-pointer">Menus</li>
              <li className="cursor-pointer">Categorias</li>
              <li className="cursor-pointer">Sobre nós</li>
            </ul>
            <button className="w-28 h-10 bg-[#E6B45E] rounded-md">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};
