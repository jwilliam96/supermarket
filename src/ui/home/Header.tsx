
import { imagesHeader } from "@/utils"
import { SwiperHeader } from "@/ui"
import Image from "next/image"
import Link from "next/link"


export function Header() {

    return (
        <header className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] lg:left-[10%] xl:left-[20%] 2xl:left-[25%] z-50">
                <p className="text-xl md:text-2xl">Fácil, fresco y cómodo</p>
                <h2 className="text-3xl font-bold my-4 md:text-7xl">Compra lo <br />básico del día</h2>
                <p className="text-2xl font-bold md:text-3xl">Ahorra en grande en <br />tus marcas favoritas</p>
                <Link
                    href={"/categories/Comida"}
                    className="inline-block bg-red-500 text-white text-xl px-3 py-2 rounded-full my-10"
                >
                    Comprar ahora
                </Link>
            </div>

            <SwiperHeader>
                {
                    imagesHeader.map((image, index) => (
                        <Image
                            fetchPriority={index === 0 ? "high" : "auto"}
                            className="object-cover w-full h-full "
                            sizes="(max-width: 768px) 100vw"
                            alt={image.description}
                            priority={index === 0}
                            src={image.img}
                            width={1000}
                            height={350}
                            key={index}
                        />
                    ))
                }
            </SwiperHeader>

        </header>
    )
}
