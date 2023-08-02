import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { ItemCard } from "../itemCard";
import imageBanner from "../../../public/derrick-pare-okPdcD03F7g-unsplash.jpg";
import { ConsumerCard } from "../consumerCard";

export const ConsumerSay = () => {
  return (
    <>
      <div className="w-full h-[35rem] px-10 pt-16">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-3xl">O que os consumidores dizem?</h3>
          <div className="flex gap-1 text-4xl pr-10">
            <FiArrowLeftCircle className="hover:bg-[#F3BC5A] rounded-full cursor-pointer text-amber-700" />
            <FiArrowRightCircle className="hover:bg-[#F3BC5A] rounded-full cursor-pointer text-amber-700" />
          </div>
        </div>
        <div className="flex w-full pt-10 gap-2 items-center justify-between">
          <ConsumerCard
            descricao='"Eu simplesmente amo o Restaurante Delícias do Sabor! A comida lá é incrível e sempre me deixa com água na boca. Os pratos são preparados com ingredientes frescos e de alta qualidade, e o sabor é simplesmente divino. Cada vez que vou ao restaurante, sou recebido com um serviço caloroso e amigável."'
            nome="Erick"
            imagem={imageBanner}
          />
          <ConsumerCard
            descricao='"Eu simplesmente amo o Restaurante Delícias do Sabor! A comida lá é incrível e sempre me deixa com água na boca. Os pratos são preparados com ingredientes frescos e de alta qualidade, e o sabor é simplesmente divino. Cada vez que vou ao restaurante, sou recebido com um serviço caloroso e amigável."'
            nome="Erick"
            imagem={imageBanner}
          />
          <ConsumerCard
            descricao='"Eu simplesmente amo o Restaurante Delícias do Sabor! A comida lá é incrível e sempre me deixa com água na boca. Os pratos são preparados com ingredientes frescos e de alta qualidade, e o sabor é simplesmente divino. Cada vez que vou ao restaurante, sou recebido com um serviço caloroso e amigável."'
            nome="Erick"
            imagem={imageBanner}
          />
          <ConsumerCard
            descricao='"Eu simplesmente amo o Restaurante Delícias do Sabor! A comida lá é incrível e sempre me deixa com água na boca. Os pratos são preparados com ingredientes frescos e de alta qualidade, e o sabor é simplesmente divino. Cada vez que vou ao restaurante, sou recebido com um serviço caloroso e amigável."'
            nome="Erick"
            imagem={imageBanner}
          />
        </div>
      </div>
    </>
  );
};
