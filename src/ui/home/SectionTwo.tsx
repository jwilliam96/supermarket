import { Button, SwiperCard, SwiperContainer, Title } from "@/components";
import pastas from "/public/home/section2.png"
import cereales from "/public/home/section2oferta.png"
import Image from "next/image";

export function SectionTwo() {
    return (
        <section className="container m-auto">

            <Title text="Más populares" />

            {/* <MAS POPULARES */}
            <SwiperContainer filterProduct="ventas" />

            <Button text="Comprar más populares" />


            {/* PROMOCIONES DOS  */}

            {/* FRESCURA  */}

            <div className="lg:flex gap-12 my-20">
                <figure>
                    <Image
                        className=" object-cover "
                        src={pastas} alt="pastas" />
                </figure>
                <figure>
                    <Image
                        className=" object-cover"
                        src={cereales} alt="cereales" />
                </figure>
            </div>

            <Title text="Compra frescura" />

            <SwiperContainer filterProduct="frescura" />

            <Button text="Continuar comprando" />
        </section>
    )
}
