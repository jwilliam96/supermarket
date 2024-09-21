
import { CategoriesPopular, DownloadApp, Header, SectionTwo, ServiceInfo, SpecialOffersOne } from "@/ui";
import { Button, SwiperContainer, Title } from "@/components";
import Image from "next/image";


export default async function Home() {

  return (
    <>

      {/* HEADER  */}

      <Header />

      {/* SECCIÓN UNO  */}

      {/* BENEFICIOS  USUARIO*/}
      <ServiceInfo />

      <section className=" max-w-[1600px] mx-auto md:px-8">

        {/* MEJORES OFERTAS  */}
        <Title text="Mejores ofertas" />

        <SwiperContainer filterProduct="offer" />

        <Button text="Comprar mejores ofertas" />


        {/* PROMOCIÓN*/}
        {/* VINOS Y ESPONJA  */}
        <SpecialOffersOne />

        {/*CATEGORÍAS MAS POPULARES  */}
        <Title text="Categorías mas populares" />

        <CategoriesPopular />

        {/* INICIAR LA COMPRA  */}
        <Title text="Iniciar la Compra" />
        <SwiperContainer filterProduct="all" />

        <Button text="Comprar productos" />

      </section>

      {/* POST UNO  */}

      {/* DESCARGA APP  */}
      <DownloadApp />

      {/* SECCIÓN DOS */}

      <SectionTwo />

      {/* POST DOS */}

      <div className="relative mt-20">
        <div className="absolute inset-0 bg-[#00000052] z-30" />
        <Image
          className="w-full h-[500px] object-cover"
          src={"/home/frescura.png"} width={1500} height={600} alt="frutas y verduras" />
      </div>

    </>
  )
}