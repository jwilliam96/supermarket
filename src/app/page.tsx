
import { CategoriesPopular, DownloadApp, Header, SectionTwo, ServiceInfo, SpecialOffersOne } from "@/ui";
import { Button, SwiperCard, Title } from "@/components";
import Image from "next/image";

export default async function Home() {

  return (
    <main >

      {/* HEADER  */}

      <Header />

      {/* SECCIÓN UNO  */}

      <section className=" container mx-auto ">

        {/* BENEFICIOS  USUARIO*/}
        <ServiceInfo />

        {/* MEJORES OFERTAS  */}
        <Title text="Mejores ofertas" />

        <SwiperCard filterProduct={"offer"} />

        <Button text="Comprar mejores ofertas" />


        {/* PROMOCIÓN*/}
        {/* VINOS Y ESPONJA  */}
        <SpecialOffersOne />

        {/*CATEGORÍAS MAS POPULARES  */}
        <Title text="Categorías mas populares" />

        <CategoriesPopular />

        {/* INICIAR LA COMPRA  */}
        <Title text="Iniciar la Compra" />

        <SwiperCard filterProduct={"all"} />

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

    </main>
  )
}
