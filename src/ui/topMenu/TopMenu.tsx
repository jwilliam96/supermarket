import { IconCarrito, IconCorazon } from "@/components/icons/Icons";
import { FaLocationDot } from "react-icons/fa6";
import { Search } from "./Search";
import Link from "next/link";
import CartMenu from "./CartMenu";

export function TopMenu() {

    const selectOption = ["Ofertas", "Comidas", "Bebidas", "Limpieza del hogar", "Cuidado personal", "Más vendido", "Mis pedidos"]

    return (
        <header className=" text-white">

            {/* ATENCIÓN AL CLIENTE */}
            <div className="bg-red-800 py-5 px-4">
                <div className="flex justify-between items-center text-center text-sm ss:text-base max-w-[1600px] mx-auto">
                    <ul className="flex gap-4">
                        <li>Acerca de</li>
                        <li>Atención al Cliente</li>
                    </ul>

                    <p className="hidden lg:block">-20% en tu primer pedido. Suscríbete</p>

                    <div className="flex gap-4 items-center lg:ml-36">
                        <figure className="w-8 h-8 bg-black rounded-full"></figure>
                        <Link href={"/auth/register"}>Entrar</Link>
                    </div>
                </div>
            </div>

            {/* SEARCH, CART  */}
            <div className="bg-red-500 py-5">

                <div className="flex gap-6 justify-between items-center px-6 max-w-[1600px] mx-auto ">
                    {/* lOGO  */}
                    <Link href={"/"}><h1 className="text-4xl">Trébol</h1></Link>

                    {/* SEARCH  */}
                    <div className="hidden sm:block max-w-[450px] w-full ">
                        <Search />
                    </div>

                    {/* CART, FAVORITE */}
                    <div className="flex gap-4">
                        <FaLocationDot size={25} />
                        <IconCorazon size={27} />
                        <CartMenu />
                    </div>
                </div>
                {/* SEARCH MOBILE  */}
                <div className="sm:hidden block mt-4 px-6 max-w-[450px] w-full mx-auto">
                    <Search />
                </div>
            </div>

            {/* LIST  */}
            <div className="hidden md:flex justify-center py-6 ">
                <ul className="text-black flex gap-8">
                    {
                        selectOption.map(option => (
                            <li key={option}>{option}</li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
