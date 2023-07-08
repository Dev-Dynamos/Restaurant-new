import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ItemCard } from "../itemCard";
import imageBanner from "../../../public/food.jpg";

export const PopularDishes = () => {
  return (
    <>
      <div className="w-full h-[35rem] px-10 pt-16">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-3xl">Pratos populares</h3>
          <div className="flex gap-1 text-4xl pr-10">
            <FiArrowLeftCircle className="hover:bg-[#F3BC5A] rounded-full cursor-pointer text-amber-700" />
            <FiArrowRightCircle className="hover:bg-[#F3BC5A] rounded-full cursor-pointer text-amber-700" />
          </div>
        </div>
        <div className="flex w-full pt-10 gap-2 items-center justify-between">
          <ItemCard
            descricao="poo"
            nome="dood"
            preco={2000}
            imagem={imageBanner}
            rate={[1, 2, 3, 4]}
          />
          <ItemCard
            descricao="poo"
            nome="dood"
            preco={2000}
            imagem={imageBanner}
            rate={[1, 2, 3, 4]}
          />{" "}
          <ItemCard
            descricao="poo"
            nome="dood"
            preco={2000}
            imagem={imageBanner}
            rate={[1, 2, 3, 4]}
          />{" "}
          <ItemCard
            descricao="poo"
            nome="dood"
            preco={2000}
            imagem={imageBanner}
            rate={[1, 2, 3, 4]}
          />
        </div>
      </div>
    </>
  );
};
