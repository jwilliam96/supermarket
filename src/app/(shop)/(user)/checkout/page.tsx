import { CheckoutProducts, CheckoutSummary } from "@/ui";
import Link from "next/link";


export default function CheckoutPage() {


    return (
        <div className="max-w-[1200px] mx-auto px-4 mt-4 mb-10 ">
            <h2 className="text-5xl font-semibold mb-8">Resumen</h2>
            <p className="text-xl">Resumen de Orden</p>
            <Link href={"/cart"} className=" underline text-red-500">editar carrito</Link>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <CheckoutProducts />

                <CheckoutSummary />
            </div>
        </div>
    )
}
