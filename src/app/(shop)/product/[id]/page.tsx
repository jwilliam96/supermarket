import { IconCorazon } from "@/components/icons/Icons";
import PoliticInfo from "@/components/PoliticInfo";
import { IoIosArrowBack } from "react-icons/io";
import { Button, Counter } from "@/components";
import { getProductById } from "@/actions";
import { Product } from "@/interface";
import Image from "next/image";
import Link from "next/link";


export default async function ProductPage({ params }: { params: { id: string } }) {

    const product: Product = await getProductById(params.id)

    return (
        <div className="min-h-screen max-w-[500px] mx-auto md:max-w-[1100px] my-8">
            <Link href={"/"} className="flex gap-2 items-center my-8 md:hidden">
                <IoIosArrowBack size={25} />
                <span className="underline underline-offset-8 decoration-black/60">Volver a Inicio</span>
            </Link>

            <div className="relative px-4 md:grid md:grid-cols-2 md:gap-4 ">

                {/* IMAGE  */}
                <div>
                    <figure className="relative h-[350px] md:h-[500px] md:border">

                        {/* ETIQUETA OFFER  */}
                        {
                            product.offer && (
                                <span className="bg-red-500 text-white text-xl py-1 px-8 absolute top-0 left-0 z-30 lg:text-2xl">Oferta</span>
                            )
                        }
                        <Image src={product.image} alt={product.description}
                            className="object-cover md:object-contain"
                            sizes="(max-w: 768) 100vw, 528px"
                            fill
                            priority />
                    </figure>

                    {/* DESCRIPTION DESKTOP  */}
                    <p className="hidden md:block my-6 text-sm lg:text-base">{product.description}</p>
                </div>


                {/* INFORMACIÓN  */}
                <div>
                    <p >Disponibles: <span className="text-xl">{product.stock}</span></p>

                    <div className="my-2 grid gap-2 lg:my-10 lg:gap-4">
                        <h2 className="text-2xl font-bold lg:text-3xl">{product.title}</h2>

                        {/* PRICE  */}
                        <div className='text-2xl py-2 lg:text-3xl'>
                            {
                                product.offer ? (
                                    <>
                                        <span className='before:content-["$"] text-red-500 line-through'>{product.price}</span>
                                        <span className='pl-4 text-green-700 before:content-["$"]'>{(product.price - (product.price * 0.20)).toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span className='before:content-["$"] text-green-700 ' >{product.price}</span>
                                )
                            }
                        </div>
                    </div>

                    {/* COUNTER  */}
                    <div className="w-[200px] mt-4">
                        <h3>Cantidad :</h3>
                        <Counter />
                    </div>

                    {/* BUTTON  FAVORITE*/}
                    <div className="md:flex items-center gap-8">
                        <Button text="Agregar al Carrito" className="mx-0 w-full" />
                        <div className="size-12 border border-red-500 rounded-full hidden  md:flex justify-center items-center shrink-0 ">
                            <IconCorazon className="text-red-500 " />
                        </div>
                    </div>

                    {/* DESCRIPTION MOBILE  */}
                    <p className="md:hidden">{product.description}</p>

                    {/* INFORMACIÓN Y POLÍTICAS  */}
                    <div className="my-8">

                        <PoliticInfo />

                    </div>
                </div>
            </div>
        </div>
    );
}