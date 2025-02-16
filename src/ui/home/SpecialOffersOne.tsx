import Image from "next/image";
import Link from "next/link";

export function SpecialOffersOne() {
    return (
        <div className="xl:grid xl:grid-cols-3 gap-10 my-20">

            {/* VINO  */}

            <figure className="relative col-span-2 h-[350px] lg:h-[450px]">

                <figcaption className="absolute z-30 mx-auto right-0 left-0 px-4 ss:px6
                mm:w-[450px] md:w-[500px] lg:w-[600px]
                top-1/2 -translate-y-1/2  ">

                    <div className="relative">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-xl">¡Es la hola del vino!</p>
                                <p className="font-bold my-4 text-3xl md:text-4xl lg:text-5xl ">Gran oferta en </p>
                            </div>

                            {/* OFFER  CIRCLE */}
                            <div className=" absolute right-0 ss:-top-10
                            size-20 shrink-0 rounded-full bg-red-500 grid place-content-center text-center text-white rotate-12 font-bold
                            ss:size-28 md:size-32 
                                  md:text-2xl lg:size-32 " >
                                <p>oferta</p>
                                <span>limitada</span>
                            </div>
                        </div>

                        <h3 className="font-bold mb-8 text-4xl md:text-5xl lg:text-7xl ">Vinos selectos</h3>
                        <Link href={"/categories/vinos"} className="bg-red-500 text-white px-4 py-2 rounded-full  hover:bg-red-700">Comprar ahora</Link>
                    </div>


                </figcaption>

                <Image
                    className=" object-cover "
                    src={"/home/vino.png"}
                    fill
                    sizes="(max-w: 1270) 100vw, (max-w: 1600) 66vw"
                    alt="botella de vino" />
            </figure>

            {/* ESPONJA  */}

            <figure className="relative h-[350px] lg:h-[450px]">

                <figcaption className="absolute right-0 left-0 px-6 z-30 top-1/2 -translate-y-1/2 md:left-1/2 mm:w-[450px] mm:mx-auto md:-translate-x-1/2 ">
                    <p className="text-xl font-bold">Oferta de la semana</p>
                    <h3 className="text-8xl md:text-9xl font-bold">-40%</h3>
                    <p className="text-2xl md:text-3xl font-bold">Productos de limpieza</p>
                    <Link href={"/categories/productos%20de%20limpieza"} className="inline-block bg-red-500 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-700">Comprar ahora</Link>
                </figcaption>
                <Image
                    className="h-full object-cover"
                    src={"/home/esponja.png"}
                    fill
                    sizes="(max-w: 1270) 100vw, (max-w: 1600) 33vw"
                    alt="botella de vino" />
            </figure>

        </div>
    )
}
