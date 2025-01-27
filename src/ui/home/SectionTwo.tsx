import { LinkButton, SwiperContainer, Title } from "@/components";
import { getProducts } from "@/actions/products/get-products";
import cereales from "/public/home/section2oferta.png"
import pastas from "/public/home/section2.png"
import Image from "next/image";

export async function SectionTwo() {

    const products = await getProducts()

    return (
        <section className="max-w-[1600px] m-auto md:px-4">

            <Title text="Más populares" />

            {/* <MAS POPULARES */}
            <SwiperContainer products={products} filterProduct="ventas" />

            <LinkButton text="Comprar más populares" href="/categories/más vendido" />


            {/* PROMOCIONES DOS  */}
            {/* ESPAGUETIS / CEREALES  */}

            <div className="grid lg:grid-cols-2 lg:gap-12 my-20">
                <figure className="relative h-[450px]">
                    <figcaption
                        className="absolute z-30 mx-auto right-0 left-0 px-4 ss:px6
                mm:w-[450px] md:w-[500px] lg:w-[600px]
                top-1/2 -translate-y-1/2  ">

                        <div className="relative">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-bold text-xl">¡Es la hola del vino!</p>
                                    <p className="font-bold my-4 text-3xl md:text-4xl lg:text-5xl ">Gran oferta en </p>
                                </div>

                            </div>

                            <h3 className="font-bold mb-8 text-4xl md:text-5xl lg:text-7xl ">Vinos selectos</h3>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-full  hover:bg-red-700">Comprar ahora</button>
                        </div>


                    </figcaption>
                    <Image
                        className=" object-cover "
                        src={pastas}
                        alt="pastas"
                        fill
                        sizes="(max-w: 1270) 100vw, (max-w: 1600) 50vw"
                    />
                </figure>

                <figure className="relative h-[450px]">
                    <figcaption
                        className="absolute right-0 left-0 top-1/2 -translate-y-1/2
                         px-6 z-30  mm:w-10/12 mm:mx-auto md:left-1/2 md:-translate-x-1/2 flex justify-between ">

                        <div>
                            <p className="text-xl font-bold">Oferta de la semana</p>
                            <h3 className="text-7xl md:text-9xl font-bold">-30%</h3>
                            <p className="text-2xl md:text-3xl font-bold">Productos de limpieza</p>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-700">Comprar ahora</button>

                        </div>

                        {/* OFFER  CIRCLE */}
                        <div className=" 
                            size-20 shrink-0 rounded-full bg-red-500 grid place-content-center text-center text-white rotate-12 font-bold
                            ss:size-28 md:size-32 
                                  md:text-2xl lg:size-32 " >
                            <p>oferta</p>
                            <span>limitada</span>
                        </div>
                    </figcaption>
                    <Image
                        className=" object-cover"
                        src={cereales}
                        alt="cereales"
                        fill
                        sizes="(max-w: 1270) 100vw, (max-w: 1600) 50vw"
                    />
                </figure>
            </div>

            <Title text="Compra frescura" />

            <SwiperContainer products={products} filterProduct="frescura" />

            <LinkButton text="Continuar comprando" href="/categories/verduras y frutas" />
        </section>
    )
}
