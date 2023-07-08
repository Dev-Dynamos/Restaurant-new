import { Banner } from "@/components/banner";
import { Chefs } from "@/components/chefs";
import { ConsumerSay } from "@/components/consumerSay";
import { Offer } from "@/components/offer";
import { PopularDishes } from "@/components/popularDishes";
import { ReserveFood } from "@/components/reserveFood";
import Image from "next/image";
// import "antd/dist/reset.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <PopularDishes />
      <Offer />
      <Chefs />
      <ConsumerSay />
      <ReserveFood />
    </main>
  );
}
