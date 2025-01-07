import { CartOrder, CartProducts } from "@/components";
import Link from "next/link";

export default function CartPage() {
    return (
        <div className="max-w-[1200px] mx-auto px-4">

            <h2 className="text-5xl my-8 font-semibold">Carrito</h2>

            <h3 className="text-xl mb-2">Agregar mas productos</h3>
            <Link href={"/"} className="underline text-red-500">Continua comprando</Link>

            <div className="grid gap-10 my-8 md:grid-cols-2">

                {/* PRODUCTOS  */}
                <div >
                    <CartProducts />
                </div>

                {/* ORDEN DE COMPRA */}
                <div className="relative">
                    <CartOrder />
                </div>

            </div>

        </div>
    );
}