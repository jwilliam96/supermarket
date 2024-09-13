import { getProductById } from "@/actions";
import { Product } from "@/interface";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";


export default async function ProductPage({ params }: { params: { name: string } }) {

    const product: Product = await getProductById(params.name)

    return (
        <div className="min-h-screen">
            <Link href={"/"} className="flex gap-2 items-center"> <IoIosArrowBack size={25} /> <span>Volver a Inicio</span></Link>
            <h1>Hello Page</h1>

            <p>{product.title}</p>
        </div>
    );
}