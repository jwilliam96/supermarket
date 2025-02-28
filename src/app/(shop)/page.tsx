
import { CategoriesPopular, DownloadApp, Header, SectionTwo, ServiceInfo, SpecialOffersOne } from "@/ui";
import { CardProduct, LinkButton, SwiperContainer, Title } from "@/components";
import { getProducts } from "@/actions/products/get-products";
import { Product } from "@/interface";
import Image from "next/image";



export default async function Home() {

  const products: Product[] = await getProducts()
  const filterProductsOffer = products.filter(product => product.offer)

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

        <SwiperContainer>
          {
            filterProductsOffer.map(product => (
              <CardProduct key={product.id} product={product} />
            ))
          }
        </SwiperContainer>

        <LinkButton text="Comprar mejores ofertas" href="/categories/ofertas" className="max-w-max" />


        {/* PROMOCIÓN*/}
        {/* VINOS Y ESPONJA  */}
        <SpecialOffersOne />

        {/*CATEGORÍAS MAS POPULARES  */}
        <Title text="Categorías mas populares" />

        <CategoriesPopular />

        {/* INICIAR LA COMPRA  */}
        <Title text="Iniciar la Compra" />


        <SwiperContainer>
          {
            products.map(product => (
              <CardProduct key={product.id} product={product} />
            ))
          }
        </SwiperContainer>

        <LinkButton text="Comprar productos" href="/categories/todos" />

      </section>

      {/* POST UNO  */}

      {/* DESCARGA APP  */}
      <DownloadApp />

      {/* SECCIÓN DOS*/}
      {/* MÁS POPULARES / PROMOCIONES / FRESCURA  */}
      <SectionTwo />

      {/* POST DOS FRESCURA*/}

      <div className="relative mt-20">
        <div className="absolute inset-0 bg-[#00000052] z-30" />
        <Image
          className="w-full h-[500px] object-cover"
          src={"/home/frescura.png"} width={1500} height={600} alt="frutas y verduras" />
      </div>

    </>
  )
}
