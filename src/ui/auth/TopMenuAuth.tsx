import { IconCorazonLleno } from "@/components/icons/Icons";
import { FaLocationDot } from "react-icons/fa6";
import logo from "/public/logo-completo.svg"
import { Search } from "../topMenu/Search";
import CartMenu from "../topMenu/CartMenu";
import Image from "next/image";
import Link from "next/link";


export function TopMenuAuth() {
    return (
        <header className=" text-white">

            {/* ATENCIÓN AL CLIENTE */}
            <div className="bg-red-800 py-5 px-4">
                <div className="flex justify-between items-center text-center text-sm ss:text-base max-w-[1600px] mx-auto">
                    <ul className="flex gap-4">
                        <li>Acerca de</li>
                        <li>Atención al Cliente</li>
                    </ul>


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
                    <Link href={"/"} ><Image src={logo} alt="logo" className="h-[70px] w-auto" priority /></Link>


                    {/* CART, FAVORITE */}
                    <div className="flex gap-4">
                        <FaLocationDot size={25} />
                        <Link href={"/favorite"}><IconCorazonLleno size={27} /></Link>
                        <CartMenu />
                    </div>
                </div>

            </div>

        </header>
    )
}
