import Image from "next/image";
import ImageBanner from "../../../public/food.jpg";
import Link from "next/link";

export const Banner = () => {
  return (
    <>
      <div className="w-full h-[35rem] bg-[#FFFCF7] px-10 flex justify-between">
        <div className="pt-40 w-[50%]">
          <h3 className="text-6xl w-[80%]">Servimos o prato que você ama</h3>
          <div className="pt-10 w-[85%]">
            <p className="text-justify text-slate-600 text-sm ">
              No Restaurante da Dona Makenda, convidamos você a embarcar em uma viagem gastronômica única,
              explorando as ricas tradições culinárias do continente africano. Nossa chef talentosa e apaixonada,
              Dona Makenda, traz consigo segredos de família transmitidos por gerações, combinando ingredientes frescos
              e especiarias cuidadosamente selecionadas para criar pratos que cativam todos os sentidos.
            </p>
            <div className="pt-6 gap-3 flex">
              <button className="w-[8rem] h-[3rem] text-white hover:bg-[#F3BC5A] border-[1px] bg-[#F3BC5A] rounded-md">
                <Link href={"/Produto"}>Explorar mais</Link>
              </button>
              <button className="w-[8rem] h-[3rem] hover:brightness-90 bg-slate-700 text-white rounded-3xl border-[1px] border-[#FDF3E1] ">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20 pr-20">
          <Image loading="lazy" src={ImageBanner} className="rounded-full" alt="food" width={"600"} height={"600"} />
        </div>
      </div>
    </>
  );
};
