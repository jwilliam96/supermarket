import { Button, SwiperCard, Title } from "@/components";
import Image from "next/image";

export function SectionTwo() {
    return (
        <section className="container m-auto">
            <Title text="Más populares" />

            {/* <SwiperCard filterProduct={"ventas"} /> */}

            <Button text="Comprar más populares" />


            {/* PROMOCIONES DOS  */}

            {/* FRESCURA  */}

            <div className="flex gap-12 my-20">
                <Image
                    className="w-1/2 object-cover"
                    src={"/home/section2.png"} width={900} height={500} alt="pastas" />
                <Image
                    className="w-1/2 object-cover"
                    src={"/home/section2oferta.png"} width={900} height={500} alt="cereales" />
            </div>

            <Title text="Compra frescura" />

            {/* <SwiperCard filterProduct="frescura" /> */}

            <Button text="Continuar comprando" />
        </section>
    )
}
