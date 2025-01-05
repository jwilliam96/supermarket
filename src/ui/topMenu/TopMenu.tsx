import { IconCorazonLleno } from "@/components/icons/Icons";
import { FaLocationDot } from "react-icons/fa6";
import { selectOption } from "@/utils/topMenu";
import logo from "/public/logo-completo.svg"
import CartMenu from "./CartMenu";
import { Search } from "./Search";
import Image from "next/image";
import Link from "next/link";

export function TopMenu() {

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
                        <Link href={"/auth/login"}>Entrar</Link>
                    </div>
                </div>
            </div>

            {/* SEARCH, CART  */}
            <div className="bg-red-500 py-5">

                <div className="flex gap-6 justify-between items-center px-6 max-w-[1600px] mx-auto ">
                    {/* lOGO  */}
                    <Link href={"/"} ><Image src={logo} alt="logo" className="h-[70px] w-auto" priority /></Link>

                    {/* SEARCH  */}
                    <div className="hidden sm:block max-w-[450px] w-full ">
                        <Search />
                    </div>

                    {/* CART, FAVORITE */}
                    <div className="flex gap-4">
                        <FaLocationDot size={25} />
                        <Link href={"/favorite"}><IconCorazonLleno size={27} /></Link>
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
                <div className="text-black lg:text-xl flex gap-8">
                    {
                        selectOption.map(option => (
                            <div key={option.title} className="group relative">
                                <div className="hover:text-red-500 cursor-pointer px-4">{option.title}</div>

                                {/* HOVER LISTA  */}
                                {
                                    option.menu && (
                                        <ul className="hidden group-hover:block absolute z-[60] bg-white w-[200px] p-4 space-y-2">
                                            {
                                                option.menu.map(list => (
                                                    <li key={list} className="cursor-pointer hover:text-red-500 capitalize">
                                                        <Link href={`/categories/${list}`}>{list}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}
