import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

export function TopMenu() {
    return (
        <header className=" text-white">

            {/* ATENCIÓN AL CLIENTE */}
            <div className="flex justify-between items-center bg-red-800 py-5 px-20">
                <ul className="flex gap-4">
                    <li>Acerca de</li>
                    <li>Atención al Cliente</li>
                </ul>

                <p>-20% en tu primer pedido. Suscríbete</p>

                <div className="flex gap-4 items-center ml-36">
                    <figure className="w-8 h-8 bg-black rounded-full"></figure>
                    <span>Entrar</span>
                </div>
            </div>

            {/* SEARCH, CART  */}
            <div className="flex justify-between items-center bg-red-500 py-5 px-20">
                {/* lOGO  */}
                <Link href={"/"}><h1 className="text-4xl">Trébol</h1></Link>

                {/* SEARCH  */}
                <div className="flex w-[450px] bg-white rounded-full overflow-hidden p-[1px]">
                    <input type="text" className="grow bg-red-500 rounded-s-full outline-white pl-8" />
                    <CiSearch size={20} className="m-2 text-red-500" />
                </div>

                <div className="flex gap-4">
                    <FaLocationDot size={25} />
                    <IoHeart size={25} />
                    <FaShoppingCart size={25} />
                </div>
            </div>

            {/* LIST  */}
            <div className="flex justify-center py-6">
                <ul className="text-black flex gap-8">
                    <li>Ofertas</li>
                    <li>Comida</li>
                    <li>Bebidas</li>
                    <li>Limpieza del hogar</li>
                    <li>Cuidado personal</li>
                    <li>Más vendido</li>
                    <li>Mis pedidos</li>
                </ul>
            </div>
        </header>
    )
}
